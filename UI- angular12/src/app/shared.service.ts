import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="https://localhost:5001/api";

  constructor(private http:HttpClient) { }

  userLogin(val:any){
    return this.http.post(this.APIUrl+'/tblLogin',val);
  }

  updateStatus(val:any){
    return this.http.patch(this.APIUrl+'/tblProjectDetails',val);
  }

  addProject(val:any){
    return this.http.post(this.APIUrl+'/tblProjectDetails/add',val);
  }

  getProjectList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tblProjectDetails/list');
  }

  getProjectStatus():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tblProjectDetails/count');
  }

  getGraphStatus():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/tblProjectDetails/graph');
  }
}
