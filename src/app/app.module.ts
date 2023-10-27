import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { RecruterComponent } from './project/recruter/recruter.component';
import { SecondService } from './services/second.service';
import { AccueilComponent } from './project/accueil/accueil.component';
import { PLB_ROUTING } from './app.routing';
import { NavbarComponent } from './project/navbar/navbar.component';
import { InfosComponent } from './project/infos/infos.component';
import { UpdateComponent } from './project/update/update.component';
import { AddComponent } from './project/add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { ExpObsComponent } from './exp-obs/exp-obs.component';
import { HttpClientModule } from '@angular/common/http';
import { ProvideInterceptor } from './add-token.interceptor';
import { AllowGuard } from './allow.guard';
import { LogoutGuard } from './logout.guard';

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
    RecruterComponent,
    AccueilComponent,
    NavbarComponent,
    InfosComponent,
    UpdateComponent,
    AddComponent,
    NotFoundComponent,
    LoginComponent,
    ReactFormComponent,
    ExpObsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PLB_ROUTING,
  ],

  providers: [
    FirstService,
    SecondService,
    ProvideInterceptor,
    AllowGuard,
    LogoutGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
