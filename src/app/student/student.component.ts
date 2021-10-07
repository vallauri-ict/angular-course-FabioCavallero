import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList=[
    {name:'GianRenato Marchisio', hobby: 'Yoga', gender:'M'},
    {name:'Andrea Vergano', hobby: 'IQOS', gender:'M'},
    {name:'Alice Barenghi', hobby: 'Volley', gender:'F'},
    {name:'Relo SulRello', hobby: 'Atletica', gender:'M'},
    {name:'Zeta Kappa', hobby: 'Calcio', gender:'M'},
    {name:'Benedetta Parodi', hobby: 'Volley', gender:'F'},
    {name:'GianLearco Lombardi', hobby: 'Yoga', gender:'M'},
    {name:'GianRoberto Mecaj', hobby: 'Calcio', gender:'M'},
    {name:'Panero Fabio', hobby: 'IQOS', gender:'M'},
    {name:'Dedde Vaschetto', hobby: 'Calcio', gender:'M'},
    {name:'Marco Gillone', hobby: 'Atletica', gender:'M'},
    {name:'Margot Conlat', hobby: 'Volley', gender:'F'}
  ]
  student:any;
  constructor() { 
    let num=Math.floor(Math.random()*this.studentList.length);
    this.student=this.studentList[num];
  }
  ngOnInit(): void {}
}