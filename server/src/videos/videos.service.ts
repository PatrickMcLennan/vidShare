import { Injectable, NotFoundException } from '@nestjs/common';
import { Video } from './video.model';
import { CreateVideoDto } from './dto/create-video.dto';
import { v1 as uuid } from 'uuid';
import { AddRatingDto } from './dto/add-rating.dto';

@Injectable()
export class VideosService {
  private videos: Video[] = [];

  // DELETE
  deleteVideo(id: string): void {
    const found = this.getVideoById(id);
    this.videos = this.videos.filter(video => video.id !== found.id);
  }

  // GET
  getVideoById(id: string): Video {
    const video = this.videos.find(video => video.id === id);

    if (!video) {
      throw new NotFoundException(`Video with id ${id} was not found`);
    } else return video;
  }

  getAllVideos(): Video[] {
    return this.videos;
  }

  // PATCH
  addRating(addRatingDto: AddRatingDto): Video {
    const { userId, rating, videoId } = addRatingDto;
    const found = this.getVideoById(videoId);
    const usersCurrentVote = found.userVotes.filter(vote => vote.id === userId);
    if (!usersCurrentVote) {
      found.userVotes = [...found.userVotes, { userId, rating }];
    } else {
      found.userVotes = found.userVotes.map(vote =>
        vote.userId === userId ? { userId, rating } : vote,
      );
    }
    return found;
  }

  // POST
  createVideo(createVideoDto: CreateVideoDto): Video {
    const { title, url, submittedBy, quality, source } = createVideoDto;
    const video: Video = {
      id: uuid(),
      title,
      url,
      source,
      quality,
      submittedBy,
      rating: 0,
      comments: [],
      userVotes: [],
    };
    this.videos.push(video);
    return video;
  }
}
