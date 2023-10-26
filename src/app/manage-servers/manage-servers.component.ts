import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  tabServers = [
    {
      name: 'Production Master Server',
      type: 'small',
      date_d: new Date(2022, 3, 3),
      statut: 'critical',
    },
    {
      name: 'Testing Development Server',
      type: 'medium',
      date_d: new Date(2023, 6, 7),
      statut: 'stable',
    },
    {
      name: 'Development Server',
      type: 'small',
      date_d: new Date(2022, 3, 3),
      statut: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'large',
      date_d: new Date(2022, 3, 3),
      statut: 'stable',
    },
  ];

  selectedStatut = '';

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
