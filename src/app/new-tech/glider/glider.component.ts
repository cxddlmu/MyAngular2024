import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glider',
  templateUrl: './glider.component.html',
  standalone: true,
  styleUrls: ['../../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css', './glider.component.css']
})
export class GliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    // var glide = new Glide('#intro', {
    //   type: 'carousel',
    //   perView: 4,
    //   focusAt: 'center',
    //   breakpoints: {
    //     800: {
    //       perView: 2
    //     },
    //     480: {
    //       perView: 1
    //     }
    //   }
    // })

    // glide.mount()

  }
}
