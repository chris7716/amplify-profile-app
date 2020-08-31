import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name: string;
  picture: string;

  constructor() { }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.name = user.attributes.name;
        this.picture = user.attributes.picture;
        console.log(user.attributes);
      })
      .catch(() => console.log("Not signed in"));
  }

  logOut(){
    console.log("Sign Out");
    Auth.signOut();
  }

}
