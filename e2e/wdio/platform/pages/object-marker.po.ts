import { BaseComponentPo } from './base-component.po';
import { waitForElDisplayed } from '../../driver/wdio';

export class ObjectMarkerPo extends BaseComponentPo {
    private url = '/object-marker';
    root = '#page-content';

    marker = 'component-example .fd-object-marker';
    iconOnlyMarkers = 'fdp-object-marker-example span';
    clickableMarkers = 'fdp-object-marker [ng-reflect-clickable="true"]';

    open(): void {
        super.open(this.url);
        waitForElDisplayed(this.root);
    }
}
