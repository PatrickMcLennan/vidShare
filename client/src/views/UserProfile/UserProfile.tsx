import React from "react";
import { useParams } from "react-router-dom";

import UserCard from "Component/UserCard/UserCard";

import { useUser } from "Hook/useContext";
import { ViewMode } from "../../types/ui/viewmode.enum";

function UserProfile(): JSX.Element {
  const { user } = useUser();
  const { id } = useParams();
  return (
    <UserCard viewMode={ViewMode.MAIN} user={user} isUser={user.id === id} />
  );
}

export default UserProfile;
