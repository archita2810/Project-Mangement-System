import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  start:string="Start";
  close:string="Close";
  register:string="Registered";
  cancel:string="Cancel";

  statusStart:string="0";
  statusClose:string="0";
  statusRegister:string="0";
  statusCancel:string="0";


  ngOnInit(): void {
    this.refreshProjectStatusList();
  }


    refreshProjectStatusList(){
      this.service.getProjectStatus().subscribe(data=>{
        
        for(let obj of data){
          
          if(obj.status == "Close"){
            this.close = obj.status;
            this.statusClose = obj.Column1;
          }
          else if(obj.status == "Start"){
            this.start = obj.status;
            this.statusStart = obj.Column1;
          }
          else if(obj.status == "Cancel"){
            this.cancel = obj.status;
            this.statusCancel = obj.Column1;
          }
          else if(obj.status == "Registered"){
            this.register = obj.status;
            this.statusRegister = obj.Column1;
          }
        }
      });
    }
}

