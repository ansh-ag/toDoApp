import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myToDoList = [];

  constructor(){
    const myList = JSON.parse(localStorage.getItem('cacheList'));

    if(myList !== null){
      this.myToDoList = myList;
    }

  }

  addNew(value : string){
    if(value.length > 0){
    let myToDo = {
      "text" : value,
      "isCompleted" : false
    }

    this.myToDoList.push(myToDo);

    localStorage.setItem('cacheList', JSON.stringify(this.myToDoList));
  }
  }

  done(index:number){
   this.myToDoList[index].isCompleted = true; 
   localStorage.setItem('cacheList', JSON.stringify(this.myToDoList));

  }
  

  remove(index:number){
    this.myToDoList.splice(index,1);  
    localStorage.setItem('cacheList', JSON.stringify(this.myToDoList));

  }


}
