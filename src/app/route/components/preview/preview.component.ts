import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'route-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {
    private route: any; // Itinéraire courant
    private nextStart: string; // Délai du prochain départ
    private nextStartSubscription: Subscription; // Souscription à l'observateur observant le prochain départ

  constructor(
  private routeService: RouteService) { }

  // Initialisation du composant
  ngOnInit() {
      // Récupération de l'itinéraire courant
      this.route = this.routeService.selectedRoute;

      // Début de la souscription à l'observable observant le prochain départ'
      this.nextStartSubscription = this.routeService.nextStart.subscribe((data: string) => {
          this.nextStart = data;
      });
  }

  // Destruction du composant
  ngOnDestroy() {
      // Fin de l'observation du prochain départ'
      this.nextStartSubscription.unsubscribe();
  }

  onStartRoute() {
      // Démarrage de l'itinéraire
  }
}
