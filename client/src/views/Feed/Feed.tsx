import React, { useState } from "react";
import { usePageMount } from "Hook/usePageMount";
import { useUser } from "Hook/useContext";
import UserCard from "Component/UserCard/UserCard";
import { ViewMode } from "common";
import * as S from "./Feed.style";

import Search from "./components/Search";

const test = [`testing`, `testingAgain`];

function Feed(): JSX.Element {
  const { user } = useUser();
  const [results, setResults] = useState([]);

  const filterResults = (newSearch: string) => {
    return setResults(prevResults => )
  }

  usePageMount(`Home`);
  return (
    <>
      <S.LeftSidebar>
        <UserCard
          viewMode={"LEFT_SIDEBAR" as ViewMode.leftSidebar}
          isUser
          user={user}
        />
      </S.LeftSidebar>

      <S.MainColumn>
        <Search setResults={setResults} />
      </S.MainColumn>

      <S.RightColumn>
        <div>this is the right column</div>
      </S.RightColumn>
    </>
  );
}

export default Feed;
