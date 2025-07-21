import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PrimitiveData from "./Props/PrimitiveData";
import ComponentB from "./MiniProject/ComponentB";
import ComponentC from "./MiniProject/ComponentC";
import ComponentD from "./MiniProject/ComponentD";
import ComponentE from "./MiniProject/ComponentE";

import Buttons from "./Events/Btns";
import MyForm from "./Events/Forms";
import SimpleState from "./Hooks/State/SimpleState";
import SimpleState2 from "./Hooks/State/SimpleState";
import FormState from "./Hooks/State/FormState";
import SimpleEffect from "./Hooks/Effect/SimpleEffect";
import ManualRoute from "./Routing/ManualRoutes";

import Dashboard from "./Routing/ReactRouter/DasBoard";

import Login from "./Routing/ReactRouter/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import ReactRouter from "./Routing/ReactRouter";


import "./css.css"; 


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Buttons/>
    <MyForm/> */}
    {/* <SimpleState/> */}
    {/* <SimpleState2/>
    <FormState/> */}
    {/* <SimpleEffect/> */}
    {/* <ManualRoute /> */}
    {/* <Dashboard/> */}
      <ReactRouter />
  </StrictMode>
);
