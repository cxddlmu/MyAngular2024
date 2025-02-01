import { Component, OnInit } from "@angular/core";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
@Component({
  selector: "app-editor-js",
  templateUrl: "./editor-js.component.html",
  standalone: true,
  styleUrls: ["./editor-js.component.css"]
})
export class EditorJSComponent implements OnInit {
  constructor() {}
  editor!: EditorJS;
  ngOnInit() {
    this.editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */

      holderId: "editorjs",

      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */

      tools: {
        header: Header,
        list: List
      }
    });
  }

  save() {
    this.editor.save().then((savedData: any) => {
      console.log(savedData);
    });
  }
}
