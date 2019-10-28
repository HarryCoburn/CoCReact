import React from "react";
import Output from "./output";
import LowerButtons from "./lowerButtons";
import StatBar from "./statBar";

const AppRootComponent = () => (
  <div>
    <StatBar />
    <Output />
    <LowerButtons />
  </div>
);

export default AppRootComponent;
