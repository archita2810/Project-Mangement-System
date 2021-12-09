import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-listproject',
  templateUrl: './listproject.component.html',
  styleUrls: ['./listproject.component.css']
})
export class ListprojectComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProjectList:any=[];

  ngOnInit(): void {
    this.refreshProjectList();
  }
  
  onSuccess(data:any){
    this.service.updateStatus(data).subscribe((result)=>{
      alert("Status Updated Successfully");
      this.refreshProjectList();
      })
  }

  refreshProjectList(){
    this.service.getProjectList().subscribe(data=>{
      this.ProjectList=data;
    });
  }
}

