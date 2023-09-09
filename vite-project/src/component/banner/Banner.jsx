import React, { lazy, useEffect, useRef } from "react";
import "./Banner.scss";
const Banner = () => {
  const ref = useRef();
let timeout
  const to = (dir) => {
if(timeout)return
timeout=setTimeout(()=>{
  
  let dom = ref.current;
  let scrollMount =
    dir == "left"
      ? dom.scrollLeft - dom.offsetWidth
      : dom.scrollLeft + dom.offsetWidth;
  if (dom.scrollLeft == dom.offsetWidth * 4) {
    dom.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    dom.scrollTo({
      left: scrollMount,
      behavior: "smooth",
    });
  }
 setTimeout(()=>timeout=null,800)
},0)


  };
  return (
    <>
      <div className="banner" ref={ref}>
        <div className="include">
          <img
            src="https://img1.baidu.com/it/u=2880053401,2868448360&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500"
            alt="懒洋洋"
            title="this is LanYangYang"
          />
        </div>
        <div className="include">
          <img
            src="https://img1.baidu.com/it/u=2880053401,2868448360&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500"
            alt="懒洋洋"
            title="this is LanYangYang"
          />
        </div>
        <div className="include">
          <img
            src="https://img1.baidu.com/it/u=2880053401,2868448360&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500"
            alt="懒洋洋"
            title="this is LanYangYang"
          />
        </div>
        <div className="include">
          <img
            src="https://img1.baidu.com/it/u=2880053401,2868448360&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500"
            alt="懒洋洋"
            title="this is LanYangYang"
          />
        </div>
        <div className="include">
          <img
            src="https://img1.baidu.com/it/u=2880053401,2868448360&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500"
            alt="懒洋洋"
            title="this is LanYangYang"
          />
        </div>
      </div>
      <button onClick={() => to("left")}>left</button>
      <button onClick={() => to("right")}>right</button>
    </>
  );
};

export default Banner;
