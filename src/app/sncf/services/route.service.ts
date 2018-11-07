import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
    public destination: string;
    public quai: string;
    public route: any;
    public routes = [
    {place: 'A', steps: [
    {position: 'Couloir central', major: '42', minor: '1', instruction: 'Suivez le couloir'},
    {position: 'Escalier d\'accès au quai A', major: '42', minor: '2', instruction: 'tournez à 3 heures, et descendez l\'escalier'},
    {position: 'Quai A', major: '42', minor: '3', instruction: 'Vous êtes arrivé. Le quai A est à votre droite'}
    ]}
    ];

  constructor() { }

  getRoute(place: string) {
      this.route = this.routes.find((route: any) => {
          if (route.place == place)
          return (route);
      });
      return this.route;
  }

  getStep(index: number) {
      return (this.route.steps[index]);
  }
}
