import React, { Dispatch, SetStateAction, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import makeAnimated from "react-select/animated";
import { useQuery } from "Hook/useQuery";

import { useUpdateParams } from "Hook/useUpdateParams";
import { useParseParams } from "Hook/useParseParams";
import * as S from "../Feed.style";

function Search(): JSX.Element {
  const components = makeAnimated();
  const history = useHistory();
  const location = useLocation();
  const params = useParseParams();
  console.log(params);
  const filterColors = (inputValue) =>
    [
      { label: `green`, value: `green`, search: `category` },
      { label: `red`, value: `red`, search: `youtube` },
      { label: `orange`, value: `orange`, search: `vimeo` },
      { label: `blue`, value: `blue`, search: `category` },
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
