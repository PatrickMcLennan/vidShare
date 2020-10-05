import { PipeTransform, BadRequestException } from '@nestjs/common';
import { VideoSource } from '../videosource.enum';

export class VideoSourceValidationPipe implements PipeTransform {
  readonly allowedSources = [
    VideoSource.OTHER,
    VideoSource.VIMEO,
    VideoSource.YOUTUBE,
  ];

  private isSourceValid(source: any): boolean {
    const index = this.allowedSources.indexOf(source);
    return index >= 0;
  }

  transform(value: string) {
    value = value.toUpperCase();

    if (!this.isSourceValid(value))
      throw new BadRequestException(`${value} is not a valid video source`);
    else return value;
  }
}
