import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conceito';
  navItems = [
    { link: '/dashboard', title: 'Painel',icon:'heroHome' },
    { link: '/students', title: 'Alunos',icon:'heroAcademicCap' },
    { link: '/teachers', title: 'Professores',icon:'heroUserGroup' },
    { link: '/profile', title: 'Perfil',icon:'heroUserCircle' },
  ]
}
