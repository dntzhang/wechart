var demo = {
    init:function(animName){
        var that = this;
        utils.loadRes(
            './texture.png',
            './texture.js',
            './skeleton.js',
            function(textureImage, textureData, skeletonData){
                var width = 1200;
                var height = 900;
                var scale = 0.7;
                switch(factoryType){
                    case 'cax':
                        that.initArmature(textureImage, textureData, skeletonData, dragonBones.CaxFactory);
                        that.initForCreatejs(width, height, scale);
                        break;
                }
            }
        );
    },
    initArmature:function(textureImage, textureData, skeletonData, Factory){
        var dragonbonesFactory = this.dragonbonesFactory = new Factory();
        dragonbonesFactory.addTextureAtlas(new dragonBones.TextureAtlas(textureImage, textureData));
        dragonbonesFactory.addDragonBonesData(dragonBones.DataParser.parseDragonBonesData(skeletonData));

        var armature = this.armature = dragonbonesFactory.buildArmature(skeletonData.armature[0].name);
        var armatureDisplay = this.armatureDisplay = armature.getDisplay();
        armatureDisplay.x = demo.pos[0];
        armatureDisplay.y = demo.pos[1];

        armature.addEventListener(dragonBones.AnimationEvent.START, function(e){
            console.log(dragonBones.AnimationEvent.START);
        }, armature);

        armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, function(e){
            console.log(dragonBones.AnimationEvent.COMPLETE);
        }, armature);

        armature.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, function(e){
            console.log(dragonBones.AnimationEvent.LOOP_COMPLETE);
        }, armature);

        dragonBones.WorldClock.clock.add(armature);
        this.play();
    },
    
    initForCreatejs:function(gameWidth, gameHeight, scale){
        console.log('initForCreatejs');
        var canvas = document.createElement('canvas');
        canvas.width = gameWidth * scale;
        canvas.height = gameHeight * scale;
        var stage = this.stage = new cax.Stage(canvas);

        stage.scaleX = scale;
        stage.scaleY = scale;
        stage.add(this.armatureDisplay);
        document.getElementById('animContainer').appendChild(canvas);

        let pre = Date.now()
        let now  = pre
        cax.tick(function(){
            dragonBones.WorldClock.clock.advanceTime((Date.now()-pre) * 0.001);
            pre = Date.now()
            stage.update();
        })

    },
  
    play:function(){
        this.armature.animation.gotoAndPlay(this.getNextAnimationName(), -1, -1, 0);
    },
    bindEvent:function(){
        var that = this;
        window.onclick  = function(){
            if(that.armature.animation._animationList.length > 1){
                that.play();
            }
        };
    },
    getNextAnimationName:function(){
        this._index = this._index||0;
        var list = this.armature.animation._animationList;
        return list[(this._index++)%list.length];
    },
    createBtns:function(){
        var keys = utils.getUrlKey();
        keys.type = 'cax';
      
    }
};

demo.bindEvent();
demo.createBtns();