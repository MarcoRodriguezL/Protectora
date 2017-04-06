import { CrudService } from './../shared/crud.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatosUsuario } from './../shared/model/model';
import { UsuarioStoreService } from './../shared/usuario-store.service';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
/**
 * CRUD and custom logic related to users
 * */
export class UsuarioService extends CrudService {

  constructor(private usuarioStoreService: UsuarioStoreService, http: Http, private router: Router) {
    super(http);
    this.apiEndPoint = 'pub/usuarios';
  }

  /**
   * Sends credentials to de API and stores the result
   * */
  public postSesion$(credenciales) {
    return this.http
      .post('pub/sesiones', credenciales)
      .map(r => {
        const token = r.json();
        this.usuarioStoreService.logIn({email: credenciales.email }, token);
        this.router.navigate(['']);
      });
  }

  /**
   * Sends credentials to de API and stores the result
   * */
  public postUser$(credenciales) {
    return this.http
      .post('pub/usuarios', credenciales)
      .map(r => {
        const token = r.json();
        this.usuarioStoreService.logIn({email: credenciales.email }, token);
        this.router.navigate(['']);
      });
  }

  /**
   * Refresh the current user profile
   * */
  public getProfile(): DatosUsuario {
    return this.usuarioStoreService.getProfile();
  }

}
