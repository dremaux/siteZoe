import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @ViewChild('contentToCopy', { static: true }) contentToCopy!: ElementRef;

  isAPropos:boolean = false;
  isArtTherapie:boolean = true;
  isConsultations:boolean = false;
  isContact:boolean = false;
  isPP:boolean = false;
  isProgramme:boolean = false;

  isTouchDevice?: boolean;
  dropdownVisible: boolean = false;

  copySuccess: boolean = false;

  


  ngOnInit() {
    this.isTouchDevice = navigator.maxTouchPoints > 0;
    console.log(this.isTouchDevice);
  }

  

  navigateAPropos(): void {
    this.isAPropos = true;
    this.isArtTherapie = false;
    this.isConsultations = false;
    this.isContact = false;
    this.isPP = false;
    this.isProgramme = false;
    this.dropdownVisible = false;
  }

  navigateArtTherapie(): void {
    this.isAPropos = false;
    this.isArtTherapie = true;
    this.isConsultations = false;
    this.isContact = false;
    this.isPP = false;
    this.isProgramme = false;
    this.dropdownVisible = false;

    setTimeout(() => {
      this.scrollToTop();
    }, 100);
  }

  navigateArtTherapie2(): void {
    this.isAPropos = false;
    this.isArtTherapie = true;
    this.isConsultations = false;
    this.isContact = false;
    this.isPP = false;
    this.isProgramme = false;
    this.dropdownVisible = false;
  
    // Attendre 1 seconde puis exécuter la méthode scrollToBottom()
    setTimeout(() => {
      this.scrollToBottom();
    }, 100); // 1000 millisecondes équivalent à 1 seconde
  }
  

  navigateConsultations(): void {
    this.isAPropos = false;
    this.isArtTherapie = false;
    this.isConsultations = true;
    this.isContact = false;
    this.isPP = false;
    this.isProgramme = false;
    this.dropdownVisible = false;
  }

  navigateContact(): void {
    this.isAPropos = false;
    this.isArtTherapie = false;
    this.isConsultations = false;
    this.isContact = true;
    this.isPP = false;
    this.isProgramme = false;
    this.dropdownVisible = false;
  }

  navigatePP(): void {
    this.isAPropos = false;
    this.isArtTherapie = false;
    this.isConsultations = false;
    this.isContact = false;
    this.isPP = true;
    this.isProgramme = false;
    this.dropdownVisible = false;
  }

  navigateProgramme(): void {
    this.isAPropos = false;
    this.isArtTherapie = false;
    this.isConsultations = false;
    this.isContact = false;
    this.isPP = false;
    this.isProgramme = true;
    this.dropdownVisible = false;
  }

  scrollToBottom(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  copyText(num: string): void {
    navigator.clipboard.writeText(num).then(() => {
      this.copySuccess = true;
      setTimeout(() => this.copySuccess = false, 2000);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  


  




}
