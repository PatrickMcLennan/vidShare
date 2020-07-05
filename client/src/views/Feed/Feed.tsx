import React from "react";
import { usePageMount } from "Hook/usePageMount";
import { useUser } from "Hook/useContext";
import UserCard from "Component/UserCard/UserCard";
import { ViewMode } from "common";
import * as S from "./Feed.style";

import Search from "./components/Search";
import Results from "./components/Results";

function Feed(): JSX.Element {
  const { user } = useUser();

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
        <header />
        <Search />
        <Results />
      </S.MainColumn>

      <S.RightColumn>
        <div>this is the right column</div>
      </S.RightColumn>
    </>
  );
}

export default Feed;
