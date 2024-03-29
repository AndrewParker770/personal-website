import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navbarWidth = '10em'

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 600px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
          // hide stuff   
          document.documentElement.style.setProperty('--navbar-width', '4em');    
          this.navbarWidth = '4em' 
      } else {
          // show stuff
          document.documentElement.style.setProperty('--navbar-width', '10em');
          this.navbarWidth = '10em'
      }
    });
  }
}
