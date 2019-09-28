import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForm';


  topics= ['Angular', 'React',' Vue'];

  userModel  = new User('EX:janadari','janadari1995@gmail.com',41417,'','morning',true);
}
