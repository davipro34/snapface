export class FaceSnap {
  title: string;
  description: string;
  imageUrl: string;
  createdDate: Date;
  snaps: number;

  constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.createdDate = createdDate;
    this.snaps = snaps;
  }
}