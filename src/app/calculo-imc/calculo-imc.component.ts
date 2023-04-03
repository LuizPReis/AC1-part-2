import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculo-imc',
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.css']
})
export class CalculoIMCComponent implements OnInit {
  form: FormGroup;

  peso   : number = 0;
  altura : number = 0;
  imc    : number = 0;
  CategoriaPeso: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      peso   : new FormControl(0,[Validators.min(1), Validators.max(500), Validators.required]),
      altura : new FormControl(0,[Validators.min(0.01), Validators.max(3), Validators.required])
  });

}

  finalizar(){

  }

  calcularIMC(){

    this.imc = (this.peso)/(this.altura*this.altura)

    if(this.imc <= 18.5)
    {
      this.CategoriaPeso = "Abaixo do peso ideal"

    }

    else if(this.imc > 18.5 && this.imc <= 24.9)
    {

      this.CategoriaPeso = "Voce esta no peso normal"


    }

    else if(this.imc > 25 && this.imc <= 29.9)
    {

      this.CategoriaPeso = "Voce esta acima do peso"

    }

    else if(this.imc > 30 && this.imc <= 34.9)
    {

      this.CategoriaPeso = "Voce esta com obesidade grau 1"

    }

    else if(this.imc > 35 && this.imc <= 39.9)
    {

      this.CategoriaPeso = "Voce esta com obesidade grau 2"

    }

    else if(this.imc > 40)
    {

      this.CategoriaPeso = "Voce esta com obesidade grau 3"

    }




  }

}
