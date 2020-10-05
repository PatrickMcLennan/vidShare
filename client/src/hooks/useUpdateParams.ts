import { push } from "react-router-dom";
import * as qs from "qs";

export function useUpdateParams(params, history, location) {
  if (!params) return history.push();
  const alpha = params.sort((a, b) => (a.search < b.search ? -1 : 1));
  const queryString = alpha.reduce(
    (allParams, currentParam, i, sourceArray) => {
      if (i === 0)
        return { [currentParam.search]: qs.stringify(currentParam.value) };
      else return {};
    },
    ``
  );
  const sameField = alpha.reduce((allParams, currentParam) => {
    const [key, value] = [currentParam.search, currentParam.value];
    if (allParams.hasOwnProperty(key)) {
      return {
        ...allParams,
        [key]: [...allParams[key], value],
      };
    } else
      return {
        ...allParams,
        [key]: [value],
      };
  }, {});

  return history.push({
    pathname: location.pathname.split(`q=`)[0],
    search: qs.stringify(sameField),
  });
}
