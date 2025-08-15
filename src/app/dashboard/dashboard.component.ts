import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgForOf } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgForOf, AppRoutingModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }
}
