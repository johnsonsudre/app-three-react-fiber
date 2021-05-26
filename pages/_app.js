import React from "react";
import Header from "./Components/Header";

import "tailwindcss/tailwind.css";
import "./styles/styles.css";

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
