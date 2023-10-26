import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], critere: string): any[] {
    if (!critere.length) return value;
    else {
      // let newTab = [];
      // for (const serv of value) {
      //   if (serv['statut'] == critere) newTab.push(serv);
      // }
      // return newTab;
      return value.filter((element) => element['statut'] == critere);
    }
  }
}
