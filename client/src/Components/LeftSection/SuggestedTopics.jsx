import React, { useEffect, useState } from "react";

export default function SuggestedTopics(props) {
  const [intrests] = useState(
    props.Userdetails && ["For You", ...props.Userdetails?.intrestes]
  );

  const HandleClick = (e) => {
    if (!e.target.classList.contains("btmstyle")) {
      window.scrollTo(0, 0);
      const el = document.querySelectorAll(".btmstyle");
      el.forEach((it) => it.classList.remove("btmstyle"));
      e.target.classList.add("btmstyle");

      if (e.target.innerText !== "For You") {
        props.changeIntrest(e.target.innerText);
      } else {
        props.normalPosts();
      }
    }
  };

  useEffect(() => {
    document.querySelectorAll(".topNavEle")[0].classList.add("btmstyle");
  }, []);
  return (
    <div className="STop">
      {intrests &&
        intrests.map((it, index) => {
          return (
            <p className="topNavEle" onClick={HandleClick} key={index}>
              {it}
            </p>
          );
        })}
    </div>
  );
}
