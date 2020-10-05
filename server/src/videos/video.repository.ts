import { EntityRepository, Repository } from 'typeorm';
import { Video } from './video.entity';
import { CreateVideoDto } from './dto/create-video.dto';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { DeleteVideoDto } from './dto/delete-video.dto';
import { EditVideoDto } from './dto/edit-video.dto';
import { GetVideosFilterDto } from './dto/get-videos-filter.dto';

@EntityRepository(Video)
export class VideoRepository extends Repository<Video> {
  private async userCreatedVideo(
    userId: string,
    videoId: string,
    method: string,
  ): Promise<Video> {
    const query = this.createQueryBuilder(`video`);
    query.where(`video.authorId = :userId`, { userId });
    query.andWhere(`video.id = :videoId`, { videoId });

    const video = await query.getOne();

    if (!video)
      throw new BadRequestException(
        `You cannot ${method} a video that you did not create`,
      );
    else return video;
  }

  async createVideo(createVideoDto: CreateVideoDto): Promise<Video> {
    const {
      title,
      description,
      url,
      submittedBy,
      quality,
      source,
    } = createVideoDto;
    const query = User.createQueryBuilder(`user`);
    query.where(`user.id = :submittedBy`, { submittedBy });
    const user = await query.getOne();

    if (!user)
      throw new BadRequestException(
        `No user was found with the ID of ${submittedBy}`,
      );

    const video = new Video();
    video.title = title;
    video.description = description ?? '';
    video.url = url;
    video.quality = quality;
    video.source = source;
    video.authorFirstName = user.firstName;
    video.authorLastName = user.lastName;
    video.authorEmail = user.email;
    video.authorId = user.id;

    try {
      await video.save();
      return video;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteVideo(deleteVideoDto: DeleteVideoDto): Promise<void> {
    const { userId, videoId } = deleteVideoDto;
    const video = await this.userCreatedVideo(userId, videoId, `delete`);
    try {
      video.remove();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async editVideo(editVideoDto: EditVideoDto): Promise<Video> {
    const { userId, videoId, title, description } = editVideoDto;
    const video = await this.userCreatedVideo(userId, videoId, `update`);
    video.title = title;
    video.description = description;
    try {
      await video.save();
      return video;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async getVideos(getVideoDto: GetVideosFilterDto): Promise<Video[]> {
    const { source, search, userId } = getVideoDto;
    const query = this.createQueryBuilder(`video`);

    if (source) query.andWhere(`video.source = :source`, { source });
    if (search)
      query.andWhere(
        `(video.title LIKE :search OR video.description LIKE :search)`,
        { search: `%${search}%` },
      );
    if (userId) query.andWhere(`video.authorId = :userId`, { userId });

    const videos = await query.getMany();
    return videos;
  }
}
