import React from "react";
import { usePageMount } from "Hook/usePageMount";
import { useUser } from "Hook/useContext";
import UserCard from "Component/UserCard/UserCard";
import { ViewMode } from "../../types/ui/viewmode.enum";
import * as S from "./Feed.style";

import Search from "./components/Search";
import Results from "./components/Results";

function Feed(): JSX.Element {
  const { user } = useUser();

  usePageMount(`Home`);
  return (
    <>
      <S.LeftSidebar>
        <UserCard viewMode={ViewMode.LEFT_SIDEBAR} isUser user={user} />
      </S.LeftSidebar>

      <S.MainColumn>
        <header />
        <Search />
        <Results />
      </S.MainColumn>
    </>
  );
}

export default Feed;
