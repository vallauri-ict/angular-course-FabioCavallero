import { Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("txtName") txtName !: ElementRef;
  //new elementRef(null);
  title = '5 INF B 2021/22';
  studentRepository=[
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
  hobbies=['Yoga','IQOS','Volley','Calcio','Atletica','Sesso'];
  studentList:any[]=[];
  studentName:string="";
  studentGender:string="F";
  studentHobby:string="";
  constructor(){
    for (let i = 0; i < 4; i++) {
      let num=Math.floor(Math.random()*this.studentRepository.length);
      let tempStudent:any=this.studentRepository[num];
      this.studentList.push(tempStudent);
      this.studentRepository.splice(num,1);
    }
  }
  onAddStudent()
  {
    let newStudent:any={name:this.studentName,hobby:this.studentHobby,gender:this.studentGender,isPro:false};
    this.studentList.push(newStudent);
    this.studentName="";
    this.txtName.nativeElement.focus();
  }
  onDeleteStudent(index:number)
  {
    this.studentList.splice(index,1);
  }
  onStudentDeleteEvent(student:any)
  {
    this.studentList.splice(this.studentList.indexOf(student),1);
  }
}