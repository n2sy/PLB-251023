import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrls: ['./exp-obs.component.css'],
})
export class ExpObsComponent {
  myObservable: Observable<string>;
  myObservable2: Observable<number>;
  inscription: Subscription;

  ngOnInit() {
    // this.myObservable = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('First package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.error('An error...');
    //   }, 6000);
    //   setTimeout(() => {
    //     observer.next('Thirs package');
    //   }, 8000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 10000);
    // });
    // this.myObservable.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    //   complete: () => {
    //     console.log('Flux terminé');
    //   },
    // });

    this.myObservable2 = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        count++;
        observer.next(count);
      }, 1000);
    });

    this.inscription = this.myObservable2.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
