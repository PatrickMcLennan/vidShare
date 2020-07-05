import { push } from "react-router-dom";

export function useUpdateParams(params, history, location) {
  if (!params) return history.push();
  const alpha = params.sort((a, b) => (a.search < b.search ? -1 : 1));
  const sameField = alpha.reduce((allParams, currentParam, i, sourceArray) => {
    if (i === 0) return { [currentParam.search]: currentParam.label };
    else
      return currentParam.search === sourceArray[i - 1].search
        ? {
            ...allParams,
            [currentParam.search]: `${allParams[currentParam.search]}&${
              currentParam.label
            }`,
          }
        : {
            ...allParams,
            [currentParam.search]: `${currentParam.label}`,
          };
  }, {});
  const string = new URLSearchParams(sameField);

  return history.push({
    pathname: location.pathname.split(`q=`)[0],
    search: string.toString(),
  });
}
