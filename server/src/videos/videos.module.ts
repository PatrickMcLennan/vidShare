import { Module } from '@nestjs/common';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoRepository } from './video.repository';

@Module({
  imports: [TypeOrmModule.forFeature([VideoRepository])],
  providers: [VideosService],
  controllers: [VideosController],
})
export class VideosModule {}
