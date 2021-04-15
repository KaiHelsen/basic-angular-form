import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Friend} from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = 'http://localhost:9085/';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  addFriend(newFriend: Friend) {
    this.http.post(this.url  + 'addFriend', newFriend).subscribe(
      (response) => console.log(response),
      (error) => console.log(error));

    return this.http.post(this.url, newFriend);
  }
}
