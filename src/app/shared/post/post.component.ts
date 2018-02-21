import { Component,EventEmitter, Input, OnInit,Output } from '@angular/core';
import *as firebase from 'firebase';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() imageName: string;
  @Input() displayPostedBy: boolean=true;
  @Input() displayFavoritesButton: boolean=true;
  @Input() displayFollowButton: boolean=true;
  defaltImage: string = "http://via.placeholder.com/150x150";
  imageData: any = {};
  @Output() favoriteClicked = new EventEmitter<any>();
  @Output() followClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    const uid=firebase.auth().currentUser.uid;
    firebase.database().ref('images').child(this.imageName)
      .once('value')
      .then(snapshot => {
        this.imageData = snapshot.val();
        this.defaltImage = this.imageData.fileUrl;
        if(this.imageData.uploadedBy.uid===uid){
          this.displayFavoritesButton=false;
          this.displayFollowButton=false;
        }
      });
  }
  onFavoritesClicked(){
    this.favoriteClicked.emit(this.imageData);
  }
  onFollowClicked(){
    this.followClicked.emit(this.imageData);
  }

}
