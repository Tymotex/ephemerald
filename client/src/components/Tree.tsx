/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: AlexKool (https://sketchfab.com/sheh5262)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/pine-tree-e52769d653cd4e52a4acff3041961e65
title: Pine tree
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    Leaves001_Leavs_0: THREE.Mesh;
    Trank001_Trank_0: THREE.Mesh;
  };
  materials: {
    Leavs: THREE.MeshStandardMaterial;
    Trank: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/tree.gltf") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.Leaves001_Leavs_0.geometry}
              material={materials.Leavs}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 100, 100]}>
            <mesh
              geometry={nodes.Trank001_Trank_0.geometry}
              material={materials.Trank}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/tree.gltf");
