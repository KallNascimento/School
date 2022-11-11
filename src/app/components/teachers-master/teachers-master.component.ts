import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ksn-teachers-master',
  templateUrl: './teachers-master.component.html',
  styleUrls: ['./teachers-master.component.css']
})
export class TeachersMasterComponent implements OnInit {
  title = 'Professores';
  public teachers = [
    {name: 'Caneta Azul'},
    {name: 'Kauê'},
    {name: 'Denise'},
    {name: 'Jadmila'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
