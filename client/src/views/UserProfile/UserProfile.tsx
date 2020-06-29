import React from "react";
import { useParams } from "react-router-dom";

import { ViewMode } from "common";

import UserCard from "Component/UserCard/UserCard";

import { useUser } from "Hook/useContext";

function UserProfile(): JSX.Element {
  const { user } = useUser();
  const { id } = useParams();
  return (
    <UserCard
      viewMode={"MAIN" as ViewMode.main}
      user={user}
      isUser={user.id === id}
    />
  );
}

export default UserProfile;
