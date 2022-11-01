import React from "react";

import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

export const Loader = () => {


  return (
    <div className="loader">
      <FadeLoader
        color={"#00ffa3"}
        size={'80vw'}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
