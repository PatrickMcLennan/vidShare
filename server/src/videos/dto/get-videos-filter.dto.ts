import { IsIn, IsOptional, IsNotEmpty } from 'class-validator';
import { VideoSource } from '../videosource.enum';

export class GetVideosFilterDto {
  @IsOptional()
  @IsIn([VideoSource.YOUTUBE, VideoSource.VIMEO, VideoSource.OTHER])
  source: VideoSource;

  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  @IsNotEmpty()
  userId: string;
}
