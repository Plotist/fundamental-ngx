import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    Input,
    QueryList,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';

import { PopoverComponent, Placement } from '../../../../lib/popover/public_api';
import { BasePopoverClass } from '../../../popover/base/base-popover.class';
import { ShellbarUser } from '../../model/shellbar-user';
import { UserActionsMenuFooterComponent } from '../user-actions-menu-footer/user-actions-menu-footer.component';
import { UserActionsMenuHeaderComponent } from '../user-actions-menu-header/user-actions-menu-header.component';
import { UserActionsMenuItemComponent } from '../user-actions-menu-item/user-actions-menu-item.component';

@Component({
    selector: 'fd-user-actions-menu',
    templateUrl: './user-actions-menu.component.html',
    styleUrls: ['./user-actions-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserActionsMenuComponent extends BasePopoverClass {
    /** The user data. */
    @Input()
    user: ShellbarUser;

    /** Show fullName from user data, if it exists */
    @Input()
    showName = true;

    /** Maximum width of menu in px */
    @Input()
    maxWidth = 200;

    /** The placement of the popover. It can be one of: top, top-start, top-end, bottom,
     *  bottom-start, bottom-end, right, right-start, right-end, left, left-start, left-end. */
    @Input()
    placement: Placement = 'bottom-end';

    /** Display menu in compact mode */
    @Input()
    compact = false;

    /** @hidden */
    @ViewChild(PopoverComponent)
    _menu: PopoverComponent;

    /** @hidden */
    @ContentChild(UserActionsMenuHeaderComponent)
    _menuHeader: UserActionsMenuHeaderComponent;

    /** @hidden */
    @ContentChild(UserActionsMenuFooterComponent)
    _menuFooter: UserActionsMenuFooterComponent;

    /** @hidden */
    @ContentChildren(UserActionsMenuItemComponent)
    _items: QueryList<UserActionsMenuItemComponent>;

    /** @hidden */
    get _menuClass(): string {
        return 'fd-user-actions-menu';
    }

    /** @hidden */
    get _canOpen(): boolean {
        return !this.disabled && ((this.showName && Boolean(this.user?.fullName)) || this._items.length > 0);
    }

    /** @hidden */
    get _bodyClass(): string[] {
        if (this.compact) {
            return [this._menuClass, `${this._menuClass}__compact`];
        }

        return [this._menuClass];
    }
}
