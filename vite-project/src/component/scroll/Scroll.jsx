import { useEffect, useRef, useState } from "react";
import "./Scroll.css"
const Scroll=()=>{
    let arr = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24,
      ];
      const ref = useRef();
      const to = (dir) => {
        let current = ref.current;
        const scrollAmount =
          dir == "left"
            ? current.scrollLeft - current.offsetWidth + 10
            : current.scrollLeft + current.offsetWidth - 10;
        ref.current.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      };
      return (
        <>
          <div className="root" ref={ref}>
            {arr.map((item, index) => (
              <div key={index} className="item">
                {item}
              </div>
            ))}
          </div>
          <button onClick={() => to("left")}>left</button>
          <button onClick={() => to("right")}>right</button>
        </>
      );
}
export default Scroll