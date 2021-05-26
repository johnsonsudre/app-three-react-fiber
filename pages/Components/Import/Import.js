import React from "react";

const Import = () => {
  const inputImport = (events) => {
    const file = events.target.files[0];
    const nameSplit = file.name.split(".");
    const fileType = nameSplit[nameSplit.length - 1];
    switch (fileType) {
      case "ply":
        console.log("carregar PLY");
        break;
      case "gltf":
        console.log("Carregar GLTF");
        break;
      default:
        console.log(`Desculpe, não entendi ${fileType}`);
    }
  };
  return (
    <React.Fragment>
      <div className="flex w-full p-2 items-center justify-center bg-grey-lighter">
        <label className="flex flex-col items-center px-10 py-4 bg-gray-100 rounded-lg cursor-pointer">
          <span className="mt-2 text-base leading-normal">Importar</span>
          <input
            type="file"
            className="hidden"
            accept=".ply, .gltf"
            onChange={inputImport}
          />
        </label>
      </div>
    </React.Fragment>
  );
};

export default Import;
