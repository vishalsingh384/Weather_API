import React from 'react'
import EarthMap from '../assets/images/earth-texture.jpg';
import SpecularMap from '../assets/images/8k_earth_specular_map.jpg';
import CloudMap from '../assets/images/8k_earth_clouds.jpg';
import ColorMap from '../assets/images/8k_earth_normal_map.jpg';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {

    const [earthMap,specularMap,cloudMap,colorMap]=useLoader(TextureLoader,[EarthMap,SpecularMap,CloudMap,ColorMap]);
  return (
    <>
    <ambientLight intensity={3}/>
    <mesh>
        <sphereGeometry args={[1.005,32,32]}/>
        <meshPhongMaterial
        map={cloudMap}
        opacity={0.4}
        deepWrite={true}
        transparent={true}
        side={THREE.DoubleSide}
        />
    </mesh>
    <mesh>
        <sphereGeometry args={[1,32,32]}/>
        <meshPhongMaterial specularMap={specularMap}/>
        <meshStandardMaterial map={earthMap} normalMap={colorMap}/>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} zoomSpeed={0.6} panSpeed={0.5} rotateSpeed={0.4}/>
    </mesh>
    </>
  )
}

export default Globe