import { Component, Input } from '@angular/core';

import { Globals } from './globals'

@Component({
  selector: 'hello',
  template: `<h1>Hello {{globals.role}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {

  constructor(private globals: Globals)
  {
    
  }

  @Input() name: string;

}
