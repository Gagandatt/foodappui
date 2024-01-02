// restaurant-list.component.ts

import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service'; // Adjust the path based on your project structure

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    // Fetch data using the service
    this.restaurantService.getRestaurants().subscribe(
      (data: any) => {
        console.log('Restaurant data:', data);
        this.restaurants = data;
      },
      error => {
        console.error('Error fetching restaurant data:', error);
      }
    );
  }
}
