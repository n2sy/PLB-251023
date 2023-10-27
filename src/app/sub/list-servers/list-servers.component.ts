import { Component } from '@angular/core';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css'],
})
export class ListServersComponent {
  allServers = [];

  constructor(private serverSer: ListServerService) {}

  ngOnInit() {
    this.allServers = this.serverSer.getAllServers();
  }
}
