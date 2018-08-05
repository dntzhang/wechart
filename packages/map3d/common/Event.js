/**
 * Created by jusfoun-fe.github.io on 2017/11/12.
 * three event
 */
import * as THREE from './three.js'

/*
* 参数格式
let opt={
    el:domElement,
    scene:null,
    camera:null,
    renderer:null,
    _onResize:'[function]',
    _onMouseMove:'[function]',
    _onMouseDown:'[function]'
}
*/
export default class Event{
    constructor(o){
        this.__raycaster = new THREE.Raycaster();
        this.__mouse = new THREE.Vector2();
        this.__resize=o.__proto__._onResize;
        this.__mousemove=o.__proto__._onMouseMove;
        this.__mousedown=o.__proto__._onMouseDown;
        this.target=o;
        Object.assign(this,o);
        if(!this.camera && !this.renderer && !this.el)
        {
          console.warn('THREE.Event:not find camera, renderer, domElement,Please ensure that it is a valid 3D control');
          return;
        }
        if(!this.__resize && !this.__mousemove && !this.__mousedown)
        {
          console.warn('THREE.Event:Users need to implement _onResize(),_onMouseMove(),_onMouseDown() method');
          return;
        }


        this.__resize__ = this.onWindowResize.bind(this);
        this.__mousemove__ = this.onDocumentMouseMove.bind(this);
        this.__touchstart__ = this.onDocumentTouchStart.bind(this);
        this.__mousedown__ = this.onDocumentMouseDown.bind(this);
        this.mousemove_timer=null;
        this.mousemove_interval=10;
        this.enable=true;

        if(this.__resize){
            window.addEventListener('resize', this.__resize__, false);
        }
        if(this.__mousemove){
            this.el.addEventListener('mousemove', this.__mousemove__, false );

        }
        if(this.__mousedown) {
            this.el.addEventListener('touchstart', this.__touchstart__, false );
            this.el.addEventListener('mousedown', this.__mousedown__, false );
        }

    }
    dispose(){
        window.removeEventListener('resize', this.__resize__, false);
        this.el.removeEventListener('mousemove', this.__mousemove__, false);
        this.el.removeEventListener('touchstart', this.__touchstart__, false);
        this.el.removeEventListener('mousedown', this.__mousedown__, false);
    }

    onWindowResize(event) {
        this.camera.aspect = this.el.offsetWidth/ this.el.offsetHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( this.el.offsetWidth, this.el.offsetHeight );
        this.enable && this.__resize.bind(this.target)(event);
    }
    onDocumentMouseMove( event ) {
        event.preventDefault();
        this.mousemove_timer && clearTimeout(this.mousemove_timer);
        this.mousemove_timer=setTimeout(()=>{
          this.__mouse.x = ( event.offsetX  / this.el.offsetWidth ) * 2 - 1;
          this.__mouse.y = - ( event.offsetY  / this.el.offsetHeight ) * 2 + 1;
          this.__raycaster.setFromCamera( this.__mouse, this.camera );
          let intersects = this.__raycaster.intersectObjects( this.scene.children ,true);

          this.enable && this.__mousemove.bind(this.target)(event,intersects);
        },this.mousemove_interval)

    }


    onDocumentTouchStart( event ) {
        event.preventDefault();
        event.clientX = event.touches[0].pageX;
        event.clientY = event.touches[0].pageY;
        this.enable && this.onDocumentMouseDown( event );

    }

    onDocumentMouseDown( event ) {
        event.preventDefault();
        this.__mouse.x = ( (event.offsetX ||event.clientX)  / this.el.offsetWidth ) * 2 - 1;
        this.__mouse.y = - ( (event.offsetY ||event.clientY)  / this.el.offsetHeight ) * 2 + 1;
        this.__raycaster.setFromCamera( this.__mouse, this.camera );
        let intersects = this.__raycaster.intersectObjects( this.scene.children ,true);
        this.enable && this.__mousedown.bind(this.target)(event,intersects);
    }
}
THREE.Event = Event;
