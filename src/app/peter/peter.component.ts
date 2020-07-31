import {Component, OnInit} from '@angular/core';
import {CommentsService} from '../service/comments.service';
import {Comment} from '../model/Comment';

@Component({
  selector: 'app-peter',
  templateUrl: './peter.component.html',
  styleUrls: ['./peter.component.css']
})
export class PeterComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }

  counter = 0;
  comment: Comment;

  ngOnInit(): void {
    const hallo = this.commentsService.getComment(2);
    hallo.subscribe((etwas: Comment) => this.comment = etwas);
  }



  dieFunktion(){
    this.counter = this.counter + 1;
    console.log('counter: ', this.counter);
  }

}
