import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private_albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number){
    returm this._http.get(this._albumUtl).map((response)) =>
    Response.json(());
  }
}
