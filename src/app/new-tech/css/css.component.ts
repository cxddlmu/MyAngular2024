import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  standalone: true,
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  ngAfterViewInit() {
    var popup = window.open('assets/childPage_postMessage.html', 'titleName');
    // popup.postMessage('Hello World!', '*');
    window.addEventListener('message', function (e) {
      console.log(e);
      console.log(e.data);
    }, false);
  }

}
