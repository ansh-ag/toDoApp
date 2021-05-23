import { Component, Input } from '@angular/core';
import {ServiceInputService} from 'src/app/service-input.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  
  constructor(public inputService:ServiceInputService){
    const myList = JSON.parse(localStorage.getItem('cacheList'));
  

    if(myList !== null) {
    this.inputService.myToDoList = myList;
      }
  
  }

  done(index:number){
    this.inputService.myToDoList[index].isCompleted = true; 
    localStorage.setItem('cacheList', JSON.stringify(this.inputService.myToDoList));
     
   }

  newDodo(newInputData){
     this.inputService.myToDoList.push(newInputData);
     localStorage.setItem('cacheList', JSON.stringify(this.inputService.myToDoList));

   }
  

   remove(i){
     this.inputService.myToDoList.splice(i, 1);
     localStorage.setItem('cacheList', JSON.stringify(this.inputService.myToDoList));


   }
   edit(obj){
    // this.list[i].text = valS;
    // this.list[i].editable = false;
    this.inputService.myToDoList[obj.index].text = obj.value;
    this.inputService.myToDoList[obj.index].editable = false;
    localStorage.setItem('cacheList', JSON.stringify(this.inputService.myToDoList));


   }



}
