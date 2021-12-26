import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { STATIC_DATA_PATH} from '../app-constants';
import { IContactDataVO } from '../vo/i-contact-data';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(private http: HttpClient) { 

  }

  public getContactData(): Observable<IContactDataVO>{
    return this.http.get<IContactDataVO>(`${STATIC_DATA_PATH}contact.json`);
  }
}
