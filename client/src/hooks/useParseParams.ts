import * as qs from "query-string";
import { useLocation } from "react-router-dom";

export function useParseParams(
  paramString: string
): Record<string, string | string[]> {
  const location = useLocation();
  const paramsObject = qs.parse(location.search);
  console.log(paramsObject);
  return paramsObject;
}
