import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public toggle:boolean = false
  public hover:boolean = false

  show () {
    this.toggle = !this.toggle
  }
  slides = [
    { img: 'assets/men-01.jpg', title: 'Classic spring', price: 120.00, rating: 5 },
    { img: 'assets/men-01.jpg', title: 'Classic spring', price: 120.00, rating: 5 },
    { img: 'assets/men-01.jpg', title: 'Classic spring', price: 120.00, rating: 5 },
    { img: 'assets/men-01.jpg', title: 'Classic spring', price: 120.00, rating: 5 },
    
  ];
  slideConfig = {"slidesToShow": 1,
   "slidesToScroll": 1,
   "infinite": true,
   "dots": true,
   responsive: [
    {
      breakpoint: 768, // adjust breakpoint as needed
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    // Add more breakpoints as needed
  ],
  };



}
