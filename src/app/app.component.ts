import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  result=''
  onPress() {
    this.result='false'
  }
  onPressd() {
    this.result='true'
  }
  onPressh() {
    // this.result='false'
    
  }
  onPressk() {
    this.result='false'
  }
}
