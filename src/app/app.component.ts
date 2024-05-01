import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isAPropos:boolean = false;
  isArtTherapie:boolean = false;
  isConsultations:boolean = false;
  isContact:boolean = true;
  isTouchDevice?: boolean;


  ngOnInit() {
    this.isTouchDevice = navigator.maxTouchPoints > 0;
    console.log(this.isTouchDevice);

    if(this.isTouchDevice == true){
      this.isAPropos = true;
    this.isArtTherapie = true;
    this.isConsultations = true;
    this.isContact = true;
    }
  }

  navigateAPropos(): void {
    this.isAPropos = true;
    this.isArtTherapie = false;
    this.isConsultations = false;
    this.isContact = false;
  }

  navigateArtTherapie(): void {
    this.isAPropos = false;
    this.isArtTherapie = true;
    this.isConsultations = false;
    this.isContact = false;
  }

  navigateConsultations(): void {
    this.isAPropos = false;
    this.isArtTherapie = false;
    this.isConsultations = true;
    this.isContact = false;
  }

  navigateContact(): void {
    this.isAPropos = false;
    this.isArtTherapie = false;
    this.isConsultations = false;
    this.isContact = true;
  }


}
