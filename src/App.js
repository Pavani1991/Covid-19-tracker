import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SiderComponent from "./common/SiderComponent";
import SafetyMeasures from "./components/SafetyMeasures";
import TrackData from "./components/TrackData";
import SelfDiagnosis from "./components/SelfDiagnosis";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        <SiderComponent />
        <Switch>
          <Route exact path="/" component={SafetyMeasures} />
          <Route path="/selfDiagnosis" component={SelfDiagnosis} />
          <Route path="/trackCases" component={TrackData} />
          <Route path="/safetyMeasures" component={SafetyMeasures} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
