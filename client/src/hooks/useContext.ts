import { useContext } from "react";

import { ApiContext, IApiContext } from "Context/ApiContext";
import { UserContext, IUserContext } from "Context/UserContext";

export const useApi = (): IApiContext => useContext(ApiContext);
export const useUser = (): IUserContext => useContext(UserContext);
