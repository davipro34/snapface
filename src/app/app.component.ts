import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0
    );
    this.myOtherSnap = new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnéees.',
        'https://cdn.pixabay.com/photo/2014/12/17/18/55/rock-571801_1280.jpg',
        new Date(),
        0
    );
    this.myLastSnap = new FaceSnap(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg',
        new Date(),
        0
    );
  }
}
