import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   //It will display the list;
  @Input() list;
  @Output() complete = new EventEmitter()
  @Output() removeIn = new EventEmitter()
  @Output() editIn = new EventEmitter()  


  

  constructor() {}

  ngOnInit(): void {}

  // get myToDoList(){
  //   return this.inputService.myToDoList
  // }



  done(index:number){
    // this.inputService.myToDoList[index].isCompleted = true; 
    this.complete.emit(index);
     
   }
   
 
   remove(index:number){
    //  this.list.splice(index,1);  
    //  localStorage.setItem('cacheList', JSON.stringify(this.myToDoList));
    this.removeIn.emit(index);

   }
 
   save(valS, i){
    // this.list[i].text = valS;
    // this.list[i].editable = false;
    // localStorage.setItem('cacheList', JSON.stringify(this.myToDoList));
    const obj = {
      value: valS,
      index: i
      }
  
    this.editIn.emit(obj);
   }
 






}

 
