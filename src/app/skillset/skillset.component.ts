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

// Setting up variables for the bar chart
  public barChartType:string = 'bar';
  public barData:any[] = [
                  { data: [2, 2, 2.5, 2, 1.5, 2, 1, 2, 2], label: 'Experience', stack: '1' },
                  { data: [2.5, 3, 3, 2, 1.5, 2, 1, 3, 1.5], label: 'Work Preference', stack: '2' }
                  ];
  public barLabel:string[] = ['JavaScript', 'Node.js', 'Angular 2/4', 'HTML', 'CSS', 'Python', 'Java', 'MongoDB', 'SQL'];
  public barChartColors:any[] = [{
    backgroundColor: 'rgba(150, 180, 220, 0.5)'
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
    },
    annotation: {
      drawTime: 'beforeDatasetsDraw'
    }
  }

  public randomizeType():void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



}



