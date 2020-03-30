import React from "react";
import { Carousel } from "antd";
import "../App.css";

function SafetyMeasures() {
  return (
    <div id="safetyMeasures">
      <Carousel autoplay>
        <div>
          <h2>1</h2>
        </div>
        <div>
          <h2>2</h2>
        </div>
        <div>
          <h2>3</h2>
        </div>
        <div>
          <h2>4</h2>
        </div>
      </Carousel>
    </div>
  );
}
export default SafetyMeasures;
