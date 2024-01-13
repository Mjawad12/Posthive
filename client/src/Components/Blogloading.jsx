import React from "react";

export default function Blogloading() {
  const Top = () => {
    return (
      <div className="top">
        <div></div>
        <div>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  };
  const Desc = () => {
    return (
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  };
  return (
    <div className="bL">
      <Top />
      <div className="desc">
        <Desc />
        <Desc />
        <Desc />
      </div>
    </div>
  );
}
