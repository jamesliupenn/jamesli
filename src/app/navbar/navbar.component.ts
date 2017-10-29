import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
  		trigger('helloAnime', [
  			state('in', style({transform: 'translateX(0)'})),
  			transition(':enter', [
 				style({transform: 'translateX(-100%)'}), 
 				animate(100)
			]),
			transition(':leave', [
				animate(100, 
				style({transform: 'translateX(100%)'}))
			])
  		]),
  ]
})
export class NavbarComponent implements OnInit {
  hellos = ['Hey there', '你好', 'Aloha', '안녕하세요'];
  hello: string;

  constructor() { }

  ngOnInit() {
  	// const timer = Observable.timer(500, 3000);
  	// const subscribe = timer.subscribe(counter => {this.iterate(counter)});
  }

  iterate(counter) {
  	const index = (counter % this.hellos.length);
   	this.hello = this.hellos[index];
  }

}
