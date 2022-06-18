import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '20px',
        opacity: 1,
      })),
      state('closed', style({
        height: '10px',
        opacity: 0.8,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-CC';
  isOpen = true;
  todoValue = '';
  list : Todo[] = [];

  ngOnInit(){
   
  }

  addItem(): void{
    if(this.todoValue){
      const newItem: Todo ={
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      }
      this.list.push(newItem);
    }
    this.todoValue = '';
  }

  deleteItem(id:number):void{
    this.isOpen = !this.isOpen;
    this.list = this.list.filter((item: Todo) => item.id !== id);
  }
}
