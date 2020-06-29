export enum VideoSource {
  YOUTUBE = `YOUTUBE`,
  VIMEO = `VIMEO`,
  OTHER = 'OTHER',
}

export interface Video {
  id: string;
  title: string;
  url: string;
  submittedBy: string; // User Id
  rating: number;
  quality: number;
  comments: []; // Come back to this when comments are created
  source: VideoSource;
  userVotes: { userId: string; rating: number }[]; // UserIds who have rated
}
