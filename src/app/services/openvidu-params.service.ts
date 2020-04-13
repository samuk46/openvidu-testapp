import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface OpenviduParams {
  openviduUrl: string;
  openviduSecret: string;
}

@Injectable()
export class OpenviduParamsService {

  params: OpenviduParams =
    {
      openviduUrl: 'https://call.unimeduberaba.com.br:4440/',
      openviduSecret: 'W6ux5a3aXXhtGPCHzqSzS2sa'
    };

  newParams$ = new Subject<OpenviduParams>();

  constructor() { }

  getParams() {
    return this.params;
  }

  updateParams(params: any) {
    this.params = params;
    this.newParams$.next(params);
  }

}
