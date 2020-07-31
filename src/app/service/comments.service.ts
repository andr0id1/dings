import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../model/Comment';

// @ts-ignore
@Injectable()
export class CommentsService {
  constructor(private http: HttpClient) { }

  getComment(id: number) {
    return this.http.get('http://localhost:3000/comments/' + id) as Observable<Comment> ;
  }
}
