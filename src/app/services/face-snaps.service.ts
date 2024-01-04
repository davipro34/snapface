import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 100,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnéees.',
      imageUrl: 'https://cdn.pixabay.com/photo/2014/12/17/18/55/rock-571801_1280.jpg',
      createdDate: new Date(),
      snaps: 180,
      location: 'la montagne'
    },
    {
      id: 3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg',
      createdDate: new Date(),
      snaps: 150
    },
    {
      id: 4,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 240,
      location: 'Paris'
    },
    {
      id: 5,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnéees.',
      imageUrl: 'https://cdn.pixabay.com/photo/2014/12/17/18/55/rock-571801_1280.jpg',
      createdDate: new Date(),
      snaps: 50,
      location: 'la montagne'
    },
    {
      id: 6,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg',
      createdDate: new Date(),
      snaps: 255
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
     const faceSnap = this.getFaceSnapById(faceSnapId);
     snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}