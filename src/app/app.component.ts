import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OpenviduParamsService } from './services/openvidu-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  openviduURL = 'https://call.unimeduberaba.com.br:4440/';
  openviduSecret = 'W6ux5a3aXXhtGPCHzqSzS2sa';

  constructor(private router: Router, private openviduParamsService: OpenviduParamsService) { }

  updateUrl(url) {
    this.openviduURL = url;
    this.updateParams();
  }

  updateSecret(secret) {
    this.openviduSecret = secret;
    this.updateParams();
  }

  updateParams() {
    let myUrl = this.openviduURL;
    if (!(myUrl.substring(myUrl.length - 1) === '/')) {
      myUrl += '/';
    }
    this.openviduParamsService.updateParams({ openviduUrl: myUrl, openviduSecret: this.openviduSecret });
  }

}
