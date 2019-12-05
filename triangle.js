function init() {


    camera = new THREE.PerspectiveCamera(50, window.innerWidth / 600, 1, 1000);
    camera.position.z = 400;

    camera2 = new THREE.PerspectiveCamera(50, window.innerWidth / 500, 1, 1000);
    camera2.position.z = 400;

    pivot = new THREE.Group();
    Triangle_Cube = new THREE.Scene();
   
    


    var geometry1 = new THREE.BoxBufferGeometry(4, 120, 120);
    var geometry2 = new THREE.BoxBufferGeometry(4, 120, 120);
    var geometry3 = new THREE.BoxBufferGeometry(120, 4, 120);
    var geometry4 = new THREE.BoxBufferGeometry(4, 120, 120);

    var geometry5 = new THREE.CylinderGeometry(67, 67, 1, 3);

    var geometry6 = new THREE.BoxBufferGeometry(122, 122, 4);

    var wheelGeometry = new THREE.TorusGeometry(7, 3, 40, 45, Math.PI * 2);
    var new_wheel_geo = new THREE.CylinderGeometry(10, 10, 6, 50);
    var new_wheel_stick = new THREE.CylinderGeometry(2.5, 2.5, 10, 50);
   

    material = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, map: THREE.ImageUtils.loadTexture(out_image) });
    material2 = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, map: THREE.ImageUtils.loadTexture(out_image) });
    material3 = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, map: THREE.ImageUtils.loadTexture(out_image) });
    material4 = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, transparent: true, map: THREE.ImageUtils.loadTexture(out_image) });
    material5 = new THREE.MeshBasicMaterial({ transparent: true, map: THREE.ImageUtils.loadTexture(out_image) });
    material6 = new THREE.MeshBasicMaterial({ transparent: true, map: THREE.ImageUtils.loadTexture(out_image) })
    wheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    wheel_inside = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture('icons/wheel1.png') });
  


    mesh = new THREE.Mesh(geometry1, material);
    mesh2 = new THREE.Mesh(geometry2, material2);
    mesh3 = new THREE.Mesh(geometry3, material3);
    mesh4 = new THREE.Mesh(geometry4, material4);
    mesh5 = new THREE.Mesh(geometry5, material5);
    mesh6 = new THREE.Mesh(geometry5, material6);


    wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel2 = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel3 = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel4 = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel_new = new THREE.Mesh(new_wheel_geo, wheel_inside);
    wheel_new2 = new THREE.Mesh(new_wheel_geo, wheel_inside);
    wheel_new3 = new THREE.Mesh(new_wheel_geo, wheel_inside);
    wheel_new4 = new THREE.Mesh(new_wheel_geo, wheel_inside);
    wheel_stick = new THREE.Mesh(new_wheel_stick, wheelMaterial);
    wheel_stick2 = new THREE.Mesh(new_wheel_stick, wheelMaterial);
    wheel_stick3 = new THREE.Mesh(new_wheel_stick, wheelMaterial);
    wheel_stick4 = new THREE.Mesh(new_wheel_stick, wheelMaterial);
   

    var edges1 = new THREE.EdgesGeometry(geometry1);
    var line1 = new THREE.LineSegments(edges1, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));

    var edges2 = new THREE.EdgesGeometry(geometry2);
    var line2 = new THREE.LineSegments(edges2, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2}));

    var edges3 = new THREE.EdgesGeometry(geometry3);
    var line3 = new THREE.LineSegments(edges3, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 }));

    var edges4 = new THREE.EdgesGeometry(geometry4);
    var line4 = new THREE.LineSegments(edges4, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 }));

    var edges5 = new THREE.EdgesGeometry(geometry5);
    var line5 = new THREE.LineSegments(edges5, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 }));

    var edges6 = new THREE.EdgesGeometry(geometry6);
    var line6 = new THREE.LineSegments(edges6, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 10 }));

   

    var spotLight = new THREE.SpotLight(0xFFFFFF, 0.2);
    spotLight.position.set(0, 500, 100);
    spotLight.target.position.set(0, 0, 0);
    spotLight.castShadow = true;
    Triangle_Cube.add(spotLight.target);
    Triangle_Cube.add(spotLight);
    //Set up shadow properties for the spotLight
    spotLight.shadow.mapSize.width = 512;  // default
    spotLight.shadow.mapSize.height = 512; // default
    spotLight.shadow.camera.near = 0.5;    // default
    spotLight.shadow.camera.far = 15000;     // default



    var ambientLight = new THREE.AmbientLight(0x000000);
    Triangle_Cube.add(ambientLight);

    Triangle_Cube.add(new THREE.HemisphereLight(0xffffff, 0xffffff, 1.0));

    var planeGeometry = new THREE.PlaneBufferGeometry(200, 200, 1, 1);
    var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xb69a77, side: THREE.DoubleSide });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    plane.rotation.x = - Math.PI / 2;
    plane.position.y = -80;
    Triangle_Cube.add(plane);

    Triangle_Cube.add(mesh);
    Triangle_Cube.add(mesh2);  
    Triangle_Cube.add(mesh4);
   


    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    document.body.appendChild(renderer.domElement);


}


