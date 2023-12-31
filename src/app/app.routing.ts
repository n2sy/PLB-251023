import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './project/cv/cv.component';
import { AccueilComponent } from './project/accueil/accueil.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountsComponent } from './accounts/home-accounts/home-accounts.component';
import { InfosComponent } from './project/infos/infos.component';
import { AddComponent } from './project/add/add.component';
import { UpdateComponent } from './project/update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactFormComponent } from './react-form/react-form.component';
import { AllowGuard } from './allow.guard';
import { LogoutGuard } from './logout.guard';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [AllowGuard] },
      { path: ':candId', component: InfosComponent },
      {
        path: ':id/edit',
        component: UpdateComponent,
        canActivate: [AllowGuard],
      },
    ],
  },
  { path: 'ms-word', component: MsWordComponent },
  {
    path: 'sub',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'react', component: ReactFormComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'accounts', component: HomeAccountsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes);
