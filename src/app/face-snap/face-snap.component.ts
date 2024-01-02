import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  alreadyLiked!: boolean;
  textButton!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis petit !';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.alreadyLiked = false;
    this.textButton = 'Oh Snap (unliked)!';
  }
  
  onClickSnap() {
    if (this.alreadyLiked) {
        this.snaps--;
        this.textButton = 'Oh Snap (unliked)!';
        this.alreadyLiked = false;
    }
    else {
        this.snaps++;
        this.textButton = 'Oups On Snap (liked)!';
        this.alreadyLiked = true;
    };
  }
}
