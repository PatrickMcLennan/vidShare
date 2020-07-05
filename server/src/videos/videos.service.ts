import { Injectable, NotFoundException } from '@nestjs/common';
import { Video } from './video.entity';
import { CreateVideoDto } from './dto/create-video.dto';
// import { v1 as uuid } from 'uuid';
import { AddRatingDto } from './dto/add-rating.dto';
import { VideoRepository } from './video.repository';
import { DeleteVideoDto } from './dto/delete-video.dto';
import { EditVideoDto } from './dto/edit-video.dto';
import { GetVideosFilterDto } from './dto/get-videos-filter.dto';

@Injectable()
export class VideosService {
  constructor(private videoRepository: VideoRepository) {}

  createVideo(createVideoDto: CreateVideoDto): Promise<Video> {
    return this.videoRepository.createVideo(createVideoDto);
  }
  deleteVideo(deleteVideoDto: DeleteVideoDto): Promise<void> {
    return this.videoRepository.deleteVideo(deleteVideoDto);
  }
  editVideo(editVideoDto: EditVideoDto): Promise<Video> {
    return this.videoRepository.editVideo(editVideoDto);
  }
  getVideos(getVideosDto: GetVideosFilterDto): Promise<Video[]> {
    return this.videoRepository.getVideos(getVideosDto);
  }
}
