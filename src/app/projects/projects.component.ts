import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [NgbCarouselConfig]
  // animations: [
  // 		trigger('myPicAnime', [
  // 			state('in', style({
  // 				transform: 'translateX(0)',
  // 				opacity: 1
  // 			})),
  // 			state('out', style({
  // 				transform: 'translateX(50px)',
  // 				opacity: 0
  // 			})),
  // 			transition('in <=> out', animate('0.3s ease')),
  // 		]),
  // ]
})

export class ProjectsComponent {
	images =
	[
		{ name: "FIT Dashboard - Angular", imageName: "kone.png", url: ""},
		{ name: "Portfolio - Built in Angular", imageName: "kone.png", url: "https://github.com/jamesliupenn/jamesli"}, 
		{ name: "WeatherPug - A React weather app", imageName: "weatherpug.png", url: "https://github.com/jamesliupenn/weather-pug"},
		{ name: "Pomodoro - A JavaScript Timer", imageName: "pomodoro.png", url: "https://github.com/jamesliupenn/JSpomodoro"}
	]

	// state: string = 'in';

	// projectImages = [
	// 	{ source: "../../assets/kone.png" },
	// 	{ source: "../../assets/ibm.png" }
	// ]

	// public projects: Array<Object> = [
	// 	{ name: "Empowered", state: 'in',description: "Winner of the KONE Hackathon for IBM Watsons IoT Challenge.", tech:"Node.js, NodeRED, IBM Watsons IoT, Raspberry Pi, RESTful API" },
	// 	{ name: "FIT Dashboard", state: 'in', description: "An operator's dashboard.", tech:"Angular 4, TypeScript, JavaScript, RESTful API, HTML, CSS" },
	// 	{ name: "node.js", description:"test", tech:"Node.js, Angular 4, MongoDB, Express, TypeScript, RESTful API, HTML, CSS" },
	// ]

	constructor(config: NgbCarouselConfig) { 
		config.interval = 10000;
		config.wrap = true;
		config.keyboard = false;
	}

	getImageSrc(imageN) {
		return `assets/${imageN}`
	}

	getUrl(url) {
		return `${url}`
	} 
	// animateMe(index): void {
	// 	// this.state = (this.state === 'in'? 'out' : 'in');
	// 	console.log(this.projects[index]); 
	// }
}
