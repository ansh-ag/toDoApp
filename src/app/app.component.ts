import { Component } from '@angular/core';



class ToDo {
  
  text :string = "";
  isCompleted : boolean = false;
  
  
  constructor(value:string){
    this.text = value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myToDoList: ToDo[] = [];

  constructor(){
    const myList = JSON.parse(localStorage.getItem('cacheList'));

    if(myList !== null){
      this.myToDoList = myList;
    }

  }

  addNew(value : string){

    let todo = new ToDo(value);

    this.myToDoList.push(todo);

    this.syncWithCache()  
  }

  done(index:number){

   this.myToDoList[index].isCompleted = true; 
   this.syncWithCache()
  }
  

  remove(index:number){
    this.myToDoList.splice(index,1);  
    this.syncWithCache()
  }


  syncWithCache(){
    localStorage.setItem('cacheList', JSON.stringify(this.myToDoList));

  }


}
