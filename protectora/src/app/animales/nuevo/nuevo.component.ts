import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smn-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tipo } from './../../shared/Model/model';
import { Animal } from './../../shared/Model/model';

@Component({
  selector: 'smn-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  private nuevoAnimal: FormGroup;
  tipos: Tipo[];
  animal: Animal;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.nuevoAnimal =this.formBuilder.group({
      tipo: this.animal.tipo,
      raza: this.animal.raza,
      nombre: this.animal.nombre,
      sexo: this.animal.sexo,
      chip: this.animal.chip
    });
  }

  

}
