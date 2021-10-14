import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5 INF B 2021/22';
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
}
