import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
  		trigger('myPicAnime', [
  			state('in', style({
  				transform: 'translateX(0)',
  				opacity: 1
  			})),
  			state('out', style({
  				transform: 'translateX(50px)',
  				opacity: 0
  			})),
  			transition('in <=> out', animate('0.3s ease')),
  		]),
  ]
})
export class ProjectsComponent implements OnInit {

	state: string = 'in';

	projectImages = [
		{ source: "../../assets/kone.png" },
		{ source: "../../assets/ibm.png" }
	]

	projects = [
		{ name: "Empowered", description: "Winner of the KONE Hackathon for IBM Watsons IoT Challenge.", tech:"Node.js, NodeRED, IBM Watsons IoT, Raspberry Pi, RESTful API" },
		{ name: "FIT Dashboard", description: "An operator's dashboard.", tech:"Angular 4, TypeScript, JavaScript, RESTful API, HTML, CSS" },
		{ name: "node.js", description:"test", tech:"Node.js, Angular 4, MongoDB, Express, TypeScript, RESTful API, HTML, CSS" },
	]

	constructor() { }

	ngOnInit() {
	}

	animateMe(): void {
		this.state = (this.state === 'in'? 'out' : 'in');
	}
}
