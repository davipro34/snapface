import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
        {
            title: 'Archibald',
            description: 'Mon meilleur ami depuis petit !',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            snaps: 90,
            location: 'Paris'
        },
        {
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les randonnéees.',
            imageUrl: 'https://cdn.pixabay.com/photo/2014/12/17/18/55/rock-571801_1280.jpg',
            createdDate: new Date(),
            snaps: 180,
            location: 'la montagne'
        },
        {
            title: 'Un bon repas',
            description: 'Mmmh que c\'est bon !',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg',
            createdDate: new Date(),
            snaps: 255
        }
    ];
  }
}
