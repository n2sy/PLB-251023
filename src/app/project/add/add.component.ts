import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListCandidatsService } from 'src/app/services/list-candidats.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private candSer: ListCandidatsService, private router: Router) {}
  onSubmit(newCand) {
    this.candSer.addCandidatAPI(newCand).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
