import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class AddRatingDto {
  @IsNotEmpty()
  @IsString()
  userId: string;
  @IsNotEmpty()
  videoId: string;
  @IsNotEmpty()
  @IsNumber()
  rating: number;
}
