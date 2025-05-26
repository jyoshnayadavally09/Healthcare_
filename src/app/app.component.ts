import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SidenavComponent,TopnavComponent,DashboardComponent,CommonModule,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HealthCare';
name : string[] =['akk','ng','rjh'];
obj:{id:number,name:string}[]=[{id:1,name:'Item1'},{id:2,name :'Item2'},
];
}
