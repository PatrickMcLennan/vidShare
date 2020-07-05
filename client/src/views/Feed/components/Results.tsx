import React from "react";
import { useQuery } from "Hook/useQuery";
import VideoCard from "Component/VideoCard/VideoCard";
import { VideoSource } from "../../../types/videos/video-source.enum";
import { ViewMode } from "../../../types/ui/viewmode.enum";
import * as S from "../Feed.style";

function Results(): JSX.Element {
  return (
    <S.Results>
      {[...Array(10)].map((number) => (
        <VideoCard
          key={number}
          viewMode={ViewMode.MAIN}
          video={{
            title: [`test 1`, `hunt`, `mockery`][Math.floor(Math.random() * 3)],
            id: "20",
            description: "",
            source: VideoSource.YOUTUBE,
            url: "whatever",
          }}
        />
      ))}
    </S.Results>
  );
}

export default Results;
