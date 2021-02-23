import { CoreBaseComponentPo } from './core-base-component.po';
import { waitForElDisplayed, waitForPresent } from '../../driver/wdio';

export class BreadcrumbPo extends CoreBaseComponentPo {
    private url = '/breadcrumb';
    root = '#page-content';
    links = '.fd-breadcrumb__link';
    disableLinks = '.fd-breadcrumb__item:nth-child(5)';

    open(): void {
        super.open(this.url);
        waitForElDisplayed(this.root);
        waitForPresent(this.links);
    }
}