import React from "react";

import * as S from "./Footer.style";

function Footer(): JSX.Element {
  return (
    <S.Footer>
      <span>Made By Patrick McLennan</span>
      <ul>
        <li>
          <a href="https://www.github.com/PatrickMcLennan">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com">LinkedIn</a>
        </li>
      </ul>
    </S.Footer>
  );
}

export default Footer;
