import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuperDialogService } from '../../services/super-dialog.service';
import { SuperDialogComponent } from '../../components/super-dialog/super-dialog.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SuperDialogComponent],
  exports: [SuperDialogComponent],
  providers: [SuperDialogService],
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class SuperDialogModule {}
