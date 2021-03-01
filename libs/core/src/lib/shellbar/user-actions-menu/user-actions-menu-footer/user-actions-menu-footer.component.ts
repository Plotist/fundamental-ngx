import { Attribute, ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

export type Position = 'left' | 'middle' | 'right';

@Component({
    selector: 'fd-user-actions-menu-footer',
    template: `<ng-content></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class UserActionsMenuFooterComponent {
  @Input()
  position: Position = 'left';

  @HostBinding('attr.class')
  get css(): string {
      return `fd-bar__${this.position}`;
  }
}
