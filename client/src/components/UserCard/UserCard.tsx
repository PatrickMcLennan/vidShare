import React from "react";
import { Link } from "react-router-dom";

import * as S from "./UserCard.style";

interface IProps {
  viewMode: ViewMode;
  user: IUser;
  isUser: boolean;
}

function UserCard({ viewMode, user, isUser }: IProps): JSX.Element {
  return (
    <S.Article
      viewMode={viewMode}
      aria-label={`About ${user.firstName} ${user.lastName}`}
    >
      <Link
        aria-hidden={viewMode === `MAIN`}
        to={`/user/profile/${user.id}`}
        className="name"
      >
        {user.firstName} {user.lastName}
      </Link>

      <span className="videos">{user.videos.length} Videos uploaded</span>
      <span className="savedVideos">
        {user.savedVideos.length} Saved Videos
      </span>

      {isUser && (
        <div className="buttons">
          <Link to={`/user/edit/${user.id}`}>Edit account</Link>
        </div>
      )}
    </S.Article>
  );
}

export default UserCard;
