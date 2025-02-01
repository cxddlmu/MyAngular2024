import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-sortableJS',
  templateUrl: './sortableJS.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  // styleUrls: ['./sortableJS.component.css']
})
export class SortableJSComponent implements OnInit {

  options: {
    handle: string;
    filter: string;
    onUpdate: (event: any) => void;
    setData: (dataTransfer: any, dragEl: any) => void;
  } | undefined;
  constructor() { }

  items = [1, 2, 3, 4, 5];
  ngOnInit() {
    from(this.items).subscribe(() => {
      console.log(this.items);
    });
    this.options = { handle: '.handle', filter: '.filtered',onUpdate: (event: any) => {
      //  console.log(event);
    },setData:(/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl)=>{
      console.log(dragEl);
      console.log(dataTransfer);
    } }
  }

}
