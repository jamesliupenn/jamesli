import { Component, OnInit } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// Everything pie chart
  public pieChartType:string = 'pie';
  public frontEndLabels:string[] = ['Angular 2/4', 'HTML', 'CSS', 'TypeScript', 'UI/UX'];
  public frontEndData:number[] = [200, 75, 65, 85, 70];
  public frontEndLineLabels:Array<any> = ['Proficiency', 'Preference'];
  public frontEndlineData:Array<any> = [
    [90, 70, 55, 80, 60],
    [100, 70, 50, 60, 70]
  ];
  public backEndLabels:string[] = ['Node.js', 'Express', 'NoSQL', 'RDBMS', 'Python'];
  public backEndData:number[] = [200, 100, 200, 100, 50];
 

// Setting up variables for the bar chart
  public barChartType:string = 'bar';
  public barData:number[] = [2, 2, 3, 2, 3];
  public barLabel:string[] = ['HTML', 'CSS', 'Angular 2/4', 'UX Design', 'etc'];
  public barChartColors:Array<any> = [{
    backgroundColor: 'rgba(150, 150, 240, 0.3)'
  }];
  public barOptions:any = {
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }

  public randomizeType():void {
    // this.pieChartType = this.pieChartType === 'line' ? 'pie' : 'line';
    // this.data = this.data === this.frontEndlineData? this.frontEndData : this.frontEndlineData;
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



}



