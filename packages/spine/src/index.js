import cax from 'cax'
import spine from './lib/Spine'


function loadFile(url, callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', url, true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

class Spine extends cax.Group{
  constructor(atlas, json){
    super()
   // spine.Bone.yDown = true;
    this.containers = [];
    this.pages = [];
    // this.textureLoader = new TextureLoader;
    // this.textureLoader.addEventListener('success', (function (_this) {
    //   return function () {
    //     return _this.textureLoadHandler();
    //   };
    // })(this));
    // this.queue = new cax.LoadQueue(true);
    // this.queue.addEventListener("complete", (function (_this) {
    //   return function () {
    //     return _this.srcLoadHandler();
    //   };
    // })(this));
    // this.queue.loadManifest([
    //   {
    //     src: json,
    //     id: "json"
    //   }, {
    //     src: atlas,
    //     id: "atlas"
    //   }
    // ]);

    let loadedCount = 0
    loadFile(atlas,(content)=>{

      loadedCount++
      this._atlas = content
      if(loadedCount === 2){
      
        this.srcLoadHandler()
      }
    })

    loadFile(json,(content)=>{
      loadedCount++
      this.json =JSON.parse(content)
      if(loadedCount === 2){
        
        this.srcLoadHandler()
      }
    })
  }



  srcLoadHandler  () {

    var jsonSkeleton, skeletonData, stateData;

    // this.queue.addEventListener("complete", (function (_this) {
    //   return function () {
    //     return _this.imageLoadHandler(_this.textureLoader);
    //   };
    // })(this));


    this.atlas = new spine.Atlas(this._atlas, {
      load: (page, path, atlas)=> {
        console.log( path)
        cax.loadImg({
          img:'./'+path,
          complete:(img)=>{
            console.log(11)

            this.imageLoadHandler(img);
            this.ready = true
          }
        })
       
      },
      unload:  (texture)=> {
       
      }
    });
    jsonSkeleton = new spine.SkeletonJson(new spine.AtlasAttachmentLoader(this.atlas));
    skeletonData = jsonSkeleton.readSkeletonData(this.json);
    this.skeleton = new spine.Skeleton(skeletonData);
    this.skeleton.updateWorldTransform();
    stateData = new spine.AnimationStateData(skeletonData);
    this.state = new spine.AnimationState(stateData);

  }

  textureLoadHandler  () {
    return this.pageLoadHandler(this.textureLoader.page);
  }

  pageLoadHandler  (page) {
    return this.pages.push(page);
  }

  setSkin  (skinName) {
    var index, j, ref, results, skin;
    skin = this.skeleton.data.findSkin(skinName);
    this.skeleton.setSkin(skin);
    results = [];
    for (index = j = 0, ref = this.skeleton.drawOrder.length - 1; 0 <= ref ? j <= ref : j >= ref; index = 0 <= ref ? ++j : --j) {
      results.push((function (_this) {
        return function (index) {
          var slot;
          slot = _this.skeleton.drawOrder[index];
          _this.skeleton.skin.getAttachment(index, slot.data.name);
          return slot.setAttachment(_this.skeleton.skin.getAttachment(index, slot.data.name));
        };
      })(this)(index));
    }
    return results;
  }

  imageLoadHandler  (img) {
    console.log(11111111)
    var fn, j, len, ref, slot;
    ref = this.skeleton.drawOrder;
    console.log(ref)
    fn =   (slot)=> {
        var attachment, slotContainer, texture;
        attachment = slot.attachment;
        slotContainer = new cax.Group();
        this.containers.push(slotContainer);
        this.add(slotContainer);
        if (!(attachment instanceof spine.RegionAttachment)) {
          return;
        }
        attachment.img = img
        slotContainer.name = attachment.rendererObject.name;
        texture = this.createTexture(attachment, slot);
        slot.currentSprite = texture;
        slot.currentSpriteName = attachment.rendererObject.name;
        return slotContainer.add(texture);
      }
    for (j = 0, len = ref.length; j < len; j++) {
      slot = ref[j];
      fn(slot);
    }
    return this.onComplete();
  }

  onComplete  () {
    return false;
  }

  createTexture  (attachment, slot,img) {
    var data, height, spriteSheet, texture, width, x, y;
    x = attachment.rendererObject.x;
    y = attachment.rendererObject.y;
    width = attachment.rendererObject.rotate ? attachment.rendererObject.height : attachment.rendererObject.width;
    height = attachment.rendererObject.rotate ? attachment.rendererObject.width : attachment.rendererObject.height;
    data = {
      framerate: 60,
      imgs: [attachment.img],
      frames: [[x, y, width, height, width / 2, height / 2, 0 ]],
      animations:{
        a:{
          frames:[0]
        }
      },
      currentAnimation:'a'
    };
    console.log(attachment)
    texture = new cax.Sprite(data);
    texture.rotation = -attachment.rotation;
    if (attachment.rendererObject.rotate) {
      texture.rotation = -(attachment.rotation - 90);
    }
    slot.sprites = slot.sprites || {};
    slot.sprites[attachment.rendererObject.name] = texture;
    return texture;
  }

  update  (e) {
    if(!this.ready)return
    var drawOrder, i, j, ref, results;
    if (!this.skeleton) {
      return;
    }
    this.state.update(e.delta * 0.001);
    this.state.apply(this.skeleton);
    this.skeleton.updateWorldTransform();
    drawOrder = this.skeleton.drawOrder;
    results = [];
    for (i = j = 0, ref = this.skeleton.drawOrder.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      results.push((function (_this) {
        return function (i) {
          var attachment, bone, slot, slotContainer, sprite, spriteName;
          slot = drawOrder[i];
          attachment = slot.attachment;
          slotContainer = _this.containers[i];
          if (!(attachment instanceof spine.RegionAttachment)) {
            slotContainer.visible = false;
            return;
          }
          if (attachment.rendererObject) {
            if (!slot.currentSpriteName || slot.currentSpriteName !== attachment.name) {
              spriteName = attachment.rendererObject.name;
              if (slot.currentSprite !== void 0) {
                slot.currentSprite.visible = false;
              }
              slot.sprites = slot.sprites || {};
              if (slot.sprites[spriteName] !== void 0) {
                slot.sprites[spriteName].visible = true;
              } else {
                sprite = _this.createTexture(attachment, slot);
                slotContainer.add(sprite);
              }
              console.log(11)
              slot.currentSprite = slot.sprites[spriteName];
              slot.currentSpriteName = spriteName;
            }
          }
          slotContainer.visible = true;
          bone = slot.bone;
         
          slotContainer.x = bone.worldX + attachment.x * bone.m00 + attachment.y * bone.m01;
          slotContainer.y = bone.worldY + attachment.x * bone.m10 - attachment.y * bone.m11;
          slotContainer.scaleX = bone.worldScaleX;
          slotContainer.scaleY = bone.worldScaleY;
          console.log( slotContainer.x)
          console.log( slotContainer.y)
          slotContainer.rotation = -slot.bone.worldRotation;
          return slotContainer.alpha = slot.a;
        };
      })(this)(i));
    }
    return results;
  };
}


module.exports =Spine


