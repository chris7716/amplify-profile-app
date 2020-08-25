import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user);
      })
      .catch(() => console.log("Not signed in"));
  }

  logOut(){
    console.log("Sign Out");
    Auth.signOut();
  }

}
