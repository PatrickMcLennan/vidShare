import { IsString, IsNotEmpty, IsNotEmptyObject } from 'class-validator';

export class DeleteVideoDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  videoId: string;
}
