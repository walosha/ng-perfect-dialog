import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SuperDialogInterface } from '../interfaces/super-dialog.interface';

@Injectable({
  providedIn: 'root',
})
export class SuperDialogService {
  $close = new Subject();
  $open = new Subject<SuperDialogInterface>();
  $afterClosed = new Subject();
  $afterOpened = new Subject();
  $displayModalInDom = new Subject<boolean>();
  constructor() {}
  open<T>(obj: SuperDialogInterface) {
    this.$displayModalInDom.next(true);
    setTimeout(
      () =>
        this.$open.next({
          component: obj.component,
          modalConfigurations: obj.modalConfigurations
            ? obj.modalConfigurations
            : {},
          animations: obj.animations ? obj.animations : {},
          data: obj.data ? obj.data : {},
        }),
      300
    );
  }
}
