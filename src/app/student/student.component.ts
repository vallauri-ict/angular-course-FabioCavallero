import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList=[
    {name:'GianRenato Marchisio', hobby: 'Yoga', gender:'M', isPro:true},
    {name:'Andrea Vergano', hobby: 'IQOS', gender:'M', isPro:true},
    {name:'Aaaaliscee Barenghi', hobby: 'Volley', gender:'F', isPro:false},
    {name:'Relo SulRello', hobby: 'Atletica', gender:'M', isPro:false},
    {name:'Zeta Kappa', hobby: 'Calcio', gender:'M', isPro:true},
    {name:'Benedetta Parodi', hobby: 'Volley', gender:'F', isPro:false},
    {name:'GianLearco Lombardi', hobby: 'Yoga', gender:'M', isPro:true},
    {name:'GianRoberto Mecaj', hobby: 'Calcio', gender:'M', isPro:true},
    {name:'Panero Fabio', hobby: 'IQOS', gender:'M', isPro:false},
    {name:'Dedde Vaschetto', hobby: 'Calcio', gender:'M', isPro:false},
    {name:'Marco Gillone', hobby: 'Atletica', gender:'M', isPro:false},
    {name:'Margot Conlat', hobby: 'Volley', gender:'F', isPro:false}
  ]
  student:any;
  constructor() { 
    this.randomStudent();
  }
  private randomStudent(){
    let num=Math.floor(Math.random()*this.studentList.length);
    this.student=this.studentList[num];
  }
  ngOnInit(): void {}
  onStudentClick(){
    this.randomStudent();
  }
}