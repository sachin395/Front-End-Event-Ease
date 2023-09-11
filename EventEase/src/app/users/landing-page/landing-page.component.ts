import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const signs = this.el.nativeElement.querySelectorAll('x-sign');

    const randomIn = (min: number, max: number) => (
      Math.floor(Math.random() * (max - min + 1) + min)
    );

    const mixupInterval = (el: any) => {
      const ms = randomIn(2000, 4000);
      this.renderer.setStyle(el, '--interval', `${ms}ms`);
    };

    signs.forEach((el: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
      mixupInterval(el);
      el.addEventListener('webkitAnimationIteration', () => {
        mixupInterval(el);
      });
    });
  }
}
