import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './project/cv/cv.component';
import { ListeComponent } from './project/liste/liste.component';
import { DetailsComponent } from './project/details/details.component';
import { ItemComponent } from './project/item/item.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { DetailsAccountComponent } from './accounts/details-account/details-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { ShortPipe } from './pipes/short.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { FirstService } from './services/first.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CvComponent,
    ListeComponent,
    DetailsComponent,
    ItemComponent,
    HomeAccountsComponent,
    DetailsAccountComponent,
    AddAccountComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    ShortPipe,
    FilterPipe,
    DefaultImagePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [FirstService],
  bootstrap: [AppComponent],
})
export class AppModule {}
