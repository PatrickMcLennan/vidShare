import { useLocation } from "react-router-dom";
import * as qs from "query-string";

export function useQuery() {
  const test = useLocation();
  const params = qs.parse(test.search);
  return params;
}
