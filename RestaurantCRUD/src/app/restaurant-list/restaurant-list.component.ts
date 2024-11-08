import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent implements OnInit{
  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe(data => this.restaurants = data)
  }

}
