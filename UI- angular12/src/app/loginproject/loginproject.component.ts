import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SharedService} from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-loginproject',
  templateUrl: './loginproject.component.html',
  styleUrls: ['./loginproject.component.css']
})
export class LoginprojectComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private service:SharedService,
    private toastr: ToastrService) { }


  loginForm=new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  get email(){
    return this.loginForm.get('email');
  }
   
  get password(){
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    if(data.email != "" && data.password != ""){
     this.service.userLogin(data).subscribe((result)=>{
      
      let answer = Object.assign(result);
      if(answer.status == "Success"){
        this.onSwitch();
      }
      else
        this.toastr.error('Invalid Email or Password');
      })
    }
    else if(data.email == "" && data.password != "")
         this.toastr.error("Email is Required");
    else if(data.email != "" && data.password == "")
         this.toastr.error("Password is required");
    else
         this.toastr.error("Email and Password is required");

  }

  
  onSwitch()
  {
    this.router.navigate(['/dashboard']);
  }
}

