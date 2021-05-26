import React from "react";

const SceneProps = () => {
  return (
    <React.Fragment>
      <table className="w-screen bg-gray-100 border-gray-700 border-collapse border-2 border-solid table-auto">
        <thead>
          <tr className="w-1/4 bg-gray-400">
            <th className="border border-gray-900 w-1/4">ID</th>
            <th className="border border-gray-900 w-3/4">Elemento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-900">ak04457n</td>
            <td className="border border-gray-900">geometria01</td>
          </tr>
          <tr className="w-3/4">
            <td className="border border-gray-900">s8340fd5</td>
            <td className="border border-gray-900">geometria02</td>
          </tr>
        </tbody>
        <thead>
          <tr className="bg-white">
            <th>Total</th>
            <th># elementos</th>
          </tr>
        </thead>
      </table>
    </React.Fragment>
  );
};

export default SceneProps;
