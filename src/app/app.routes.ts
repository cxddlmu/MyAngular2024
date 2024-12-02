import { Routes } from '@angular/router';
import { ImageUtilComponent } from './image-util/image-util.component';
import { PhotoViewerComponent } from './image-util/photo-viewer/photo-viewer.component';
import { AnimateComponent } from './image-util/animate/animate.component';

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
];
