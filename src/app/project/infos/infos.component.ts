import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  id;
  constructor(private actRoute: ActivatedRoute) {}

  ngOnInit() {
    // console.log(this.actRoute.snapshot.params);

    // V1 avec snapshot
    //this.id =  this.actRoute.snapshot.params['candId'];
    //this.id = this.actRoute.snapshot.paramMap.get('candId');

    //V2 avec les Observables
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.id = p.get('candId');
      },
    });
  }
}
