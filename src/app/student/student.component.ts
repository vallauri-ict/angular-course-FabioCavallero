import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input()student:any; //Variabile ricevuta in input e inizializzata dall'appComponent.html
@Output()studentDeleteEvent= new EventEmitter<any>(); //Richedo all'appComponent.ts di eseguire questa funzione presente al suo interno
  constructor() {}
  ngOnInit(): void {
    this.randomStudentPro();
  }
  onStudentClick(){
    this.student.isPro=!this.student.isPro;
  }
  private randomStudentPro(){
    let num=Math.floor(Math.random()*2);
    this.student.isPro=(num==1);
  }
  onDeleteStudent()
  {
    this.studentDeleteEvent.emit(this.student);
  }
}