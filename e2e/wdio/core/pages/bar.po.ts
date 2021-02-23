import { CoreBaseComponentPo } from './core-base-component.po';
import { waitForElDisplayed, waitForPresent } from '../../driver/wdio';

export class BarPo extends CoreBaseComponentPo {
    private url = '/bar';
    root = '#page-content';
    arrowButtons = '.fd-bar__left button';
    leftSections = '.fd-bar__left fd-bar-element';
    middleSections = '.fd-bar__middle fd-bar-element';
    subMiddleSection = '.fd-bar--header-with-subheader  ~ .fd-bar--subheader .fd-bar__middle';
    rightSections = '.fd-bar__right fd-bar-element:nth-child(1)';
    pictures = '.fd-bar__right fd-bar-element ~ fd-bar-element';
    saveCancelButtons = 'fd-button-bar button span';

    open(): void {
        super.open(this.url);
        waitForElDisplayed(this.root);
        waitForPresent(this.arrowButtons);
    }
}