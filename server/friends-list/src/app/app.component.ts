import {Component} from '@angular/core';
import {Friend} from './friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages: string[] = ['html', 'css', 'js', 'c#', 'python', 'java', 'c++', 'c', 'perl', 'typescript', 'sql'];

 // @ts-ignore
  friend = new Friend('john', 'doe', 'jdoe@gmail.com', '0000000000', this.languages[0]);

  PostNewFriend(): void {
    console.log(Friend);
  }
}
