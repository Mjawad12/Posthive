import React, { useContext } from "react";
import Context from "../Mainstate/Context";

export default function Recomendedopics(props) {
  const context = useContext(Context);
  const { intrestpostsFunc, authtoken } = context;
  const IntrestTopics = [
    "programming",
    "inovation",
    "creativity",
    "Css",
    "writing",
    "node",
    "express",
  ];
  return (
    <div className="rTopics">
      <h4>Recommended Topics</h4>
      <div className="topicsDiv">
        {IntrestTopics &&
          IntrestTopics.map((it, index) => {
            return (
              <span
                key={index}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  if (authtoken) {
                    intrestpostsFunc(e.target.innerText);
                    props.setintrest(true);
                    const el = document.querySelectorAll(".btmstyle");
                    el.forEach((it) => it.classList.remove("btmstyle"));
                  } else {
                    window.scrollTo(0, 0);
                    document.querySelector(".clickable")?.click();
                  }
                }}
              >
                {it}
              </span>
            );
          })}
      </div>
    </div>
  );
}
