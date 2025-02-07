import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Laptop = (props) => {
  const group = useRef();
  
  // Load the GLTF model
  const { scene, nodes, materials } = useGLTF('/src/3D Models/laptop.glb');

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Render the loaded scene */}
      <primitive object={scene} />
      
      {/* Example: Customize materials or nodes if needed */}
      {/* <mesh
        geometry={nodes.Table.geometry}
        material={materials.Wood}
      /> */}
    </group>
  );
};

// Preload the GLTF model for optimization
useGLTF.preload('/src/3D Models/laptop.glb');

export default Laptop;