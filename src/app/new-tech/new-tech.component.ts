import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import {JsonPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-new-tech',
  templateUrl: './new-tech.component.html',
  standalone: true,
  imports: [
    RouterOutlet,CommonModule
  ],
  styleUrls: ['./new-tech.component.css']
})
export class NewTechComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
