import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './pipe/custom.pipe';
import { SharedComponent } from './shared.component';
import { RepeatPipe } from './pipe/repeat.pipe';
//Angular Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SafePipe } from './pipe/safePipe.pipe';
import { InterceptorComponent } from './interceptor/interceptor.component';
import { ErrorHandlerComponent } from './errorHandler/errorHandler.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { NgrxEffectsService } from '../new-tech/ngrxStore/ngrxEffects.service';
import { EffectsModule } from '@ngrx/effects';
import { NgrxStoreService } from '../new-tech/ngrxStore/ngrxStore.service';
import { CustomSerializer } from '../new-tech/ngrxStore/router-state.serializer';
@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([NgrxEffectsService]),
    StoreRouterConnectingModule,
  ],
  exports: [CustomPipe, RepeatPipe, SafePipe,

  ],
  declarations: [CustomPipe, SharedComponent, RepeatPipe, SafePipe,
    InterceptorComponent,
    ErrorHandlerComponent
  ],
  providers: [NgrxStoreService, { provide: RouterStateSerializer, useClass: CustomSerializer }]
})
export class SharedModule { }
