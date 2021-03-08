import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  body:Element = document.querySelector('#body');
  nav:Element  = document.querySelector('.top-nav');
  cont:Element = document.querySelector('#contact');
  greenThemeButton:Element = document.querySelector('#green-theme')

  @ViewChild("menuToggler") toggler: Element;
  @ViewChild("topNav") topNav: Element;
  classOpen = false;
  togglenav() {
    this.classOpen = !this.classOpen;
  }
  changeColor(bodyColor, navColor, contentColor, buttonBg) {
    this.body.classList.toggle(bodyColor);
    this.nav.classList.toggle(navColor);
    this.cont.classList.toggle(contentColor);
    this.greenThemeButton.classList.toggle(buttonBg);
  }
  greenThemeButtonOnclick() {
    this.changeColor('grad-green-color','grad-green-color-nav','grad-green-color-contact','dark-theme-color');
  }

}



