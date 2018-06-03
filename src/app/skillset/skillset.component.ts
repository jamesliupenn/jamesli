import { Component, OnInit, ViewChild } from '@angular/core';
import { Skill } from './skill';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})

export class SkillsetComponent implements OnInit {
  displayedColumns = ['name', 'category', 'level', 'preference'];
  dataSource = new MatTableDataSource(SKILLSET_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

// Setting up variables for the bar chart
  public barChartType:string = 'bar';
  public barData:any[] = [
                  { data: [2, 2, 2.5, 2, 1.5, 2, 2, 2], label: 'Experience', stack: '1' },
                  { data: [2.5, 3, 3, 2, 1.5, 2, 3, 1.5], label: 'Work Preference', stack: '2' }
                  ];
  public barLabel:string[] = ['JavaScript', 'Node.js', 'Angular', 'HTML', 'CSS', 'Python', 'MongoDB', 'SQL'];
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

// Changes the type when button is clicked, switching between bar & line
  public changeType():void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}

export interface Skillset {
  name: string;
  category: string;
  level: number;
  preference: number;
}

const SKILLSET_DATA: Skillset[] = [
  {name: 'Javascript', category: 'Web Dev', level: 4, preference: 5}
];
