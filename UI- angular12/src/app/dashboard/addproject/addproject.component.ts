import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SharedService} from 'src/app/shared.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
})
export class AddprojectComponent implements OnInit {


  constructor(private http:HttpClient, private router:Router, private service:SharedService) { }


  reasonList:any = ['Business', 'Dealership', 'Transport'];
  typeList = ['Internal', 'External', 'Vendor'];
  divisionList = ['Compressor', 'Filter', 'Pumps', 'Glass', 'Water Heater'];
  categoryList = ['Quality A', 'Quality B', 'Quality C', 'Quality D'];
  priorityList = ['High', 'Medium', 'Low'];
  departmentList = ['Stratergy', 'Finance', 'Quality', 'Maintainance', 'Stores', 'HR'];
  locationList = ['Pune', 'Mumbai', 'Delhi', 'Calcutta', 'Banglore'];



  addProject = new FormGroup({
    projectName: new FormControl('',[Validators.required]),
    reason: new FormControl('Business'),
    type: new FormControl('Internal'),
    division: new FormControl('Compressor'),
    category: new FormControl('Quality A'),
    priority: new FormControl('High'),
    department: new FormControl('Stratergy'),
    location: new FormControl('Pune'),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    status: new FormControl('Registered'),
  })


  ngOnInit(): void {
  }
  
  get projectName(){
    return this.addProject.get('projectName');
  }

  onSubmit(data:any){
    if(data.projectName != "")
    {
    this.service.addProject(data).subscribe((result)=>
    {
       alert("Project added successfully");
        this.onAdd();
    })
  }else{
     alert("Project Name is required");
  }
  }

  
  onAdd(){
    this.router.navigate(['/tblProjectDetails']);
  }

}
