import { Component, OnInit } from '@angular/core';
import * as superdiff  from '@donedeal0/superdiff';
import {equal} from 'node:assert';
import {JsonPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-superdiff',
  templateUrl: './superdiff.component.html',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf
  ],
  styleUrls: ['./superdiff.component.scss']
})
export class SuperdiffComponent implements OnInit {
  obj1: any;
  obj2: any;
  diff: any;

  ngOnInit() {
    // Create two complex objects with nested properties and arrays
    this.obj1 = {
      name: 'John Doe',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      },
      hobbies: ['reading', 'coding', 'gaming'],
      friends: [
        { name: 'Jane Doe', age: 28 },
        { name: 'Bob Smith', age: 32 }
      ]
    };

    this.obj2 = {
      name: 'John Doe',
      age: 31, // Changed age
      address: {
        street: '456 Elm St', // Changed street
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
      },
      hobbies: ['reading', 'coding', 'swimming'], // Changed hobby
      friends: [
        { name: 'Jane Doe', age: 28 },
        { name: 'Alice Johnson', age: 30 } // Added a new friend
      ]
    };

    // Use superdiff to compare the two objects
    this.diff = superdiff.getObjectDiff(this.obj1, this.obj2);
    console.log(this.diff);
  }
}
