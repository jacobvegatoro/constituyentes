import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Convencion } from '../interfaces/convencion.interface';

@Injectable({
  providedIn: 'root'
})
export class ApibackendService {
  
  private apiUrl:string = 'http://localhost:4000/api';

  constructor(private http:HttpClient) { }

  /*private obtenerEncabezados(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getIntegrantes():void {
    this.http.get<Convencion>(this.apiUrl + '/integrantes')
    .subscribe(
      r => {
        this.integrantesList = r;
      }
    )
  }*/

  getIntegrantes( ): Observable<any>{
    const url = `${ this.apiUrl }/integrantes`;
    
    return this.http.get<any>( url )
        .pipe(
            catchError( () => {
                return of([])
            })
        );
  }

}
 