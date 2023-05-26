import { SuperDialogStyleInterface } from './super-dialog-style.interface';
import { SuperDialogAnimationInterface } from './super-dialog-animation.interface';

export interface SuperDialogInterface {
  component?: any;
  modalConfigurations?: SuperDialogStyleInterface;
  animations?: SuperDialogAnimationInterface;
  data?: any;
}
