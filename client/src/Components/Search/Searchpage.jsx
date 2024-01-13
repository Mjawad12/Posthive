import React, { useContext, useEffect, useState } from "react";
import LeftSection from "../LeftSection/LeftSection";
import RightSec from "../RightSection/RightSec";
import Context from "../Mainstate/Context";

import { useLocation } from "react-router-dom";

export default function Searchpage() {
  const location = useLocation();
  const [searchQ, setsearchQ] = useState(
    new URLSearchParams(location.search).get("q")
  );

  const context = useContext(Context);
  const {
    staffPicks,
    userstofollow,
    addFollwer,
    readingList,
    staffpicks,
    getSearchResults,
  } = context;
  const [intrest, setintrest] = useState(false);
  useEffect(() => {
    !staffpicks && staffPicks();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (location.pathname.includes("/search")) {
      const url = new URLSearchParams(location.search);
      getSearchResults(url.get("q"));
      setsearchQ(url.get("q"));
    } // eslint-disable-next-line
  }, [location.search]);

  return (
    <section className="searchpage">
      <div className="hero">
        <LeftSection
          intrest={intrest}
          setintrest={setintrest}
          searchState={true}
          searchQ={searchQ}
        ></LeftSection>
        <RightSec
          userstofollow={userstofollow}
          intrest={intrest}
          setintrest={setintrest}
          addFollwer={addFollwer}
          readingList={readingList}
        ></RightSec>
      </div>
    </section>
  );
}
