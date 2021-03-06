import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickViewComponent } from './quick-view/quick-view.component';
import { QuickViewTitleComponent } from './quick-view-title/quick-view-title.component';
import { QuickViewSubheaderComponent } from './quick-view-subheader/quick-view-subheader.component';
import { QuickViewSubheaderTitleComponent } from './quick-view-subheader-title/quick-view-subheader-title.component';
import { QuickViewSubheaderSubtitleComponent } from './quick-view-subheader-subtitle/quick-view-subheader-subtitle.component';
import { QuickViewGroupComponent } from './quick-view-group/quick-view-group.component';
import { QuickViewGroupTitleComponent } from './quick-view-group-title/quick-view-group-title.component';
import { QuickViewGroupItemComponent } from './quick-view-group-item/quick-view-group-item.component';
import { QuickViewGroupItemLabelComponent } from './quick-view-group-item-label/quick-view-group-item-label.component';
import { QuickViewGroupItemContentComponent } from './quick-view-group-item-content/quick-view-group-item-content.component';
import { TitleModule } from '../title/title.module';
import { BarModule } from '../bar/bar.module';
import { FormGroupModule } from '../form/form-group/form-group.module';
import { FormItemModule } from '../form/form-item/form-item.module';
import { FormLabelModule } from '../form/form-label/form-label.module';
import { PopoverModule } from '../popover/popover.module';


@NgModule({
    imports: [CommonModule, TitleModule, BarModule, FormGroupModule, FormItemModule, FormLabelModule, PopoverModule],
    declarations: [
        QuickViewComponent,
        QuickViewTitleComponent,
        QuickViewSubheaderComponent,
        QuickViewSubheaderTitleComponent,
        QuickViewSubheaderSubtitleComponent,
        QuickViewGroupComponent,
        QuickViewGroupTitleComponent,
        QuickViewGroupItemComponent,
        QuickViewGroupItemLabelComponent,
        QuickViewGroupItemContentComponent
    ],
    exports: [
        QuickViewComponent,
        QuickViewTitleComponent,
        QuickViewSubheaderComponent,
        QuickViewSubheaderTitleComponent,
        QuickViewSubheaderSubtitleComponent,
        QuickViewGroupComponent,
        QuickViewGroupTitleComponent,
        QuickViewGroupItemComponent,
        QuickViewGroupItemLabelComponent,
        QuickViewGroupItemContentComponent
    ]
})
export class QuickViewModule {}
