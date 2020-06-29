import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

function getToken(isRefresh = false) {
  const token = JSON.parse(localStorage.getItem(process.env.TOKEN) || "null");
  return (
    token &&
    (isRefresh ? `${token.refresh_token}` : `Bearer ${token.access_token}`)
  );
}

function refreshAuth(failedRequest): Promise<void | ApiError> {
  return axios({
    method: "POST",
    url: `${process.env.API}${process.env.API_AUTH}`,
    headers: {
      Authorization: null,
    },
    data: {
      refresh_token: getToken(true),
      grant_type: "refresh_token",
      // client_secret: "eventsiqa",
      // client_id: "f4f53fa6-5e8f-44e2-8cdc-1d7d5dfa0708",
    },
  })
    .then(
      async ({ data: { access_token, refresh_token } }): Promise<void> => {
        localStorage.setItem(
          process.env.TOKEN,
          JSON.stringify({ access_token, refresh_token })
        );
        Object.assign(failedRequest.response.config.headers, {
          Authorization: getToken(),
        });
        return Promise.resolve();
      }
    )
    .catch(
      (error): Promise<ApiError> =>
        Promise.reject({
          responseCode: Number(error.response.status),
          message: `There was an error in the refreshAuth interceptor`,
          error,
        })
    );
}

const client = axios.create({
  baseURL: process.env.API,
  headers: {
    Authorization: getToken(),
  },
});

client.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: getToken(),
  },
}));

createAuthRefreshInterceptor(axios, refreshAuth);

export default client;
