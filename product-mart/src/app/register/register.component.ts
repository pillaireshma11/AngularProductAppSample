import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
userGroup=new FormGroup(
  {
    name: new FormControl('',Validators.required),
    email:new FormControl('', Validators.required),
    password:new FormControl('',Validators.required)
  }
)
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
login()
{
  if(this.userGroup.valid)
  {
    this.router.navigate(['/login']);
    console.log("Successfully Registered ")
  }

}
}
