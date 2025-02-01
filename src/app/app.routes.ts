import { Routes } from '@angular/router';
import { ImageUtilComponent } from './image-util/image-util.component';
import { PhotoViewerComponent } from './image-util/photo-viewer/photo-viewer.component';
import {NewTechComponent} from './new-tech/new-tech.component';
import {IronDBComponent} from './new-tech/IronDB/IronDB.component';
import {RxjsComponent} from './new-tech/rxjs/rxjs.component';
import {StringSimilarityComponent} from './new-tech/string-similarity/string-similarity.component';
import {MagicGridComponent} from './new-tech/magic-grid/magic-grid.component';
import {JsPDFComponent} from './new-tech/jsPDF/jsPDF.component';
import {SortableJSComponent} from './new-tech/sortableJS/sortableJS.component';
import {GliderComponent} from './new-tech/glider/glider.component';
import {HotkeysComponent} from './new-tech/hotkeys/hotkeys.component';
import {AnimejsComponent} from './new-tech/animejs/animejs.component';
import {AlasqlComponent} from './new-tech/alasql/alasql.component';
import {UppyComponent} from './new-tech/uppy/uppy.component';
import {NgrxStoreComponent} from './new-tech/ngrxStore/ngrxStore.component';
import {LodashComponent} from './new-tech/lodash/lodash.component';
import {FuseComponent} from './new-tech/fuse/fuse.component';
import {DayjsComponent} from './new-tech/dayjs/dayjs.component';
import {RythmComponent} from './new-tech/rythm/rythm.component';
import {CssComponent} from './new-tech/css/css.component';
import {SimplebarComponent} from './new-tech/Simplebar/simplebar.component';
import {LozadComponent} from './new-tech/lozad/lozad.component';
import {ViewComponent} from './new-tech/view/view.component';
import {TesseractComponent} from './new-tech/tesseract/tesseract.component';
import {FileSaverComponent} from './new-tech/file-saver/file-saver.component';
import {PhotoviewerComponent} from './new-tech/photoviewer/photoviewer.component';
import {EditorJSComponent} from './new-tech/editor-js/editor-js.component';
import {CleavejsComponent} from './new-tech/cleavejs/cleavejs.component';
import {CssDoodleComponent} from './new-tech/css-doodle/css-doodle.component';
import {HandyScrollComponent} from './new-tech/handy-scroll/handy-scroll.component';
import {FroalaEditorComponent} from './new-tech/froala-editor/froala-editor.component';
import {AgGridComponent} from './new-tech/ag-grid/ag-grid.component';
import {LitHtmlComponent} from './new-tech/lit-html/lit-html.component';
import {ChangeDetectionComponent} from './new-tech/changeDetection/changeDetection.component';
import {AngularCoreModule} from './angular-core/angular-core.module';
import {AnimateComponent} from './image-util/animate/animate.component';
import {SuperdiffComponent} from './new-tech/superdiff/superdiff.component';

export const routes: Routes = [

    {
        path: 'imageUtil',
        component: ImageUtilComponent, // this is the component with the <router-outlet> in the template
        children: [
          {
            path: 'photoViewer', // child route path
            component: PhotoViewerComponent, // child route component that the router renders
          },
          {
            path: 'animate', // child route path
            component: AnimateComponent, // child route component that the router renders
          },
        ],
      },
  {
    path: 'new-tech',
    component: NewTechComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'AnimejsComponent', // child route path
        component: AnimejsComponent, // child route component that the router renders
      },
      {
        path: 'SuperdiffComponent', // child route path
        component: SuperdiffComponent, // child route component that the router renders
      },
      { path: "ironDB", component: IronDBComponent },
      { path: "rxjs", component: RxjsComponent },
      { path: "stringSimilarity", component: StringSimilarityComponent },
      { path: "magicGrid", component: MagicGridComponent },
      { path: "jsPDF", component: JsPDFComponent },
      { path: "sortableJS", component: SortableJSComponent },
      { path: "glider", component: GliderComponent },
      { path: "hotkeys", component: HotkeysComponent },
      { path: "animejs", component: AnimejsComponent },
      { path: "alasql", component: AlasqlComponent },
      { path: "uppy", component: UppyComponent },
      { path: "ngrxstore", component: NgrxStoreComponent },
      { path: "lodash", component: LodashComponent },
      { path: "fuse", component: FuseComponent },
      { path: "dayjs", component: DayjsComponent },
      { path: "rythm", component: RythmComponent },
      { path: "css", component: CssComponent },

      { path: 'changeDetection', component: ChangeDetectionComponent },
      { path: 'viewComponent', component: ViewComponent },
      { path: 'tesseract', component: TesseractComponent },
      { path: 'filesaver', component: FileSaverComponent },
      { path: 'simplebar', component: SimplebarComponent },
      { path: 'lozad', component: LozadComponent },
      { path: 'photoviewer', component: PhotoviewerComponent },
      { path: 'editorJS', component: EditorJSComponent },
      { path: 'cleavejs', component: CleavejsComponent },
      { path: 'cssDoodle', component: CssDoodleComponent },
      { path: 'handyScroll', component: HandyScrollComponent },
      { path: 'froalaEditor', component: FroalaEditorComponent },
      { path: 'agGrid', component: AgGridComponent },
      { path: 'fuse', component: FuseComponent },
      { path: 'litHtml', component: LitHtmlComponent },

    ]
  },
  {
    path: "angular-core",
    // canActivate: [ContentGuard],
    loadChildren:()=>AngularCoreModule,
    data: {}
  },
];
