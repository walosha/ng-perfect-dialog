import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SuperDialogService } from '../../services/super-dialog.service';
import { SuperDialogStyleInterface } from '../../interfaces/super-dialog-style.interface';
import { SuperDialogAnimationInterface } from '../../interfaces/super-dialog-animation.interface';
import { SuperDialogAnimationStylesEnum } from '../../enums/super-dialog-animation-styles.enum.enum';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'super-dialog',
  templateUrl: './super-dialog.component.html',
  styleUrls: ['./super-dialog.component.scss'],
})
export class SuperDialogComponent
  implements
    AfterViewInit,
    SuperDialogAnimationInterface,
    SuperDialogStyleInterface
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
    private superDialogService: SuperDialogService,
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
    this.superDialogService.$open.subscribe((response) => {
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
        this.superDialogService.$afterOpened.next(true);
      } else {
        this.superDialogService.$afterOpened.next(true);
      }
    });
    this.superDialogService.$displayModalInDom.subscribe((res) => {
      this.activeModal = res;
    });
    this.superDialogService.$close.subscribe((response) => {
      if (response === true) {
        this.closeModal();
      }
    });
    this.superDialogService.$close.subscribe((response) => {
      if (response === true) {
        this.closeModal();
      }
    });
  }
  syncUserDefinedStyleSheet(configurations: SuperDialogStyleInterface | any) {
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
  syncUserDefinedAnimations(animation: SuperDialogAnimationInterface | any) {
    this.entryAnimationName = animation.entryAnimationName
      ? animation.entryAnimationName
      : SuperDialogAnimationStylesEnum.zoomIn;
    this.animationDuration = animation.animationDuration
      ? animation.animationDuration
      : '1s';
    this.exitAnimationName = animation.exitAnimationName
      ? animation.exitAnimationName
      : SuperDialogAnimationStylesEnum.zoomOut;
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
    this.superDialogService.$afterClosed.next(true);
    this.superDialogService.$displayModalInDom.next(false);
  }
}
