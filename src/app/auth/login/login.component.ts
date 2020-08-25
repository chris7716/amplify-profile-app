import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  googleSignIn(){
    Auth.federatedSignIn(
      {
        provider: CognitoHostedUIIdentityProvider.Google
      }
    )
  }

}
