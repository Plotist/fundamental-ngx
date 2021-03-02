import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { BaseButton, ButtonType } from '../../button/base-button';
import { ButtonComponent } from '../../button/button.component';
import { Observable } from 'rxjs';
import { ContentDensityService } from '@fundamental-ngx/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fd-button-bar',
  template: `
      <button fd-button
              [type]="type"
              [glyphPosition]="glyphPosition"
              [glyph]="glyph"
              [compact]="compact$ ? (compact$ | async) : compact"
              [fdType]="fdType"
              [label]="label"
              [fdMenu]="fdMenu"
              [disabled]="disabled"
      >
          <ng-content></ng-content>
      </button>
  `
})
export class ButtonBarComponent extends BaseButton implements OnInit {
    /** Whether the element should take the whole width of the container. */
    @Input()
    @HostBinding('class.fd-bar__element--full-width')
    fullWidth = false;

    /** Whether to apply compact mode to the button. */
    @Input()
    compact: boolean = null;

    /** @hidden Observable to use if compact input not provided */
    compact$: Observable<boolean>;

    /** The type of the button. Types include:
     * 'standard' | 'positive' | 'negative' | 'attention' | 'half' | 'ghost' | 'transparent' | 'emphasized' | 'menu'.
     * Default value is set to 'transparent'
     */
    @Input()
    fdType: ButtonType = 'transparent';

    /** @hidden */
    @HostBinding('class.fd-bar__element')
    _barElement = true;

    /** @hidden */
    @ViewChild(ButtonComponent)
    _buttonComponent: ButtonComponent;

    constructor(private _contentDensityService: ContentDensityService) {
        super();
    }

    /** @hidden */
    ngOnInit(): void {
        if (this.compact === null) {
            this.compact$ = this._contentDensityService.contentDensity.pipe(
                map(density => density === 'compact')
            );
        }
    }
}
