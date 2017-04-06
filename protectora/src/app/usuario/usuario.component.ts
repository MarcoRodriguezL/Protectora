import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';

@Component({
  selector: 'smn-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  private usuario;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getProfile().user;
  }

}


