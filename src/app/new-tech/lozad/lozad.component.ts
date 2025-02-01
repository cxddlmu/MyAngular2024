import { Component, OnInit } from "@angular/core";
import lozad from "lozad";
@Component({
  selector: "app-lozad",
  templateUrl: "./lozad.component.html",
  standalone: true,
  styleUrls: ["./lozad.component.css"]
})
export class LozadComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //  const el = document.querySelector("img");
    // const observer = lozad('.lozad', {
    //   load: function(el: { src: any; getAttribute: (arg0: string) => string; onload: () => void; localName: string; }) {
    //         el.src = el.getAttribute("data-src");
    //         el.onload = function() {
    //             console.log((el.localName.toUpperCase() + " " + el.getAttribute("data-index") + " lazy loaded."))
    //         }
    //     }
    // });
    // observer.observe();

  }

  ngAfterViewInit(){

  }
}
