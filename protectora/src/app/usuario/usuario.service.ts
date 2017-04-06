import { Injectable } from '@angular/core';
import { DatosUsuario } from './../shared/Model/model';
import { UsuarioStoreService } from './../shared/usuario-store.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { CrudService } from './../shared/crud.service';

@Injectable()
export class UsuarioService extends CrudService {

  constructor(private usuarioStoreService: UsuarioStoreService, http: Http, private router: Router) {
    super(http);
    this.apiEndPoint = 'pub/usuarios';
  }


  public getProfile(): DatosUsuario {
    return this.usuarioStoreService.getProfile();
  }
}
