import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
	color: string;
	toolsUsed: object[] = [
		{ source: "../../assets/icons8-Splunk-48.png" 			},
		{ source: "../../assets/icons8-NPM-48.png",
		  target: "https://icons8.com/icon/24895/NPM",
		  credit: "Npm icon credits"
		   														},
		{ source: "../../assets/icons8-DynDNS-48.png" 			},
		{ source: "../../assets/icons8-Slack-48.png" 			},
		{ source: "../../assets/icons8-Stack%20Overflow-48.png" },
		{ source: "../../assets/icons8-Sublime%20Text-48.png"	},
		{ source: "../../assets/icons8-Chrome-48.png"			},
		{ source: "../../assets/icons8-Google-48.png"			},
		{ source: "../../assets/icons8-Apple-48.png"			},
		{ source: "../../assets/icons8-Trello-48.png" 			},
		{ source: "../../assets/icons8-Adobe%20Photoshop-50.png"},
		{ source: "../../assets/icons8-Spotify-48.png"			},

	];

	constructor() { }

	ngOnInit() {
	}

}
