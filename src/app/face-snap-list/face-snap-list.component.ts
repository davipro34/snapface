import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, take, tap } from 'rxjs';



@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapsService: FaceSnapsService) { }
  
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();

    interval(1000).pipe(
      take(3),
      tap(console.log)
    ).subscribe();
  }
}
