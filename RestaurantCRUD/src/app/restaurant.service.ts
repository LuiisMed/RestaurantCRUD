import { Injectable } from '@angular/core';
import { Restaurant } from './models/restaurant.model';
import { Dish } from './models/dish.model';
import { Observable, of } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurants: Restaurant[] = [
    { id: 1, title: 'Restaurante A', address: 'Calle 1', phone: '123456789', email: 'a@restaurante.com', webUrl: 'http://restaurante-a.com', priceLevel: 2 },
    { id: 2, title: 'Restaurante B', address: 'Calle 2', phone: '987654321', email: 'b@restaurante.com', webUrl: 'http://restaurante-b.com', priceLevel: 3 },
  ];

  private dishes: Dish[] = [
    { id: 1, title: 'Plato 1', description: 'Descripción del plato 1', price: 10 },
    { id: 2, title: 'Plato 2', description: 'Descripción del plato 2', price: 15 },
  ];

  /////////////////////////////////////////////////////////////////////////////////////

  getRestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }

  getRestaurantsById(id: number): Observable<Restaurant | undefined> {
    return of(this.restaurants.find(r => r.id === id));
  }

  addRestaurants(restaurant: Restaurant): void {
    this.restaurants.push({...restaurant, id: this.restaurants.length + 1});
  }

  updateRestaurants(updatedRestaurant: Restaurant): void {
    const index = this.restaurants.findIndex( r => r.id === updatedRestaurant.id);
    if (index !== -1) this.restaurants[index] = updatedRestaurant;
  }

  /////////////////////////////////////////////////////////////////////////////////////

  getDishes(): Observable<Dish[]> {
    return of(this.dishes);
  }

  getDishById(id: number): Observable<Dish | undefined> {
    return of(this.dishes.find(d => d.id === id));
  }

  addDish(dish: Dish): void {
    this.dishes.push({...dish, id: this.dishes.length + 1});
  }

  updateDish(updatedDish: Dish): void {
    const index = this.dishes.findIndex(d => d.id === updatedDish.id);
    if (index !== -1) this.dishes[index] = updatedDish
  }
}
