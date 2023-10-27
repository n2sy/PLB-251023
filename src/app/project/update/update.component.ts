import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { ListCandidatsService } from 'src/app/services/list-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  candidatToUpdate: Candidat;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe({
      next: (p) => {
        // console.log(typeof p.get('candId'));

        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response: Candidat) => {
            this.candidatToUpdate = response;
          },
          error: (err) => {
            this.router.navigateByUrl('/not-found');
          },
        });
      },
    });
  }

  onSubmit() {
    this.candSer.updateCandidatAPI(this.candidatToUpdate).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log('Probleme avec Update');
      },
    });
  }
}
