import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { VideoSource } from './videosource.enum';

@Entity()
export class Video extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  source: VideoSource;

  @Column()
  authorFirstName: string;

  @Column()
  authorLastName: string;

  @Column()
  authorEmail: string;

  @Column()
  authorId: number;

  @Column()
  quality: number;
}
