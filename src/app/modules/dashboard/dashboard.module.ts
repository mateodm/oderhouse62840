import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsModule } from './pages/students/students.module';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [DashboardComponent, ToolbarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    StudentsModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}