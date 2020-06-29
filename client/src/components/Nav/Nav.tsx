import React from "react";

import * as S from "./Nav.style";

function Nav(): JSX.Element {
  return (
    <S.Nav>
      <S.H3>vidShare</S.H3>
      <S.Menu>
        <li>
          <S.MenuLink to="/home">Feed</S.MenuLink>
        </li>
        <li>
          <S.MenuLink to="/login">Login</S.MenuLink>
        </li>
      </S.Menu>
    </S.Nav>
  );
}

export default Nav;