function animate() {


    if (material_thikness == 9) {
        zValue = 0.5;
    } else if (material_thikness == 12) {
        zValue = 0.75;
    } else if (material_thikness == 18) {
        zValue = 1;
    } else if (material_thikness == 36) {
        zValue = 2;
    };



    mesh.position.set((-x1.value/4)+(1.5*zValue) ,0, 0);
    mesh.rotation.z = -30*Math.PI / 180;

    mesh2.position.set((x1.value / 4)+ (1.5*zValue), 0, 0);
    mesh2.rotation.z = 30*Math.PI / 180;
    mesh4.position.set(0, -x1.value / 2.3+zValue, 0);
    mesh4.rotation.z = 90 * Math.PI / 180;

    mesh5.position.set(1, -x1.value /7, -x2.value/2);
    mesh5.rotation.x = -90 * Math.PI / 180;

    mesh3.position.set(zValue, y.value / 2, 0);
   
   
    mesh6.position.set(0, -x1.value / 7, x2.value / 2);
    mesh6.rotation.x = -90 * Math.PI / 180;

    wheel.position.set((x2.value / 2) - 10, -x1.value / 2.3 + zValue - 15, (x1.value / 2) - 10);
    wheel_new.position.set((x2.value / 2) - 10, -x1.value / 2.3 + zValue - 15, (x1.value / 2) - 10);
    wheel_stick.position.set((x2.value / 2) - 10, -x1.value / 2.3 + zValue - 5, (x1.value / 2) - 15);

    wheel2.position.set((-x2.value / 2) + 10, -x1.value / 2.3 + zValue - 15, (x1.value / 2) - 10);
    wheel_new2.position.set((-x2.value / 2) + 10, -x1.value / 2.3 + zValue - 15, (x1.value / 2) - 10);
    wheel_stick2.position.set((-x2.value / 2) + 10, -x1.value / 2.3 + zValue - 5, (x1.value / 2) - 15);

    wheel3.position.set((-x2.value / 2) + 10, -x1.value / 2.3 + zValue - 15, (-x1.value / 2) + 10);
    wheel_new3.position.set((-x2.value / 2) + 10, -x1.value / 2.3 + zValue - 15, (-x1.value / 2) + 10);
    wheel_stick3.position.set((-x2.value / 2) + 10, -x1.value / 2.3 + zValue - 5, (-x1.value / 2) + 5);

    wheel4.position.set((x2.value / 2) - 10, -x1.value / 2.3 + zValue - 15, (-x1.value / 2) + 10);
    wheel_new4.position.set((x2.value / 2) - 10, -x1.value / 2.3 + zValue - 15, (-x1.value / 2) + 10);
    wheel_stick4.position.set((x2.value / 2) - 10, -x1.value / 2.3 + zValue- 5, (-x1.value / 2) + 5);

   

    Triangle_Cube.position.set(0, 50, 0);
  
  
    mesh.scale.z = x2.value / 120;
    mesh.scale.x = zValue;
    mesh.scale.y = x1.value / 120;

    mesh2.scale.z = x2.value / 120;
    mesh2.scale.x = zValue;
    mesh2.scale.y = x1.value / 120;

    mesh4.scale.z = x2.value / 120;
    mesh4.scale.x = zValue;
    mesh4.scale.y = x1.value / 120;
    
    mesh5.scale.z = x1.value / 120;
    mesh5.scale.x = x1.value / 120;

    mesh6.scale.z = x1.value / 120;
    mesh6.scale.x = x1.value / 120;


    requestAnimationFrame(animate);



    if (((mouseX) < 240) && ((mouseX) > -280) && (mouseDown == true) && ((mouseY) < 200) && ((mouseY) > -50)) {

        Triangle_Cube.rotation.y = mouseX * 0.01;
        Triangle_Cube.rotation.x = mouseY * 0.008;
    };


    
    renderer.render(Triangle_Cube, camera);
   
}

