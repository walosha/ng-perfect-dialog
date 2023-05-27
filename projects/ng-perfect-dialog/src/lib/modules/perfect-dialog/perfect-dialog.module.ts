import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectDialogComponent } from '../../components/perfect-dialog/perfect-dialog.component';
import { PerfectDialogService } from '../../services/perfect-dialog.service';
@NgModule({
  declarations: [PerfectDialogComponent],
  exports: [PerfectDialogComponent],
  providers: [PerfectDialogService],
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class PerfectDialogModule {}
