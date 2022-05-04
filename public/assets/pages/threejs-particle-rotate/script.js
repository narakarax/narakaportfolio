    $(function () {
        var camera, scene, renderer;
        var mesh, CludMesh;
        var backgroundMesh;
        init();
        animate();
        
        function init() {
        
        renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#canvas")});
        
        camera = new THREE.PerspectiveCamera(70, 1, 1, 100);
        camera.position.z = 25;
        
        scene = new THREE.Scene();
        
        // var geometry = new THREE.SphereGeometry(10, 100, 100);
        // var material  = new THREE.MeshPhongMaterial();
        
        THREE.ImageUtils.crossOrigin = '';
        // material.map    = THREE.ImageUtils.loadTexture('http://s3-us-west-2.amazonaws.com/s.cdpn.io/1206469/earthmap1k.jpg')
        
          mesh = new THREE.Mesh(
            new THREE.SphereGeometry(10, 32, 32),
            new THREE.MeshPhongMaterial({
              map: THREE.ImageUtils.loadTexture('./2_no_clouds_4k.jpg'),})
          );
          CludMesh = new THREE.Mesh(
            new THREE.SphereGeometry(10.06, 32, 32),
            new THREE.MeshPhongMaterial({
              map: THREE.ImageUtils.loadTexture('./fair_clouds_4k.png'),
              transparent: true
            })
          )
          backgroundMesh = new THREE.Mesh(
            new THREE.SphereGeometry(30, 32, 32), 
            new THREE.MeshBasicMaterial({
              map: THREE.ImageUtils.loadTexture('./galaxy_starfield.png'), 
              side: THREE.BackSide
            })
          )

          mesh.rotation.x += 0.2;
          scene.add(mesh);
          scene.add(CludMesh);
          scene.add(backgroundMesh);
        
          var light1 = new THREE.AmbientLight( 0xffffff );
          light1.position.set(100, 50, 100);
          scene.add(light1);
        }
        
        function resize() {
          var width = renderer.domElement.clientWidth;
          var height = renderer.domElement.clientHeight;
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix(); 
        }
        
        function animate() {
          resize();
          mesh.rotation.y += 0.005;
          CludMesh.rotation.y -= 0.001;
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        }
    });