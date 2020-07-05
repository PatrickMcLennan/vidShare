import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Delete,
  Patch,
  Get,
} from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { VideosService } from './videos.service';
import { Video } from './video.entity';
import { DeleteVideoDto } from './dto/delete-video.dto';
import { EditVideoDto } from './dto/edit-video.dto';
import { GetVideosFilterDto } from './dto/get-videos-filter.dto';

@Controller('video')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Delete()
  @UsePipes(ValidationPipe)
  async deleteVideo(@Body() deleteVideoDto: DeleteVideoDto): Promise<void> {
    return this.videosService.deleteVideo(deleteVideoDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async getVideos(@Body() getVideosDto: GetVideosFilterDto): Promise<Video[]> {
    return this.videosService.getVideos(getVideosDto);
  }

  @Patch()
  @UsePipes(ValidationPipe)
  async editVideo(@Body() editVideoDto: EditVideoDto): Promise<Video> {
    return this.videosService.editVideo(editVideoDto);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createVideo(
    @Body(ValidationPipe) createVideoDto: CreateVideoDto,
  ): Promise<Video> {
    return this.videosService.createVideo(createVideoDto);
  }
}
