import { IsNotEmpty, IsString, IsOptional, IsIn } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';
import { VideoSource } from '../videosource.enum';

export class CreateVideoDto {
  @PrimaryGeneratedColumn()
  id: number;
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsNotEmpty()
  @IsString()
  url: string;
  @IsNotEmpty()
  @IsString()
  submittedBy: string;
  @IsNotEmpty()
  @IsString()
  quality: number;
  @IsNotEmpty()
  @IsIn([VideoSource.YOUTUBE, VideoSource.VIMEO, VideoSource.OTHER])
  source: VideoSource;
}
