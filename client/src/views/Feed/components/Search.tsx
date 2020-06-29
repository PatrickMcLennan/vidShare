import React, { Dispatch, SetStateAction } from "react";
import AutoSuggest from "react-autosuggest";
import { IVideo } from "common";

interface IProps {
  setResults: Dispatch<SetStateAction<IVideo>>;
}

function Search({ setResults }: IProps): JSX.Element {
  return (
    <label htmlFor="search">
      <input
        name="search"
        onChange={({ target: { value } }) => setResults(value)}
        type="search"
      />
    </label>
  );
}

export default Search;
