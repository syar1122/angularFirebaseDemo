import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-demo';

  courses: Observable<any[]>;

  constructor(private db: AngularFireDatabase){

   this.courses = this.db.list('/courses').valueChanges();
      console.log(this.courses);
    

    
  }

}
