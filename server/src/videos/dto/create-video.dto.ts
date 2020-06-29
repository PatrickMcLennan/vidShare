import { IsNotEmpty, IsString } from 'class-validator';
import { VideoSource } from '../video.model';

export class CreateVideoDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  url: string;
  @IsNotEmpty()
  @IsString()
  submittedBy: string;
  quality: number;
  @IsNotEmpty()
  @IsString()
  source: VideoSource;
}
