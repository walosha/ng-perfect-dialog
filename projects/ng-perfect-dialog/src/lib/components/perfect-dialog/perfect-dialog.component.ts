import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PerfectDialogAnimationStylesEnum } from '../../enums/perfect-dialog-animation-styles.enum.enum';
import { NavigationEnd, Router } from '@angular/router';
import { PerfectDialogAnimationInterface } from '../../interfaces/perfect-dialog-animation.interface';
import { PerfectDialogStyleInterface } from '../../interfaces/perfect-dialog-style.interface';
import { PerfectDialogService } from '../../services/perfect-dialog.service';
@Component({
  selector: 'perfect-dialog',
  templateUrl: './perfect-dialog.component.html',
  styleUrls: ['./perfect-dialog.component.scss'],
})
export class PerfectDialogComponent
  implements
    AfterViewInit,
    PerfectDialogAnimationInterface,
    PerfectDialogStyleInterface
{
  left: any;
  top: any;
  right: any;
  bottom: any;
  maxHeight: any;
  maxWidth: any;
  minWidth: any;
  width: any;
  height: any;
  minHeight: any;
  overFlowX: any;
  overFlowY: any;
  overFlow: any;
  entryAnimationName: any;
  animationDuration: any;
  exitAnimationName: any;
  dismissInXSeconds: any;
  disableClose: any;
  showCloseButton: any;
  activeModal = false;
  innerMargin: any;
  outerMargin: any;
  componentReference: any;
  timer: any;
  closeOnNavigation: any;
  @ViewChild('modalPalace', { static: true, read: ViewContainerRef })
  modalPalace!: ViewContainerRef;

  constructor(
    private PerfectDialogService: PerfectDialogService,
    private renderer2: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd && this.closeOnNavigation) {
        this.closeModal();
      }
    });
    this.PerfectDialogService.$open.subscribe((response) => {
      this.syncUserDefinedStyleSheet(response.modalConfigurations);
      this.syncUserDefinedAnimations(response.animations);
      const componentFactory_ =
        this.componentFactoryResolver.resolveComponentFactory(
          response.component
        );
      this.modalPalace.clear();
      this.componentReference =
        this.modalPalace.createComponent(componentFactory_);
      for (let key in response.data) {
        if (
          response.data.hasOwnProperty(key) &&
          this.componentReference.instance.hasOwnProperty(key)
        ) {
          this.componentReference.instance[key] = response.data[key];
        }
      }
      if (this.componentReference) {
        this.PerfectDialogService.$afterOpened.next(true);
      } else {
        this.PerfectDialogService.$afterOpened.next(true);
      }
    });
    this.PerfectDialogService.$displayModalInDom.subscribe((res) => {
      this.activeModal = res;
      console.log({ displayModalInDom: this.activeModal });
    });
    this.PerfectDialogService.$close.subscribe((response) => {
      if (response === true) {
        this.closeModal();
      }
    });
    this.PerfectDialogService.$close.subscribe((response) => {
      if (response === true) {
        this.closeModal();
      }
    });
  }
  syncUserDefinedStyleSheet(configurations: PerfectDialogStyleInterface | any) {
    if (!configurations) return;
    this.top = configurations.top ? configurations.top : 0;
    this.left = configurations.left ? configurations.left : 0;
    this.right = configurations.right ? configurations.right : 0;
    this.bottom = configurations.bottom ? configurations.bottom : 0;
    this.maxHeight = configurations.maxHeight
      ? configurations.maxHeight
      : '90vh';
    this.maxWidth = configurations.maxWidth ? configurations.maxWidth : '90vw';
    this.innerMargin = configurations.innerMargin
      ? configurations.innerMargin
      : 'initial';
    this.outerMargin = configurations.outerMargin
      ? configurations.outerMargin
      : 'initial';
    this.height = configurations.height ? configurations.height : 'initial';
    this.width = configurations.width ? configurations.width : 'initial';
    this.minHeight = configurations.minHeight
      ? configurations.minHeight
      : '0vh';
    this.minWidth = configurations.minWidth ? configurations.minWidth : '0vw';
    this.overFlowX = configurations.overFlowX
      ? configurations.overFlowX
      : 'hidden';
    this.overFlowY = configurations.overFlowY
      ? configurations.overFlowY
      : 'hidden';
    this.overFlow = configurations.overFlow
      ? configurations.overFlow
      : 'hidden';
    this.disableClose = configurations.disableClose
      ? configurations.disableClose
      : false;
    this.showCloseButton = configurations.showCloseButton
      ? configurations.showCloseButton
      : false;
    this.closeOnNavigation = !configurations.closeOnNavigation
      ? configurations.closeOnNavigation
      : true;
  }
  syncUserDefinedAnimations(animation: PerfectDialogAnimationInterface | any) {
    this.entryAnimationName = animation.entryAnimationName
      ? animation.entryAnimationName
      : PerfectDialogAnimationStylesEnum.zoomIn;
    this.animationDuration = animation.animationDuration
      ? animation.animationDuration
      : '1s';
    this.exitAnimationName = animation.exitAnimationName
      ? animation.exitAnimationName
      : PerfectDialogAnimationStylesEnum.zoomOut;
    this.dismissInXSeconds = animation.dismissInXSeconds
      ? animation.dismissInXSeconds
      : null;
    if (this.dismissInXSeconds !== null) {
      this.timer = setTimeout(() => this.closeModal(), this.dismissInXSeconds);
    }
  }
  triggerClose() {
    this.timer = setTimeout(() => {
      this.closeModal();
    }, 300);
  }
  get isAbsolute(): boolean {
    return !!(this.left || this.right || this.bottom || this.top);
  }
  closeModal() {
    if (this.timer) clearTimeout(this.timer);
    this.modalPalace.clear();
    this.PerfectDialogService.$afterClosed.next(true);
    this.PerfectDialogService.$displayModalInDom.next(false);
  }
}
