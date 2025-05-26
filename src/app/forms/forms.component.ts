import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormServicesService } from '../Services/form-services.service';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  username: string = '';
  diagnosis: any = '';
  email: string = '';
  age: string = '';
  guardian: string = '';
  contact: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  patientById: string = '';
  fetchpatient: any = null;

  constructor(private formsService: FormServicesService) {}

 fetchPatientById() {
  this.formsService.getPatientbyId(Number(this.patientById)).subscribe(
    (response) => {
      this.fetchpatient = response;
      console.log(response);
    },
    (error) => {
      this.errorMessage = error.error?.message || 'Error fetching patient';
      console.error(error);
    }
  );
}


  submitForm() {
    const patient = {
      p_name: this.username,
      text: this.diagnosis,
      age: this.age,
      guardian: this.guardian,
      contact: this.contact
    };

    this.successMessage = '';
    this.errorMessage = '';

    this.formsService.savePatient(patient).subscribe(
      (response: any) => {
        this.successMessage = response.message || 'Patient saved successfully!';
        console.log(response);
      },
      (error: any) => {
        this.errorMessage = error.error?.message || 'Something went wrong!';
        console.error(error);
      }
    );
  }
}