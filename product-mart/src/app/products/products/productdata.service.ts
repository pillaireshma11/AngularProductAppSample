import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { STUDENTS } from 'src/mock-students';
import { Mystudents } from 'src/student';
@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
dbUrl='http://worldclockapi.com/api/json/est/now';

 

  constructor(private http:HttpClient) { }
  getAllProducts()
 
  getAllProducts(): Promise<Mystudents[]> {
  return Promise.resolve(STUDENTS);
}

}

