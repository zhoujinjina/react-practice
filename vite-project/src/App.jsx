
import "./App.css";
import Banner from "./component/banner/Banner";
import Scroll from "./component/scroll/Scroll";
import S from "./component/s/S";
import { lazy } from "react";
const Test=lazy(()=>import("./component/me/Me"))

function App() {
  return (
    <>
      <Scroll />
      <Banner />
      <S/>
      <Test/>
    </>
  );
}

export default App;
