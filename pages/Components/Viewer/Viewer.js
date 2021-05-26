import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import LoaderGLTF from "../Loaders/GLTF";
import LoaderPLY from "../Loaders/PLY";

const Viewer = () => {
  return (
    <React.Fragment>
      <Canvas id="viewer" background={0x000000}>
        <Suspense fallback={null}>
          <hemisphereLight args={[0xffeeb1, 0x080820, 1]} />
          <pointLight color="white" position={[0, 0, 50]} />
          <OrbitControls enableDamping={false} />
          <axesHelper args={[5]} />
          {/* <LoaderGLTF /> */}
          <LoaderPLY src="/apple.ply" scale="50" />
        </Suspense>
      </Canvas>
    </React.Fragment>
  );
};

export default Viewer;
