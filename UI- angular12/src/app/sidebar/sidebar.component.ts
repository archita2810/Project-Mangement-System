import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onDashboard(){
    this.router.navigate(['/dashboard']);
  }

  onList(){
    this.router.navigate(['/tblProjectDetails']);
  }

  onAdd(){
    this.router.navigate(['/addproject']);
  }

  onLogout(){
    this.router.navigate(['/tblLogin']);
  }

}

