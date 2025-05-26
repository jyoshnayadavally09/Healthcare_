import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone :true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
onSubmit(form : NgForm){
  if(form.valid){
    console.log('form is vaild');
  }    else{
        console.log('invaild');
      }
    }
  }

