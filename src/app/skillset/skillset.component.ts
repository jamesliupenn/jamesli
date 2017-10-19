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

  public frontEndLabels:string[] = ['Angular 2/4', 'HTML', 'CSS', 'TypeScript', 'UI/UX'];
  public frontEndData:number[] = [200, 75, 65, 85, 70];
  
  public frontEndLineLabels:Array<any> = ['Proficiency', 'Preference'];
  public frontEndlineData:Array<any> = [
    [90, 70, 55, 80, 60],
    [100, 70, 50, 60, 70]
  ];

  public backEndLabels:string[] = ['Node.js', 'Express', 'NoSQL', 'RDBMS', 'Python'];
  public backEndData:number[] = [200, 100, 200, 100, 50];

  // public generalLabels:string[] = ['Technical Communications', 'JIRA', 'SCRUM', 'Agile Methodologies', 'Client Support'];

 
  public pieChartType:string = 'pie';

  public randomizeType():void {
    this.pieChartType = this.pieChartType === 'line' ? 'pie' : 'line';
    // this.data = this.data === this.frontEndlineData? this.frontEndData : this.frontEndlineData;
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}



