// import { Component, OnInit } from '@angular/core';
// import { LocatorService } from '../locator.service';

// @Component({
//   selector: 'app-location',
//   templateUrl: './location.component.html',
//   styleUrls: ['./location.component.css'],
//   providers: [ LocatorService ]
// })
// export class LocationComponent implements OnInit {

//   lat: number = 37.773972;
//   lng: number = -122.431297;

//   location = {};

//   default = {
//     lat: 37.3382,
//     lng: -121.8863
//   };

//   distance: number;

//   constructor(
//   	private locatorService: LocatorService
//   	) { }

// // On init, checks for geolocation and get the distance
//   ngOnInit() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(position => {
//         this.location = position.coords;
//         // this.locatorService.getDistance(position.coords);
//         this.lat = this.location['latitude'];
//         this.lng = this.location['longitude'];
//         this.distance = Math.round(this.calculateDist());
//       })
//     }
//   }

// // Haversine Formula
//   calculateDist() {
//     let radius = 6371; // radius of the Earth in kilometers
//     let deltaLng = this.toRad(this.lng - this.default.lng);
//     let deltaLat = this.toRad(this.lat - this.default.lat);
//     let a = Math.sin(deltaLat/2) * Math.sin(deltaLat/2) +
//             Math.cos(this.toRad(this.lat)) * Math.cos(this.toRad(this.default.lat)) *
//             Math.sin(deltaLng/2) * Math.sin(deltaLng/2);
//     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//     return radius * c / 1.6; // in miles
//   }

//   toRad(Value) {
//     return Value * Math.PI / 180; // convert degrees into radians
//   }
// }
