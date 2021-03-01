import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../../icon/public_api';
import { PopoverModule } from '../../popover/public_api';
import { ListModule } from '../../list/public_api';
import { TitleModule } from '../../title/public_api';
import { AvatarModule } from '../../avatar/public_api';
import { DialogModule } from '../../dialog/public_api';
import { ButtonModule } from '../../button/public_api';

import { UserActionsMenuComponent } from './user-actions-menu/user-actions-menu.component';
import { UserActionsMenuItemComponent } from './user-actions-menu-item/user-actions-menu-item.component';
import { UserActionsMenuFooterComponent } from './user-actions-menu-footer/user-actions-menu-footer.component';
import { UserActionsMenuHeaderComponent } from './user-actions-menu-header/user-actions-menu-header.component';

@NgModule({
  declarations: [UserActionsMenuComponent, UserActionsMenuItemComponent, UserActionsMenuFooterComponent, UserActionsMenuHeaderComponent],
  exports: [UserActionsMenuComponent, UserActionsMenuItemComponent, UserActionsMenuFooterComponent, UserActionsMenuHeaderComponent],
  imports: [
    CommonModule,
    PopoverModule,
    IconModule,
    AvatarModule,
    ListModule,
    TitleModule,
    DialogModule,
    ButtonModule
  ]
})
export class UserActionsMenuModule { }
