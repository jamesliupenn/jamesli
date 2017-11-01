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
      ])
    ]
})

export class NavbarComponent implements OnInit {
  hellos = ['Hey there', '你好', 'Aloha', '안녕하세요', 'Bonjour', 'こんにちは', 'Guten Tag'];
  hello: string;
  count = 0;

  @Input() isVisible : boolean = true;
  public state = 'in';

  constructor() {
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

}
