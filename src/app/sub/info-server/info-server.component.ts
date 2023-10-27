import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrls: ['./info-server.component.css'],
})
export class InfoServerComponent {
  serveur;
  constructor(
    private actRoute: ActivatedRoute,
    private serverSer: ListServerService
  ) {}

  ngOnInit() {
    // console.log(this.actRoute.snapshot.paramMap.get('id'));
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.serveur = this.serverSer.getServerById(p.get('id'));
      },
    });
  }
}
