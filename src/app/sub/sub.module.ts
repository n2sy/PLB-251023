import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServersComponent } from './list-servers/list-servers.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { SUB_ROUTING } from './sub.routing';

@NgModule({
  declarations: [
    ListServersComponent,
    InfoServerComponent,
    EditServerComponent,
  ],
  imports: [CommonModule, SUB_ROUTING],
})
export class SubModule {}