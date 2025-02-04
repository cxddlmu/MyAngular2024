import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor(private http: HttpClient) {

  }
  protected person: any;
  protected name:any;

  protected reset(): void {
    this.person = {
      name: {
        forename: 'John',
        surname: 'Doe'
      },
      address: {
        street: 'Lexington Avenue',
        city: 'New York',
        country: 'USA'
      }
    }
  }
  ngStyleVal: { backgroundColor: string; } | undefined;
  ngClassVal: string | undefined;
  ngClassVal_1: any;
  backgroundSwitcher = true;
  ngClassA = 'backgroundColorYellow'
  ngClassB = 'backgroundColorGrey'
  ngClassArr: any[] = [this.ngClassB];
  tmp={};
  ngOnInit() {
    this.reset();
    this.ngStyleVal = { backgroundColor: "red" }
    // this.ngClassVal = { 'backgroundColorGrey': this.backgroundSwitcher, 'backgroundColorYellow': !this.backgroundSwitcher }
    this.ngClassVal = this.backgroundSwitcher ? 'backgroundColorGrey' : 'backgroundColorYellow'
    let c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
    // let res = this.http.get("http://10.187.7.212:3000").subscribe(x => {
    //   console.log(x);
    // }, y => {
    //   console.log(y);
    // });
    // this.tmp.a=()=>{this.buttonClick();}

  }
  buttonClick() {
    this.backgroundSwitcher = !this.backgroundSwitcher;
    if (this.backgroundSwitcher) {
      this.ngClassArr.splice(1, 1, this.ngClassB);
      this.ngClassVal = 'backgroundColorGrey'
    } else {
      this.ngClassVal = 'backgroundColorYellow'
      this.ngClassArr.splice(1, 1, this.ngClassA);
    }
  }


}
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void; //没有返回值的函数
}
function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}
