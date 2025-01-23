import { Component } from '@angular/core';
import { Estudiantes } from '../../models';

@Component({
  selector: 'app-students',
  standalone: false,
  
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  estudiantes: Estudiantes[] = [
    {
      id: 1,
      nombre: "Marcos",
      apellido: "Perez",
      mail: "marcosperez@gmail.com"
    },
    {
      id: 2,
      nombre: "Juan",
      apellido: "Perez",
      mail: "juanperez@gmail.com"
    },
    {
      id: 3,
      nombre: "Eusebio",
      apellido: "Junior",
      mail: "eusebiojunior@gmail.com"
    }
  ]
}
