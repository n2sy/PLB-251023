import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { ListCandidatsService } from 'src/app/services/list-candidats.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  selectedCandidat: Candidat;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    // console.log(this.actRoute.snapshot.params);

    // V1 avec snapshot
    //this.id =  this.actRoute.snapshot.params['candId'];
    //this.id = this.actRoute.snapshot.paramMap.get('candId');

    //V2 avec les Observables
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        // console.log(typeof p.get('candId'));

        this.candSer.getCandidatByIdAPI(p.get('candId')).subscribe({
          next: (response: Candidat) => {
            this.selectedCandidat = response;
          },
          error: (err) => {
            this.router.navigateByUrl('/not-found');
          },
        });
      },
    });
  }

  onDelete() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat')) {
      this.candSer.deleteCandidatAPI(this.selectedCandidat._id).subscribe({
        next: (response) => {
          alert(response['message']);
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log('probleme avec Delete');
        },
      });
    }
  }
}
