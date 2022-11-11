import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ksn-students-master',
  templateUrl: './students-master.component.html',
  styleUrls: ['./students-master.component.css']
})
export class StudentsMasterComponent implements OnInit {
  title = "Alunos"
  public students =
    [
      { name: 'Marta' },
      { name: 'Paula' },
      { name: 'José' },
      { name: 'Sandro' },
      { name: 'Marcos' },
      { name: 'Sérgio' },
      { name: 'Nilva' },
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
