import React from "react";
import { ViewMode, IVideo } from "common";

import VimeoSVG from "Component/svgs/Video";
import YouTubeSVG from "Component/svgs/YouTubeSVG";
import * as S from "./VideoCard.style";

export interface IProps {
  video: IVideo;
  viewMode: ViewMode;
}

function VideoCard({ video, viewMode }: IProps): JSX.Element {
  const { title, description, source } = video;
  return (
    <S.Button viewMode={viewMode}>
      <h6 className="title">{title}</h6>
      <p className="description">{description}</p>
      {source === `VIMEO` && <VimeoSVG />}
      {source === `YOUTUBE` && <YouTubeSVG />}
      <span className="source">{source}</span>
    </S.Button>
  );
}

export default VideoCard;
