import React, { Suspense } from "react";
import Import from "./Components/Import/Import";
import SceneProps from "./Components/SceneProps/SceneProps";
import Viewer from "./Components/Viewer/Viewer";

const Index = () => {
  return (
    <React.StrictMode>
      <Import />
      <div className="h-96 border-red-100 border-2 border-solid">
        <Viewer />
      </div>
      <SceneProps></SceneProps>
    </React.StrictMode>
  );
};

export default Index;
