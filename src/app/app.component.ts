import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'data-binding-app';

  counter:number=0;

  onClick(){
    this.counter++;
  }

  hide:boolean = true;
  onDouble(){
    if(this.hide == true){
      this.hide = false;
    }
    else {
      this.hide = true;
    }
  }



}
