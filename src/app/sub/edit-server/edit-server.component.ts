import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent {
  serveur;
  constructor(
    private actRoute: ActivatedRoute,
    private serverSer: ListServerService
  ) {}

  ngOnInit() {
    // console.log(this.actRoute.snapshot.paramMap.get('id'));
    this.actRoute.paramMap.subscribe({
      next: (p) => {
        this.serveur = this.serverSer.getServerById(p.get('id'));
      },
    });
  }
}
