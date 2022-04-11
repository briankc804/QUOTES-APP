import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prevote',
  templateUrl: './prevote.component.html',
  styleUrls: ['./prevote.component.css']
})
export class PrevoteComponent implements OnInit {
  
  @Input () prevote: string | undefined;
  numberOfLikes: number = 0;
  upvoteButtonClick(){
    this.numberOfLikes+=1;
  }
  downvoteButtonClick(){
    this.numberOfLikes-=1;
  }

  constructor() { }

  ngOnInit() {
  }

}
