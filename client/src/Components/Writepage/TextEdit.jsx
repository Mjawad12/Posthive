import React, { useState } from "react";

export default function TextEdit() {
  const [linkState, setlinkState] = useState(false);
  const [seletedText, setseletedText] = useState("");
  const [range, setrange] = useState("");
  const bold = (e) => {
    e.preventDefault();
    document.execCommand("bold");
  };
  const italics = (e) => {
    e.preventDefault();
    document.execCommand("italic");
  };
  const Bigtext = (e) => {
    e.preventDefault();
    document.execCommand("fontSize", false, 5);
  };
  const smallText = (e) => {
    e.preventDefault();
    document.execCommand("fontSize", false, 4);
  };

  const Link = () => {
    const selection = window.getSelection().toString().trim();
    if (selection !== "") {
      setlinkState(true);
      setseletedText(selection);
      setrange(window.getSelection().getRangeAt(0));
    } else {
      alert("Please Select Text to perform this operation.");
    }
  };
  const Linked = (e) => {
    var url = e.target.value;
    if (e.key === "Enter") {
      const anchor = document.createElement("a");
      anchor.textContent = seletedText;
      anchor.target = "_blank";
      anchor.classList.add("atag");
      anchor.href = url;
      const anchor2 = document.createElement("a");
      anchor2.href = url;
      anchor2.textContent = url.slice(0, 10) + "...";
      anchor2.classList.add("aRtag");
      anchor2.target = "_blank";
      anchor2.contentEditable = false;
      anchor.appendChild(anchor2);
      range.deleteContents();
      range.insertNode(anchor);
      setlinkState(false);
    }
  };

  return (
    <div className="textEM">
      {linkState ? (
        <div className="linkdiv">
          <input
            type="link"
            onKeyDown={Linked}
            placeholder="Paste or type a link..."
          ></input>{" "}
          <svg
            onClick={() => setlinkState(false)}
            className="svgIcon-use"
            width="19"
            height="19"
            fill="white"
          >
            <path
              d="M13.792 4.6l-4.29 4.29-4.29-4.29-.612.613 4.29 4.29-4.29 4.29.613.612 4.29-4.29 4.29 4.29.612-.613-4.29-4.29 4.29-4.29"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          <div className="leftTextEM">
            <button onClick={bold}>
              <svg fill="white" className="svgIcon-use" width="25" height="25">
                <path
                  d="M10.308 17.993h-5.92l.11-.894.783-.12c.56-.11.79-.224.79-.448V5.37c0-.225-.113-.336-.902-.448H4.5l-.114-.894h6.255c4.02 0 5.58 1.23 5.58 3.13 0 1.896-1.78 3.125-3.79 3.463v.11c2.69.34 4.25 1.56 4.25 3.57 0 2.35-2.01 3.69-6.37 3.69l.02.01h-.02zm-.335-12.96H8.967V10.5h1.23c1.788 0 2.79-1.23 2.79-2.683 0-1.685-1.004-2.803-3.006-2.803v.02zm-.223 6.36h-.783v5.588l1.225.23h.22c1.67 0 3.01-1.004 3.01-2.792 0-2.122-1.566-3.016-3.69-3.016h.018z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            <button onClick={italics}>
              <svg fill="white" className="svgIcon-use" width="25" height="25">
                <path
                  d="M9.847 18.04c-.533 0-2.027-.64-1.92-.853l2.027-7.68-.64-.214-1.387 1.494-.427-.427c.534-1.173 1.707-2.667 2.774-2.667.533 0 2.24.534 2.133.854l-2.133 7.786.533.214 1.6-1.067.427.427c-.64 1.066-1.92 2.133-2.987 2.133zm2.347-11.733c-.96 0-1.387-.64-1.387-1.387 0-1.067.747-1.92 1.493-1.92.854 0 1.387.64 1.387 1.493-.107 1.067-.747 1.814-1.493 1.814z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            <button onClick={Link}>
              <svg fill="white" className="svgIcon-use" width="25" height="25">
                <path
                  d="M2.2 13.17c0-.575.125-1.11.375-1.605l.02-.018v-.02c.014 0 .02-.008.02-.02 0-.014 0-.02.02-.02.122-.256.31-.52.576-.805l3.19-3.18c0-.008 0-.015.01-.02.01-.006.01-.013.01-.02.44-.413.91-.7 1.44-.853-.63.71-1.03 1.5-1.19 2.36-.04.24-.06.52-.06.81 0 .14.01.24.02.33L4.67 12.1c-.19.19-.316.407-.376.653a1.33 1.33 0 00-.057.415c0 .155.02.314.06.477.075.21.2.403.376.58l1.286 1.31c.27.276.62.416 1.03.416.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.103-.2.15-.42.15-.67 0-.16-.02-.31-.056-.45l-.02-.02v-.02l-.07-.14c0-.01-.013-.03-.04-.06l-.06-.13-.02-.02c0-.02-.01-.03-.02-.05a.592.592 0 00-.143-.16l-.48-.5c0-.042.015-.1.04-.15l.06-.12 1.17-1.14.087-.09.56.57c.023.04.08.1.16.18l.05.04c.006.018.02.036.035.06l.04.054c.01.01.02.025.03.04.03.023.04.046.04.058.04.04.08.09.1.14l.02.02c0 .018.01.03.024.04l.105.197v.02c.098.157.19.384.297.68a1 1 0 01.04.255c.06.21.08.443.08.7 0 .22-.02.43-.06.63-.12.71-.44 1.334-.95 1.865l-.66.67-.97.972-1.554 1.57C8.806 17.654 7.98 18 7.01 18s-1.8-.34-2.487-1.026l-1.296-1.308a3.545 3.545 0 01-.913-1.627 4.541 4.541 0 01-.102-.88v-.01l-.012.01zm5.385-3.433c0-.183.023-.393.07-.63.13-.737.448-1.362.956-1.87l.66-.662.97-.983 1.56-1.56C12.48 3.34 13.3 3 14.27 3c.97 0 1.8.34 2.483 1.022l1.29 1.314c.44.438.744.976.913 1.618.067.32.102.614.102.87 0 .577-.123 1.11-.375 1.605l-.02.01v.02l-.02.04c-.148.27-.35.54-.6.81l-3.187 3.19c0 .01 0 .01-.01.02-.01 0-.01.01-.01.02-.434.42-.916.7-1.427.83.63-.67 1.03-1.46 1.19-2.36.04-.26.06-.53.06-.81 0-.14-.01-.26-.02-.35l1.99-1.97c.18-.21.3-.42.35-.65.04-.12.05-.26.05-.42 0-.16-.02-.31-.06-.48-.07-.19-.19-.38-.36-.58l-1.3-1.3a1.488 1.488 0 00-1.06-.42c-.42 0-.77.14-1.06.41L11.98 6.7l-.79.793-1.157 1.16c-.088.075-.186.21-.294.4-.09.233-.14.46-.14.67 0 .16.02.31.06.452l.02.02v.023l.06.144c0 .006.01.026.05.06l.06.125.02.02c0 .01 0 .013.01.02 0 .005.01.01.01.02.05.08.1.134.14.16l.47.5c0 .04-.02.093-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.31 2.31 0 00-.18-.187c-.02-.01-.02-.03-.02-.04l-.02-.02a.375.375 0 01-.1-.122c-.03-.024-.05-.043-.05-.06l-.1-.15-.02-.02-.02-.04L8 11.4v-.02a5.095 5.095 0 01-.283-.69 1.035 1.035 0 01-.04-.257 2.619 2.619 0 01-.093-.7v.007z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <hr />
          <div className="rightTextEM">
            <button onClick={Bigtext}>
              <svg fill="white" className="svgIcon-use" width="25" height="25">
                <path
                  d="M3 2v4.747h1.656l.383-2.568.384-.311h3.88V15.82l-.408.38-1.56.12V18h7.174v-1.68l-1.56-.12-.407-.38V3.868h3.879l.36.311.407 2.568h1.656V2z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
            <button onClick={smallText}>
              <svg fill="white" className="svgIcon-use" width="25" height="25">
                <path
                  d="M4 5.5v4.74h1.657l.384-2.569.384-.312h2.733v8.461l-.41.38-1.91.12V18h7.179v-1.68l-1.912-.12-.405-.38V7.359h2.729l.36.312.408 2.57h1.657V5.5z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
