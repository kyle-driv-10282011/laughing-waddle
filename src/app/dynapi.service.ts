import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { list_material, struct_data_rqlite, struct_response_rqlite } from './rqlite';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynapiService {


  private apiURL = "http://10.0.0.69:8444";
      
    /*------------------------------------------
    --------------------------------------------
    Http Header Options
    --------------------------------------------
    --------------------------------------------*/
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    
    /*------------------------------------------
    --------------------------------------------
    Created constructor
    --------------------------------------------
    --------------------------------------------*/
    constructor(private httpClient: HttpClient) { }

    getAllMaterials(): Observable<struct_response_rqlite> {
  
      return this.httpClient.get<struct_response_rqlite>(this.apiURL+"/material")
      .pipe(
        catchError(this.errorHandler)
      )
    }

    deleteMaterial(id: number) {
      const url = `${this.apiURL}/material/${id}`;
      return this.httpClient.delete(url)
      .pipe(
        catchError(this.errorHandler)
      )
    }


    errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }
}