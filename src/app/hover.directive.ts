import { Directive, AfterViewInit, ElementRef, HostBinding,
    HostListener} from '@angular/core';

@Directive({ selector: '[appHover]' })

export class AppHoverDirective implements AfterViewInit {
  @HostBinding('style.color') public color = 'blue';

  @HostListener('mouseenter') public onEnter() {
    this.el.nativeElement.style.backgroundColor = 'lightgray';
  }

  @HostListener('mouseleave') public onLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

  constructor(private el: ElementRef) { }

  /**
   * Initializes directive.
   * @memberOf TreeViewDirective
   */
  public ngAfterViewInit(): void {
    console.log('AfterViewInit directive works');
  }
}
