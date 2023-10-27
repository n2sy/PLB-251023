import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServerService {
  private tabServers = [
    {
      id: 1,
      title: 'Lobna Server',
      statut: 'online',
    },
    {
      id: 2,
      title: 'Thierry Server',
      statut: 'offline',
    },
    {
      id: 3,
      title: 'PH Server',
      statut: 'online',
    },
  ];

  constructor() {}

  getServerById(id) {
    return this.tabServers.find((element) => element.id == id);
  }

  getAllServers() {
    return this.tabServers;
  }
}
