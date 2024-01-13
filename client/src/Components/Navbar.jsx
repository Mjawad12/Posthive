import React, { useContext, useEffect, useState } from "react";
import userImg from "../Images/user.png";
import UACDialog from "./UACDialog";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Context from "./Mainstate/Context";
import Dialog from "./Dialog";
import NoAuthNavbar from "./NoAuthNavbar";
import DRS from "./Search/DRS";

export default function Navbar(props) {
  const context = useContext(Context);
  const { authtoken, Userdetails, setauthtoken, signout } = context;
  const { genreSelect, setgenreSelect } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [authShow, setauthShow] = useState(false);
  const [dia, setdia] = useState(false);
  const [pub, setpub] = useState(false);
  const [histC, sethistC] = useState(false);
  const [hist, sethist] = useState(JSON.parse(localStorage.getItem("_hi_0")));
  const [mobS, setmobS] = useState(false);

  const opnerCloser = () => {
    if (!authShow) {
      setTimeout(() => {
        document.querySelector(".Uac")?.classList.toggle("up-animate-out");
      }, [100]);
      setauthShow(!authShow);
      document.body.classList.toggle("no-scroll");
    } else {
      setTimeout(() => {
        setauthShow(!authShow);
      }, [300]);
      document.querySelector(".Uac")?.classList.toggle("up-animate-out");
      document.body.classList.toggle("no-scroll");
    }
  };

  const dialogHandler = () => {
    const checkClick = (e) => {
      if (
        !e.target.classList.contains("iner") &&
        e.target !== document.querySelector(".userImg")
      ) {
        DiaCloser();
        document.removeEventListener("click", checkClick);
      }
    };
    const DiaOpner = () => {
      setdia(true);
      setTimeout(() => {
        const diaLog = document.querySelector(".dN");
        diaLog?.classList.remove("opcaity-0");
      }, [100]);
      document.addEventListener("click", checkClick);
    };
    const DiaCloser = () => {
      const diaLog = document.querySelector(".dN");
      diaLog?.classList.add("opcaity-0");
      setTimeout(() => {
        setdia(false);
      }, [1000]);
    };
    if (!authtoken) {
      opnerCloser();
    } else {
      dia ? DiaCloser() : DiaOpner();
    }
  };

  useEffect(() => {
    if (location.pathname === "/new-story") {
      setpub(true);
    } else {
      setpub(false);
    }
  }, [location.pathname]);

  const handlePublish = () => {
    setgenreSelect(!genreSelect);
  };
  const handleWrite = () => {
    if (authtoken) {
      navigate("/new-story");
    } else {
      dialogHandler();
    }
  };

  const historyM = (e) => {
    sethistC(false);
    const NewHist = hist ? JSON.stringify([e, ...hist]) : JSON.stringify([e]);
    localStorage.setItem("_hi_0", NewHist);
    sethist(JSON.parse(NewHist));
  };

  const clickFunc = (e) => {
    if (!e.target.classList.contains("in_r")) {
      sethistC(false);
      document.removeEventListener("click", clickFunc);
    }
  };
  const clickFunc2 = (e) => {
    if (!e.target.classList.contains("in_r")) {
      setmobS(false);
      document.removeEventListener("click", clickFunc2);
    }
  };
  return (
    <>
      {authShow && <UACDialog func={dialogHandler} opnerCloser={opnerCloser} />}
      {dia && (
        <Dialog
          setauthtoken={setauthtoken}
          Userdetails={Userdetails}
          signout={signout}
        />
      )}
      {histC && <DRS hist={hist} sethist={sethist} />}
      {authtoken ? (
        <section className="Navbar">
          <div className="mainNav">
            <div className="leftSec">
              <Link to="/">
                <div className="nmlogo">
                  <svg
                    width="110"
                    height="40"
                    viewBox="0 0 390 129.39985720280083"
                    className="looka-1j8o68f"
                  >
                    <defs id="SvgjsDefs1248"></defs>
                    <g
                      id="SvgjsG1249"
                      featurekey="symbolFeature-0"
                      transform="matrix(1.27252352661752,0,0,1.27252352661752,18.931080195166228,0.9043900780135203)"
                      fill="#111111"
                    >
                      <path
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#111111"
                        d="M99.04,20.58c-0.01-0.06-0.01-0.12-0.03-0.18c-0.02-0.05-0.06-0.09-0.09-0.13c-0.03-0.05-0.06-0.1-0.1-0.14  s-0.09-0.07-0.141-0.1c-0.04-0.03-0.08-0.06-0.13-0.08c-0.05-0.03-0.109-0.03-0.17-0.04c-0.05-0.01-0.1-0.03-0.16-0.03l-6.21-0.04  l-0.81-1.22c0-0.01-0.01-0.01-0.01-0.02c-0.021-0.02-0.04-0.04-0.061-0.06c-0.03-0.04-0.07-0.07-0.11-0.1  c-0.02-0.02-0.039-0.05-0.069-0.07c-0.021-0.01-0.05-0.02-0.07-0.03c-0.04-0.02-0.09-0.04-0.14-0.05  c-0.03-0.01-0.07-0.03-0.101-0.04c-0.01,0-0.01,0-0.02-0.01C71.93,15.31,56.3,16.39,50.8,21c-0.44,0.37-0.8,0.75-1.09,1.15  c-0.3-0.42-0.67-0.83-1.13-1.21c-4.3-3.61-16.89-6.21-39.3-2.7c-0.01,0.01-0.01,0.01-0.02,0.01c-0.03,0.01-0.06,0.03-0.1,0.04  c-0.05,0.01-0.09,0.03-0.14,0.05C9,18.35,8.97,18.36,8.95,18.37c-0.02,0.02-0.04,0.05-0.07,0.07c-0.04,0.03-0.08,0.06-0.11,0.1  L8.71,18.6c0,0.01-0.01,0.01-0.01,0.02l-0.81,1.22l-6.2,0.04c-0.06,0-0.11,0.02-0.16,0.03c-0.06,0.01-0.12,0.01-0.17,0.04  C1.31,19.96,1.28,20,1.24,20.03c-0.06,0.03-0.11,0.06-0.16,0.1C1.05,20.16,1.03,20.21,1,20.25c-0.03,0.05-0.07,0.09-0.1,0.15  c-0.02,0.05-0.02,0.11-0.03,0.16c-0.01,0.06-0.03,0.11-0.03,0.17v61.31c0,0.06,0.02,0.1,0.03,0.15C0.88,82.25,0.88,82.3,0.9,82.35  c0.02,0.061,0.05,0.101,0.08,0.15c0.03,0.04,0.06,0.09,0.09,0.13c0.04,0.04,0.09,0.07,0.13,0.101c0.05,0.029,0.09,0.069,0.14,0.09  c0.05,0.02,0.11,0.029,0.16,0.04c0.05,0.01,0.09,0.04,0.15,0.04c10.33,0.55,19.34-0.78,26.58-1.851c6.4-0.95,11.46-1.7,13.12-0.26  c0.28,0.24,0.65,0.68,0.65,1.76c0,0.47,0.38,0.851,0.86,0.851h14.19c0.47,0,0.851-0.381,0.851-0.851c0-1.069,0.369-1.52,0.649-1.76  c1.67-1.44,6.73-0.69,13.13,0.26c7.24,1.07,16.25,2.4,26.58,1.851c0.061,0,0.101-0.03,0.15-0.04c0.05-0.011,0.109-0.021,0.16-0.04  c0.05-0.021,0.1-0.061,0.14-0.101c0.04-0.029,0.09-0.05,0.12-0.09c0.05-0.04,0.07-0.09,0.1-0.14c0.03-0.05,0.061-0.09,0.08-0.13  c0.021-0.061,0.03-0.12,0.03-0.181c0.01-0.04,0.03-0.09,0.03-0.14V20.73C99.07,20.68,99.05,20.63,99.04,20.58z M91.32,21.91l1.989,3  v48.82l-2.34-3.36L91.32,21.91z M92.59,75.7c-7.229,0.43-12.54-0.38-17.24-1.101C67.7,73.41,61.65,72.48,52.13,78.03h-1.22  c0.3-1.49,1.32-3.021,2.92-4.32c3.58-2.91,12.99-7.05,35.78-2.3L92.59,75.7z M50.56,24.63c0-0.01,0-0.01,0-0.02  c0.021-0.79,0.471-1.56,1.341-2.29c4.159-3.49,17.42-5.58,37.72-2.49L89.27,69.59c-22.979-4.66-32.739-0.28-36.52,2.79  c-0.77,0.62-1.42,1.3-1.95,2.01l-0.24-49.74C50.56,24.64,50.56,24.64,50.56,24.63z M47.48,22.25c0.89,0.75,1.35,1.54,1.37,2.36v0.05  l0.23,49.68c-0.53-0.689-1.16-1.35-1.91-1.96c-3.78-3.07-13.54-7.45-36.53-2.79l-0.36-49.76C31.68,16.57,43.69,19.08,47.48,22.25z   M10.3,71.41c22.79-4.76,32.21-0.61,35.79,2.3c1.61,1.3,2.63,2.83,2.92,4.32h-1.24c-9.51-5.55-15.56-4.62-23.21-3.431  c-4.7,0.721-10.01,1.53-17.24,1.101L10.3,71.41z M8.58,21.91l0.36,48.46L6.6,73.73V24.91L8.58,21.91z"
                      ></path>
                    </g>
                    <g
                      id="SvgjsG1250"
                      featurekey="nameFeature-0"
                      transform="matrix(1.9492417995878932,0,0,1.9492417995878932,159.43199050948226,-22.276521729790822)"
                      fill="#111111"
                    >
                      <path d="M2.8571 40 l0 -28.571 l20.857 0 l4.2857 4.2857 l0 12 l-4.2857 4.2857 l-13.429 0 l0 8 l-7.4286 0 z M10.286 25.714 l10.286 0 l0 -8 l-10.286 0 l0 8 z M54.57114285714286 11.428999999999998 l4.2857 4.2857 l0 20 l-4.2857 4.2857 l-16.571 0 l-4.2857 -4.2857 l0 -20 l4.2857 -4.2857 l16.571 0 z M51.42814285714286 33.7143 l0 -16 l-10.286 0 l0 16 l10.286 0 z M82.57128571428572 17.714 l-10.571 0 l0 4.8571 l14 0 l4.2857 4.2857 l0 8.8571 l-4.2857 4.2857 l-17.143 0 l-4.2857 -4.2857 l0 -4.2857 l5.4286 0 l2.2857 2.2857 l10.571 0 l0 -4.8571 l-14 0 l-4.2857 -4.2857 l0 -8.8571 l4.2857 -4.2857 l17.143 0 l4.2857 4.2857 l0 4.2857 l-5.4286 0 z M93.99999714285714 17.714 l0 -6.2857 l24.286 0 l0 6.2857 l-8.4571 0 l0 22.286 l-7.4286 0 l0 -22.286 l-8.4 0 z"></path>
                    </g>
                    <g
                      id="SvgjsG1251"
                      featurekey="nameFeature-1"
                      transform="matrix(2.2296087554964914,0,0,2.2296087554964914,158.62934040155065,40.52024064430274)"
                      fill="#111111"
                    >
                      <path d="M20.629 11.428999999999998 l7.4286 0 l0 28.571 l-7.4286 0 l0 -11.143 l-10.286 0 l0 11.143 l-7.4857 0 l0.057143 -28.571 l7.4286 0 l0 11.143 l10.286 0 l0 -11.143 z M32.91428571428571 40 l0 -5.7143 l2.2857 0 l0 -17.143 l-2.2857 0 l0 -5.7143 l12 0 l0 5.7143 l-2.2857 0 l0 17.143 l2.2857 0 l0 5.7143 l-12 0 z M68.34328571428571 11.428999999999998 l6.8571 0 l0 3.4286 l-9.5429 25.143 l-7.7143 0 l-9.6 -25.143 l0 -3.4286 l6.8571 0 l6.5714 18.571 z M103.77157142857142 17.714 l-16.857 0 l0 4.8571 l14.571 0 l0 6.2857 l-14.571 0 l0 4.8571 l16.857 0 l0 6.2857 l-20 0 l-4.2857 -4.2857 l0 -24.286 l24.286 0 l0 6.2857 z"></path>
                    </g>
                  </svg>
                </div>
              </Link>
              <div className="search sr_n">
                <svg
                  onClick={(e) => {
                    if (window.innerWidth <= 560) {
                      document.addEventListener("click", clickFunc2);
                      setmobS(true);
                    } else {
                      if (e.target.nextSibling.value !== "") {
                        historyM(e.target.nextSibling.value);
                        navigate(`/search?q=${e.target.nextSibling.value}`);
                      }
                    }
                  }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#6b6b6b"
                  className="in_r"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                    fill="6b6b6b"
                  ></path>
                </svg>
                <input
                  className="in_r"
                  onClick={() => {
                    document.addEventListener("click", clickFunc);
                    sethistC(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.target.value !== "") {
                      if (e.key === "Enter") {
                        historyM(e);
                        navigate(`/search?q=${e.target.value}`);
                      }
                    }
                  }}
                  type="text"
                  placeholder="Search"
                />
              </div>
              {mobS && (
                <div className="search sRM">
                  <svg
                    onClick={(e) => {
                      if (e.target.nextSibling?.value !== "") {
                        historyM(e.target.nextSibling.value);
                        navigate(`/search?q=${e.target.nextSibling.value}`);
                      }
                    }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#6b6b6b"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                      fill="6b6b6b"
                    ></path>
                  </svg>
                  <input
                    className="in_r"
                    onClick={() => {
                      document.addEventListener("click", clickFunc);
                      sethistC(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.target.value !== "") {
                        if (e.key === "Enter") {
                          historyM(e);
                          navigate(`/search?q=${e.target.value}`);
                        }
                      }
                    }}
                    type="text"
                    placeholder="Search"
                  />
                </div>
              )}
            </div>
            <div className="rightSec">
              {!pub ? (
                <div onClick={handleWrite} className="WriteDiv">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-label="Write"
                  >
                    <path
                      d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                      fill="#6b6b6b"
                    ></path>
                    <path
                      d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                      stroke="#6b6b6b"
                    ></path>
                  </svg>
                  <span>Write</span>
                </div>
              ) : (
                <button onClick={handlePublish} className="f-btn btn-3">
                  Publish
                </button>
              )}
              <div onClick={dialogHandler} className="userImg">
                <img
                  src={Userdetails ? Userdetails.profileImg : userImg}
                  alt="user"
                  className="NavuserImg"
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <NoAuthNavbar opnerCloser={opnerCloser} authtoken={authtoken} />
      )}
    </>
  );
}
