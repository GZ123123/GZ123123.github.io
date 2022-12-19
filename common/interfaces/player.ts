
export interface IPlayerProps {
  song: ISong;
  onNext: any;
  onPrev: any;
}

export interface ISong {
  name: string;
  src: string;
  lyric: string;
}