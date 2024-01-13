import React, { useEffect, useRef } from "react";

export default function NASvg() {
  const ref = useRef(null);
  const adder = () => {
    for (let i = 0; i < document.querySelectorAll(".els").length; i++) {
      setTimeout(() => {
        if (document.querySelector(`.spa${i}`)) {
          document.querySelector(`.spa${i}`).style.opacity = 0;
        }

        i === document.querySelectorAll(".els").length - 1 && remover();
      }, [300 * i]);
    }
  };
  const remover = () => {
    for (let i = 0; i < document.querySelectorAll(".els").length; i++) {
      setTimeout(() => {
        if (document.querySelector(`.spa${i}`)) {
          document.querySelector(`.spa${i}`).style.opacity = 1;
        }
        i === document.querySelectorAll(".els").length - 1 && adder();
      }, [300 * i]);
    }
  };

  useEffect(() => {
    adder();
    ref.current.setAttribute(
      "height",
      ref.current.parentElement.parentElement.scrollHeight - 70
    );
    ref.current.setAttribute(
      "width",
      ref.current.parentElement.parentElement.scrollHeight - 70
    ); // eslint-disable-next-line
  }, []);
  return (
    <svg
      id="ezir0dbZIxB1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 300 300"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      width={520}
      height={520}
      ref={ref}
    >
      <text
        className="els spa0"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(235.529413 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa2"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(235.529413 69.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa3"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(235.529413 93.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa4"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(235.529413 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa5"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(235.529413 172.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa6"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(235.529413 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa7"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(235.529413 274.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa8"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(11.000001 275)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa9"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(45 274.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(76.000001 274.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa12"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(113 274.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa11"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(147.000001 274.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa10"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(253 274.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(268.941177 274.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 274.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(235.529413 249.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa24"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(94.529413 249.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(11.000001 250)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(45 249.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(60.941177 249.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(113 249.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa23"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(268.941177 249.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 249.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(166.529413 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(94.529413 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa25"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(11.000001 224)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(60.941177 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(76.000001 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(113 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(128.941177 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        className="els spa26"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(184 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(216.000001 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 223.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        className="els spa27"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(11.000001 200)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(45 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(76.000001 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(113 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(147.000001 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(184 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(216.000001 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(253 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(268.941177 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 199.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        className="els spa1"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(166.529413 172.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(94.529413 172.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(11.000001 173)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(60.941177 172.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        className="els spa13"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(113 172.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(253 172.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 172.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(166.529413 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa14"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(27.529413 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(45 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(76.000001 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(113 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(147.000001 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(199.941177 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(216.000001 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(268.941177 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 146.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(94.529413 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(45 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(60.941177 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(113 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(147.000001 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(184 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(216.000001 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(253 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(268.941177 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 119.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(128.941177 93.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(147.000001 93.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(184 93.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(199.941177 93.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(216.000001 93.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(253 93.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa17"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 93.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(94.529413 69.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(11.000001 70)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(60.941177 69.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(147.000001 69.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa18"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(184 69.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(199.941177 69.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        className="els spa15"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(268.941177 69.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(94.529413 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(45 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(60.941177 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        className="els spa16"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(128.941177 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(147.000001 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(216.000001 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(253 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(268.941177 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 46.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(147.000001 26.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(184 26.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa20"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(216.000001 26.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa22"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(253 26.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
        <tspan x={0} y={30} fontWeight={400} strokeWidth={0}></tspan>
      </text>
      <text
        className="els spa19"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(268.941177 26.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <text
        className="els spa21"
        dx={0}
        dy={0}
        fontFamily='"ezir0dbZIxB1:::Roboto"'
        fontSize={15}
        fontWeight={400}
        transform="translate(283.941177 26.997646)"
        strokeWidth={0}
      >
        <tspan y={0} fontWeight={400} strokeWidth={0}>
          P
        </tspan>
      </text>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n@font-face {font-family: 'ezir0dbZIxB1:::Roboto';font-style: normal;font-weight: 400;src: url(data:font/ttf;charset=utf-8;base64,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) format('truetype');}\n",
        }}
      />
    </svg>
  );
}
