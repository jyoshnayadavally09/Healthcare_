import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

export const routes: Routes = [
{    path:" ",
    component : DashboardComponent,
},
{
path : 'sidenav',
component :SidenavComponent,
},
{
path : 'topnav',
component : TopnavComponent,
},
{
path : 'dashboard',
component : DashboardComponent,
},
];
