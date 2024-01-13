import React from "react";
import NASvg from "./NASvg";
export default function NAhero() {
  return (
    <section className="NAhero">
      <div>
        <div className="leftNA">
          <h1>Stay curious.</h1>
          <p>
            Discover stories,thinking, and expertise from windters on any topic.
          </p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              document.querySelector(".clickable")?.click();
            }}
            className="btn-2"
          >
            Start reading
          </button>
        </div>
        <div className="rightNA">
          <NASvg />
        </div>
      </div>
    </section>
  );
}
