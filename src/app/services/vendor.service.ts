import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Vendor } from './vendor';
import {Observable} from 'rxjs';
import { Vendor } from '../models/vendor';
import { vendor_l } from '../models/vendorlist';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  // private baseURL ="http://localhost:8080/api/v1/vendor/vendors";
  //constructor(private httpClient: HttpClient) { }

  // getVendorList(): Observable<Vendor[]>{
  //   return this.httpClient.get<Vendor[]>(`${this.baseURL}`);
  // }
  // addVendor(vendor: Vendor):Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}`,vendor);
  // }

  // getVendorByVendorId(vendorId: String): Observable<Vendor>{
  //   return this.httpClient.get<Vendor>(`${this.baseURL}/${vendorId}`);

  // }

  // updateVendor(vendorId: String, vendor: Vendor):Observable<Object>{
  //   return this.httpClient.put(`${this.baseURL}/${vendorId}`, vendor);
  // }

  // deleteVendor(vendorId: String):Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${vendorId}`);
  // }

  constructor() { }
  getAll(): Vendor[] {
    return vendor_l;
  }
  
}


