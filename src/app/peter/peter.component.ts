import {Component, OnInit} from '@angular/core';
import {CommentsService} from '../service/comments.service';
import {Comment} from '../model/Comment';
import { OrderService } from 'src/generated/api/order.service';
import { ModelOrder } from 'src/generated/model/modelOrder';

@Component({
  selector: 'app-peter',
  templateUrl: './peter.component.html',
  styleUrls: ['./peter.component.css']
})
export class PeterComponent implements OnInit {
  private orders: ModelOrder;

  constructor(private commentsService: CommentsService,
              private orderService: OrderService) { }

  counter = 0;
  comment: Comment;

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
    const hallo = this.commentsService.getComment(2);
    hallo.subscribe((etwas: Comment) => this.comment = etwas);
  }



  dieFunktion(){
    this.counter = this.counter + 1;
    console.log('counter: ', this.counter);
  }

}
