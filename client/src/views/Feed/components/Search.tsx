import React, { Dispatch, SetStateAction, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import makeAnimated from "react-select/animated";
import { useQuery } from "Hook/useQuery";

import { useUpdateParams } from "Hook/useUpdateParams";
import * as S from "../Feed.style";

function Search(): JSX.Element {
  const components = makeAnimated();
  const history = useHistory();
  const location = useLocation();
  const params = useQuery;
  const filterColors = (inputValue) =>
    [
      { label: `green`, value: 0, search: `category` },
      { label: `red`, value: 1, search: `youtube` },
      { label: `orange`, value: 2, search: `vimeo` },
      { label: `blue`, value: 3, search: `category` },
    ].filter((color) => color.label.includes(inputValue.toLowerCase()));

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newString: string) =>
    useUpdateParams(newString, history, location);
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
