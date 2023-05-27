import { PerfectDialogStyleInterface } from './perfect-dialog-style.interface';
import { PerfectDialogAnimationInterface } from './perfect-dialog-animation.interface';

export interface PerfectDialogInterface {
  component?: any;
  modalConfigurations?: PerfectDialogStyleInterface;
  animations?: PerfectDialogAnimationInterface;
  data?: any;
}
