import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], 
  animations: [
  	trigger("hideDrawer", [
  		state('true', style({ display: "block" })),
  		state('false', style({ display: "none" })),
  		transition('0 => 1', animate('.5s')),
  		transition('1 => 0', animate('.9s'))
  		]),
  //   // trigger("showOverlay", [
  //   //   state('true', style({ opacity: 1, display: "block" })),
  //   //   state('false', style({ opacity: 0, display: "none" })),
  //   //   transition('0 => 1', animate('.2s')),
  //   //   transition('1 => 0', animate('.5s'))
  //   //   ])
  ]
})
export class NavbarComponent implements OnInit {

  hideDrawerIdentifier:boolean = false;
  hideMenuIdentifier:boolean = false;
  showOverlay:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  hideDrawer(): void {
  	this.hideDrawerIdentifier = !this.hideDrawerIdentifier;
    this.hideMenuIdentifier = !this.hideMenuIdentifier;
    // this.showOverlay = !this.showOverlay;
  }

}
