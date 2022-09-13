import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Hospital } from '../_models/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getSpecificHospital(id: number) { return this.http.get<Hospital>(this.baseUrl + 'hospital/' + id); }
}
