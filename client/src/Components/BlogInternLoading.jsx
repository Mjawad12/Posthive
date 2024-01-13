import React from "react";

export default function BlogInternLoading() {
  const Blogintern = () => {
    return (
      <div className="bl">
        <div className="rightl">
          <div className="topl">
            <div className="imgl"></div>
            <div className="namel"></div>
          </div>
          <div className="btl">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="leftl">
          <div className="thuml"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="lMain">
      <Blogintern />
      <Blogintern />
      <Blogintern />
    </div>
  );
}
