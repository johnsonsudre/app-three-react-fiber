import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "./loaders/GLTFLoader";

const LoaderGLTF = () => {
  const model = useLoader(GLTFLoader, "/model.gltf");
  console.log(model);
  return <primitive object={model.scene} />;
};

export default LoaderGLTF;
