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
        this.candidatToUpdate = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }

  onSubmit() {
    this.candSer.updateCandidat(this.candidatToUpdate);
    this.router.navigateByUrl('/cv');
  }
}
