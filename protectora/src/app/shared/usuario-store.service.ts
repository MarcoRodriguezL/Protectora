import { DataStoreService } from './data-store.service';
import { Injectable } from '@angular/core';
import { DatosUsuario } from './Model/model';

@Injectable()
/**
 * A service to hold User data
 * Performs operations against a local store
 * Comunicates with the app trought Observabales
 * */
export class UsuarioStoreService extends DataStoreService {

  constructor() {
    super('datos-usuario', {
      isLogged: false,
      token: '',
      user: null,
    });
  }

  /** Saves and notifies that a user has been logged in  */
  public logIn(user, token) {
    super.setData({ user: user, token: token, isLogged: true });
  }
  /** Saves and notifies that a user has been logged out  */
  public logOut(user, token) {
    super.setData({ user: null, token: null, isLogged: false });
  }
  /**
   * Gets the profile for the current user
   * Needs improvement to actually get fresh data from server
   */
  public getProfile(): DatosUsuario {
    // To Do: refresh form API and persist
    return super.getData();
  }

    public isloggedIn():boolean {
      console.log(this.getProfile());
      console.log();
    return this.getProfile().isLogged;
  }
}
