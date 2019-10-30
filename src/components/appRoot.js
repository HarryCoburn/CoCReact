import React from "react";
import Output from "./output";
import LowerButtons from "./lowerButtons";
import StatBar from "./statBar";
import TopMenu from "./menuBar";

const AppRootComponent = () => (
  <div>
    <TopMenu />
    <StatBar />
    <Output />
    <LowerButtons />
  </div>
);

export default AppRootComponent;
