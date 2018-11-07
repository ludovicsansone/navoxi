import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-sncf',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    panel: Array<any>;
    station: string = "Lyon Perrache";

  constructor(
  private routerService: Router,
  private routeService: RouteService) { }

  ngOnInit() {
      this.panel = [
      {destination: 'Valense Ville', numero: '886712', heure: '10:42', quai: 'A'},
      {destination: 'Clermont-Ferrand', numero: '874442', heure: '10:54', quai: 'B'},
      {destination: 'Paris Gare de Lyon', numero: '5146', heure: '11:08', quai: 'C'},
      ];
  }

  onStart(destination, quai) {
      this.routeService.destination = destination;
      this.routeService.quai = quai;
      this.routerService.navigate(['sncf-route']);
  }
}
