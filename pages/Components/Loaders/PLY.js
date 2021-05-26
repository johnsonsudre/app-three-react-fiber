import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { PLYLoader } from "./loaders/PLYLoader";

const LoaderPLY = ({ src, scale }) => {
  console.log("Loading ", src);
  const model = useLoader(PLYLoader, src);
  model.computeVertexNormals();
  model.computeFaceNormals();
  console.log(model);
  return (
    <mesh geometry={model} scale={scale} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial vertexColors={true} />
    </mesh>
  );
};

export default LoaderPLY;
