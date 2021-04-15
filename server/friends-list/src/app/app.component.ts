import { Component } from '@angular/core';
import { AddFriendService } from './add-friend.service';
import { Friend } from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages: string[] = ['html', 'css', 'js', 'c#', 'python', 'java', 'c++', 'c', 'perl', 'typescript', 'sql'];
 // @ts-ignore
  friend = new Friend('john', 'doe', 'jdoe@gmail.com', '0000000000', this.languages[0]);

  constructor(private addFriendService: AddFriendService){
  }

  AddFriend(newFriend: Friend): void {
    // @ts-ignore
    console.log(newFriend);
    this.addFriendService.addFriend(newFriend);
  }
}
