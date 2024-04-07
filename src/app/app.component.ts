import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isAPropos:boolean = true;
  isArtTherapie:boolean = false;
  isConsultations:boolean = false;
  isContact:boolean = false;
  isTouchDevice?: boolean;

  texte1:string = "Depuis mon plus jeune âge, j'ai été plongée dans un environnement artistique, ce qui m'a encouragée à explorer naturellement et à apprécier une variété de médiums. Que ce soit à travers l'écriture, le dessin, la peinture ou encore la photographie, toutes ces formes d'expression ont finalement toujours constitué l'essence de mes centres d'intérêt. Progressivement, j'ai mis des mots sur ma pratique, et pris conscience des bien faits de la création dans ma vie personnelle.";

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
