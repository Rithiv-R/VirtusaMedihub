import { Component, Input, OnInit } from '@angular/core';
import { patient_exp } from 'src/app/tspatientexpmodel';

@Component({
  selector: 'app-doctor-patient',
  templateUrl: './doctor-patient.component.html',
  styleUrls: ['./doctor-patient.component.css']
})
export class DoctorPatientComponent implements OnInit {

  @Input() patientreview!:patient_exp;
  constructor() { }

  ngOnInit(): void {
  }

}
