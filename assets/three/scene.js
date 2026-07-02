import * as THREE from "three";

let scene;
let camera;
let renderer;

let king;

const mouse = {
    x: 0,
    y: 0
};

export function initScene(){

    scene = new THREE.Scene();

    scene.background = new THREE.Color(0x050505);

    scene.fog = new THREE.Fog(0x050505,10,30);

    camera = new THREE.PerspectiveCamera(

        50,

        window.innerWidth/window.innerHeight,

        0.1,

        100

    );

    camera.position.set(0,2.5,8);

    renderer = new THREE.WebGLRenderer({

        canvas:document.querySelector("#bg"),

        antialias:true,

        alpha:true

    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

    renderer.setSize(window.innerWidth,window.innerHeight);

    renderer.shadowMap.enabled=true;

    renderer.shadowMap.type=THREE.PCFSoftShadowMap;

    createLights();

    createChessBoard();

    createKing();

    createParticles();

    animate();

}

function createLights(){

    const ambient=new THREE.AmbientLight(0xffffff,.4);

    scene.add(ambient);

    const spot=new THREE.SpotLight(0xffd700,40);

    spot.position.set(5,10,5);

    spot.castShadow=true;

    scene.add(spot);

    const rim=new THREE.PointLight(0xd4af37,8);

    rim.position.set(-5,3,-5);

    scene.add(rim);

}

function createChessBoard(){

    const board=new THREE.Mesh(

        new THREE.BoxGeometry(10,.4,10),

        new THREE.MeshStandardMaterial({

            color:0x111111,

            metalness:.7,

            roughness:.25

        })

    );

    board.receiveShadow=true;

    scene.add(board);

}

function createKing(){

    const geometry=new THREE.CylinderGeometry(.45,.6,2.6,64);

    const material=new THREE.MeshPhysicalMaterial({

        color:0xd4af37,

        metalness:1,

        roughness:.12,

        clearcoat:1,

        reflectivity:1

    });

    king=new THREE.Mesh(geometry,material);

    king.position.y=1.5;

    king.castShadow=true;

    scene.add(king);

}

function createParticles(){

    const geometry=new THREE.BufferGeometry();

    const vertices=[];

    for(let i=0;i<1500;i++){

        vertices.push(

            (Math.random()-0.5)*25,

            Math.random()*12,

            (Math.random()-0.5)*25

        );

    }

    geometry.setAttribute(

        "position",

        new THREE.Float32BufferAttribute(vertices,3)

    );

    const material=new THREE.PointsMaterial({

        color:0xffffff,

        size:.03

    });

    const particles=new THREE.Points(

        geometry,

        material

    );

    scene.add(particles);

}

window.addEventListener("mousemove",(e)=>{

mouse.x=(e.clientX/window.innerWidth-.5)*2;

mouse.y=(e.clientY/window.innerHeight-.5)*2;

});

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});

function animate(){

requestAnimationFrame(animate);

if(king){

king.rotation.y+=0.003;

king.position.y=1.5+Math.sin(Date.now()*0.001)*0.08;

}

camera.position.x+=((mouse.x*1.2)-camera.position.x)*0.04;

camera.position.y+=(2.5+(-mouse.y*.6)-camera.position.y)*0.04;

camera.lookAt(0,1,0);

renderer.render(scene,camera);

}