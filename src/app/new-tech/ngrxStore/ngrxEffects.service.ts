import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { EMPTY, Observable, of } from 'rxjs';
import { NgrxStoreService } from './ngrxStore.service';
import { DECREMENT, INCREMENT, INCREMENTX, ActionTypes } from './ngrxStore.component';
import { Action } from '@ngrx/store';
@Injectable()
export class NgrxEffectsService {

    // @Effect()
    // loadMovies$ = this.actions$
    //     .pipe(
    //         ofType(INCREMENT),
    //         mergeMap(() => this.ngrxStoreService.getRandomNumber()
    //             .pipe(
    //                 map(val => ({ type: INCREMENTX, payload: val })),
    //                 catchError(() => EMPTY)
    //             ))
    //     );
    //
    // @Effect()
    // // handle location update
    // locationUpdate$: Observable<Action> = this.actions$.pipe(
    //     ofType('ROUTER_NAVIGATION'),
    //     switchMap((action: any) => {
    //         // const rS = action.payload.routerState
    //         // const searchParams = rS.root.firstChild.params
    //         const searchParams = action.payload.routerState.params
    //         console.log(searchParams);
    //         return EMPTY
    //     }));

    // @Effect()
    // selectDemo$ = this.actions$
    //     .pipe(
    //         ofType(ActionTypes.SelectDemo),
    //         switchMap((action: any) => {
    //             return action;
    //         }));

    constructor(
        private actions$: Actions,
        private ngrxStoreService: NgrxStoreService
    ) { }
}
function Effect(): (target: NgrxEffectsService, propertyKey: "loadMovies$") => void {
    throw new Error('Function not implemented.');
}

