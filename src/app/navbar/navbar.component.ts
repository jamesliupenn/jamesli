import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('myAnime', [
        state('in', style({
          transform: 'translateX(0)',
          opacity: 1
        })),
        state('out', style({
          transform: 'translateX(30px)',
          opacity: 0
        })),
        transition('in <=> out', animate('1s ease')),
      ]),
    trigger('collapse', [
        state('open', style({
          opacity: '1',
          display: 'block',
          transform: 'translate3d(0, 0, 0)'
        })),
        state('closed', style({
          opacity: '0',
          display: 'none',
          transform: 'translate3d(0, -100%, 0)'
        })),
        transition('closed => open', animate('200ms ease-in')),
        transition('open => closed', animate('100ms ease-out'))
      ])
    ]
})

export class NavbarComponent implements OnInit {
  hellos = ['Hey there', '你好', 'Aloha', '안녕하세요', 'Bonjour', 'こんにちは', 'Guten Tag'];
  hello: string;
  show: boolean = false;
  isCollapsed: boolean = true;
  // collapse: string = "closed";
  screenWidth = 0;
  count = 0;

  @Input() isVisible : boolean = true;
  public state = 'in';

  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
    this.hello = this.hellos[this.count];
  	const timer = Observable.timer(1000, 2000);
  	const subscribe = timer.subscribe(counter => {this.iterate()});
  }

  iterate(): void {
    this.state = (this.state == 'in' ? 'out' : 'in');
    if (this.state == 'in') {
      this.count < this.hellos.length - 1? this.count += 1 : this.count = 0;
      this.hello = this.hellos[this.count];
    }
  }

  toggleCollapse() {
    // this.collapse = this.collapse == "block" ? 'none' : 'block';
    // console.log(this.collapse);
  }
  // showMenu() {
  //   // this.screenWidth = window.innerWidth;
  //   if (this.isMenuVisible) {
  //     return "50%";
  //   }
  //   else {
  //     return "0%";
  //   }
  // }
}
