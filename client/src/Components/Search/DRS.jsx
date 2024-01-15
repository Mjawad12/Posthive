import React from "react";
import { useNavigate } from "react-router";

export default function DRS({ hist, sethist }) {
  const navigate = useNavigate();

  const remove = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const value = +e.target.parentElement.getAttribute("cid");
    const history = await JSON.parse(localStorage.getItem("_hi_0"));
    history.splice(value, value + 1);
    sethist(history);
    localStorage.setItem("_hi_0", JSON.stringify(history));
  };

  return (
    <div className="histM in_r">
      <div className="in_r">
        <h3 className="in_r">
          {hist?.length > 0 ? "Recent Searches" : "No Recent Searches"}
        </h3>
      </div>
      {hist?.length > 0 && (
        <div className="in_r">
          {hist &&
            hist.slice(0, 6).map((it, index) => {
              return (
                <div
                  onClick={() => navigate(`/search?q=${it.toString()}`)}
                  className="histIt"
                  cid={index}
                  key={index}
                >
                  <div>
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      color="rgba(0, 0, 0, 0.699)"
                      className="aj bj"
                      pointerEvents={"none"}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                        fill="currentColor"
                        pointerEvents={"none"}
                      ></path>
                    </svg>
                    <p>{it}</p>
                  </div>
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 29 29"
                    className="aj bj hm in_r"
                    fill="rgba(0, 0, 0, 0.699)"
                    onClick={remove}
                  >
                    <path
                      d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"
                      fillRule="evenodd"
                      pointerEvents={"none"}
                    ></path>
                  </svg>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
