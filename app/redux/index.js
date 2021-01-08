/* eslint-disable quotes */
import { combineReducers } from "redux";

// import projectsReducer from "./projects";
// import singleRobotReducer from "./singleRobot";
import dummyReducer from "./dummy";

const appReducer = combineReducers({
  dummy: dummyReducer,
});

export default appReducer;
