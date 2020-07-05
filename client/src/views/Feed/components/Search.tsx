import React, { Dispatch, SetStateAction, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import AsyncSelect from "react-select/async";
import makeAnimated from "react-select/animated";
import * as qs from "query-string";
import { useQuery } from "Hook/useQuery";

import * as S from "../Feed.style";

function Search(): JSX.Element {
  const [input, setInput] = useState(``);
  const components = makeAnimated();
  const params = useQuery;
  const filterColors = (inputValue) =>
    [
      { label: `green`, value: 0 },
      { label: `red`, value: 1 },
      { label: `orange`, value: 2 },
      { label: `blue`, value: 3 },
    ].filter((color) => color.label.includes(inputValue.toLowerCase()));

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newString: string) => {
    setInput(newString);
    return newString;
  };

  return (
    <S.Search
      cacheOptions
      components={components}
      defaultOptions
      defaultValue={Object.values(params).map((value) => ({
        label: value,
        value,
      }))}
      isClearable
      isMulti
      loadOptions={loadOptions}
      name="search"
      onChange={handleInputChange}
    />
  );
}

export default Search;
