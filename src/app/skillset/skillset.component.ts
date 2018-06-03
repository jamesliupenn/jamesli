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

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatSort) sort: MatSort;

  // constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

// Setting up variables for the bar chart
  public barChartType:string = 'bar';
  public barData:any[] = [
                  { data: [4, 4, 3, 3, 2, 2, 3, 2], label: 'Level of Proficiency', stack: '1' },
                  { data: [4, 4, 4, 3, 3, 3, 4, 2], label: 'Work Preference', stack: '2' }
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
    this.barChartType = this.barChartType === 'bar' ? 'horizontalBar' : 'bar';
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
  {name: 'Javascript', category: 'Web Dev', level: 4, preference: 5},
  {name: 'Node.js', category: 'Fullstack', level: 3, preference: 5},
  {name: 'Angular', category: 'Web Dev', level: 4, preference: 5},
  {name: 'HTML', category: 'Front-end', level: 4, preference: 4},
  {name: 'CSS', category: 'Front-end', level: 4, preference: 4},
  {name: 'Python', category: 'Fullstack', level: 3, preference: 4},
  {name: 'MongoDB', category: 'Back-end', level: 3, preference: 5},
  {name: 'SQL', category: 'Back-end', level: 3, preference: 3}
];
