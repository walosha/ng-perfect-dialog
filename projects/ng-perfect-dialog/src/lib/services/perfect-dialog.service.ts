import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PerfectDialogInterface } from '../interfaces/perfect-dialog.interface';

@Injectable({
  providedIn: 'root',
})
export class PerfectDialogService {
  $close = new Subject();
  $open = new Subject<PerfectDialogInterface>();
  $afterClosed = new Subject();
  $afterOpened = new Subject();
  $displayModalInDom = new Subject<boolean>();
  constructor() {}
  open<T>(obj: PerfectDialogInterface) {
    this.$displayModalInDom.next(true);
    this.$open.next({
      component: obj.component,
      modalConfigurations: obj.modalConfigurations
        ? obj.modalConfigurations
        : {},
      animations: obj.animations ? obj.animations : {},
      data: obj.data ? obj.data : {},
    });
  }
}
