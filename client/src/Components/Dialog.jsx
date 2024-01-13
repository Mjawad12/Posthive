import React from "react";
import { useNavigate } from "react-router-dom";
export default function Dialog({ signout, Userdetails }) {
  const navigate = useNavigate();
  return (
    <div className="dN opcaity-0 iner">
      <div className="todN iner">
        <ul className="iner">
          <li
            onClick={() => {
              navigate(`/profile/${Userdetails?._id}`);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Profile"
            >
              <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
              <path
                d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34"
                stroke="currentColor"
                strokeLinecap="round"
              ></path>
            </svg>{" "}
            Profile
          </li>
          <li
            onClick={() => {
              navigate(`/new-story`);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Write"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>{" "}
            Write
          </li>
          <li
            onClick={() => {
              navigate(`/profile/${Userdetails?._id}`);
              setTimeout(() => {
                document.querySelector(".rl")?.click();
              }, [1000]);
            }}
          >
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-label="Lists"
            >
              <path
                d="M6.44 6.69h0a1.5 1.5 0 0 1 1.06-.44h9c.4 0 .78.16 1.06.44l.35-.35-.35.35c.28.28.44.66.44 1.06v14l-5.7-4.4-.3-.23-.3.23-5.7 4.4v-14c0-.4.16-.78.44-1.06z"
                stroke="currentColor"
              ></path>
              <path
                d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
                stroke="currentColor"
                strokeLinecap="round"
              ></path>
            </svg>{" "}
            Reading List
          </li>
        </ul>
      </div>
      <div className="btdN iner">
        <p
          onClick={() => {
            signout();
            navigate("/");
          }}
        >
          Sign out
        </p>
        <p className="iner">
          {Userdetails?.email.slice(0, 2)}
          **********@gmail.com
        </p>
      </div>
    </div>
  );
}
