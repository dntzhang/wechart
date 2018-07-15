class Earth extends THREE.Group {
    constructor(option) {
        super();

        this.option = Object.assign({
            coord: []
        }, option);

        let loader = new THREE.TextureLoader();
        loader.load('./textures.jpg', (texture) => {
            let geometry = new THREE.SphereGeometry(200, 40, 40);
            let material = new THREE.MeshBasicMaterial({
                map: texture,
                overdraw: 0.5
            });

            let mesh = new THREE.Mesh(geometry, material);
            this.add(mesh);
        });

        this.option.coord.forEach((item) => {
            this.addCoord(item);
        });
    }

    generateText(text, color, isBack) {
        let canvas = document.createElement('canvas');

        canvas.setAttribute('width', 32);
        canvas.setAttribute('height', 16);

        canvas.style.backgroundColor = 'rgba(0,0,0,0)';

        let ctx = canvas.getContext('2d');
        ctx.font = '10px Georgia';

        let height;
        let width = ctx.measureText(text).width;

        width = Math.max(32, width);
        height = width / 2;
        
        
        canvas.setAttribute('width', width * window.devicePixelRatio);
        canvas.setAttribute('height', height * window.devicePixelRatio);

        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;

        ctx.scale(devicePixelRatio, devicePixelRatio);
        ctx.strokeStyle = ctx.fillStyle = hexToRgba(color);
        ctx.textBaseline = "middle";

        ctx.fillText(text, 0, 8);

        // document.body.appendChild(canvas);

        return canvas;
    }

    addCoord(option) {
        let {
            lng,
            lat,
            color,
            text
        } = option;
        // +90是要有个变换
        let coord = lglt2xyz(lng + 90, lat, 200);

        let geometry = new THREE.Geometry();
        let p1 =  new THREE.Vector3(coord.x, coord.y, coord.z);
        geometry.vertices.push(p1);
        
        let material = new THREE.PointsMaterial({
            color: color,
            size: 4.0
        });
        
        let points = new THREE.Points(geometry, material);

        this.add(points);

        let textCanvas = this.generateText(text, color);

        let rectGeometry = new THREE.PlaneGeometry(textCanvas.width / 2 / devicePixelRatio, textCanvas.height / 2 / devicePixelRatio);
        let texture = new THREE.CanvasTexture(textCanvas);
        let rectMaterial = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            // side: coord.z > 0 ? THREE.FrontSide : THREE.BackSide
            side: THREE.FrontSide
        });
        let rect = new THREE.Mesh(rectGeometry, rectMaterial);

        this.add(rect);

        let offsetY;
        offsetY = 3 * (Math.abs(lat) / 90) + 3;

        coord = lglt2xyz(lng + 90, lat - offsetY, 203);

        rect.position.x = coord.x;
        rect.position.y = coord.y;
        rect.position.z = coord.z;

        rect.rotation.y = (lng + 90) * Math.PI / 180;

        return coord;
    }
}

function lglt2xyz(longitude, latitude, radius){
    let lg = degToRad(longitude) , lt = degToRad(latitude);
    let y = radius * Math.sin(lt);
    let temp = radius * Math.cos(lt);
    let x = temp * Math.sin(lg);
    let z = temp * Math.cos(lg);
    
    return {
        x: x,
        y: y,
        z: z
    };
}

function degToRad(value) {
    return value / 180 * Math.acos(-1);
}

function hexToRgba(hex, opacity) { 
    hex = hex.toString(16);

    if(opacity === undefined) {
        opacity = 1;
    }

    return "rgba(" + parseInt("0x" + hex.slice(0, 2)) + "," + parseInt("0x" + hex.slice(2, 4)) + "," + parseInt("0x" + hex.slice(4, 6)) + "," + opacity + ")"; 
}

export default Earth;