function setTexture(url) {
    var loader = new THREE.TextureLoader();
    loader.setCrossOrigin(true);
    var texture = loader.load(url);


    if ((num_of_faces == 5)) {

        Triangle_Cube.add(mesh6);
        Triangle_Cube.add(mesh5);
    };

    if (num_of_faces == 4) {
        Triangle_Cube.remove(mesh6);
        Triangle_Cube.add(mesh5);
    };

    if (num_of_faces == 3) {
        Triangle_Cube.remove(mesh5);
        Triangle_Cube.remove(mesh6);
    };

    

    material.map = texture;
    material2.map = texture;
    material3.map = texture;
    material4.map = texture;
    material5.map = texture;
    material6.map = texture;

    material.transparent = true;


    material.needsUpdate = true;
    renderer.render(Triangle_Cube, camera);



}

function addDoor() {

    var loader = new THREE.TextureLoader();
    loader.setCrossOrigin(true);

    var texture2 = loader.load('icons/door2.jpg');
    Triangle_Cube.add(mesh5);
   
    material5.map = texture2;
    material.transparent = true;
    material.needsUpdate = true;
    renderer.render(Triangle_Cube, camera);
};





function addWheels() {

    Triangle_Cube.add(wheel);
    Triangle_Cube.add(wheel2);
    Triangle_Cube.add(wheel3);
    Triangle_Cube.add(wheel4);
    Triangle_Cube.add(wheel_new);
    Triangle_Cube.add(wheel_stick);
    Triangle_Cube.add(wheel_new2);
    Triangle_Cube.add(wheel_stick2);
    Triangle_Cube.add(wheel_new3);
    Triangle_Cube.add(wheel_stick3);
    Triangle_Cube.add(wheel_new4);
    Triangle_Cube.add(wheel_stick4);

    wheel.rotation.y = Math.PI / 2;
    wheel2.rotation.y = Math.PI / 2;
    wheel3.rotation.y = Math.PI / 2;
    wheel4.rotation.y = Math.PI / 2;
    wheel_new.rotation.z = Math.PI / 2;
    wheel_new2.rotation.z = Math.PI / 2;
    wheel_new3.rotation.z = Math.PI / 2;
    wheel_new4.rotation.z = Math.PI / 2;




};

function removeWheels() {
    Triangle_Cube.remove(wheel);
    Triangle_Cube.remove(wheel2);
    Triangle_Cube.remove(wheel3);
    Triangle_Cube.remove(wheel4);

}

function setColor() {
    color = color.substr(1);

    material.map = null;
    material.transparent = true;
    material.needsUpdate = true;
    material.color.set = color;

    document.getElementById("test").innerHTML = material_id;
}
function changCubeStructure (id) {

    var cube_type = id;
    Cube_Structure = cube_type;

    if (Cube_Structure == 1) {
      

        Triangle_Cube.remove(scene2);
    }

    if (Cube_Structure == 2) {
        scene2.add(mesh7);
        scene2.add(mesh8);
        scene2.add(mesh9);
        scene2.add(mesh10);
        scene2.add(mesh11);
        scene2.add(mesh12);
        
        scene.add(scene2);
       
        
    }
    

    document.getElementById("test").innerHTML = cube_type;

}