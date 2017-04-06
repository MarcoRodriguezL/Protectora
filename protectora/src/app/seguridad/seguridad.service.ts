import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { UsuarioStoreService } from './../shared/usuario-store.service'

@Injectable()
export class AuthGuard implements CanActivate {
authService:UsuarioStoreService;
  constructor(authService : UsuarioStoreService){
this.authService= authService;
  }

  canActivate() {
    console.log(this.authService.isloggedIn());
    return  this.authService.isloggedIn();
    
  }
}

