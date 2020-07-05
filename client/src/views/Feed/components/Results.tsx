import React from "react";
import { useQuery } from "Hook/useQuery";
import VideoCard from "Component/VideoCard/VideoCard";

import { VideoSource } from "common";
import * as S from "../Feed.style";

enum ViewMode {
  main = `MAIN`,
  leftSidebar = `LEFT_SIDEBAR`,
  rightSidebar = `RIGHT_SIDEBAR`,
}

function Results(): JSX.Element {
  // const params = useQuery();
  return (
    <S.Results>
      {[...Array(10)].map((number) => (
        <VideoCard
          key={number}
          viewMode={ViewMode.main}
          video={{
            title: [`test 1`, `hunt`, `mockery`][Math.floor(Math.random() * 3)],
            id: "20",
            description: "",
            source: VideoSource.youtube,
            url: "whatever",
          }}
        />
      ))}
    </S.Results>
  );
}

export default Results;
