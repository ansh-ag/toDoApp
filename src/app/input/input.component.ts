import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

@Output() newTodo = new EventEmitter()

  constructor() { 
    
}

  ngOnInit(): void {
  }

  addNew(value : string){
    if(value.length > 0){
      let myToDo = {
        "text" : value,
        "isCompleted" : false,
        "editable" : false,
      }

      this.newTodo.emit(myToDo);
      // localStorage.setItem('cacheList', JSON.stringify(this.myToDoList));
    }
  }

  
}
