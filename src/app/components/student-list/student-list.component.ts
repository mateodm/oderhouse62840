import { Component, Input } from '@angular/core';
import { Estudiantes } from '../../models';

@Component({
  selector: 'app-student-list',
  standalone: false,
  
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  @Input({required: true}) estudiantes: Estudiantes[] = [];
}
