import { BaseComponentPo } from './base-component.po';
import { waitForPresent, waitForElDisplayed } from '../../driver/wdio';

export class InfoLabelPO extends BaseComponentPo {
    url = '/info-label';
    readonly root = '#page-content';

    defaultLabel = 'fdp-platform-info-label-example span';
    labelsWithTextArr = 'fdp-platform-info-label-text-example fd-info-label';
    labelsWithTextAndIconArr = 'fdp-platform-info-label-text-icon-example fd-info-label';
    labelsIconArr = 'fdp-platform-info-label-text-icon-example span i';
    labelsWithNumberOrIconArr = 'fdp-platform-info-label-numeric-icon-example fd-info-label';
    accessibilityLabelsArr = 'fdp-platform-info-label-aria-label-example span';
    accessibilityAttrArr = 'fdp-platform-info-label-aria-label-example fd-info-label';

    exampleAreaContainersArr = '.fd-doc-component';
    rtlSwitcherArr = 'rtl-switch .fd-switch__handle';

    open(): void {
        super.open(this.url);
        waitForElDisplayed(this.root);
        waitForPresent(this.defaultLabel);
    }

    getScreenshotFolder(): object {
        return super.getScreenshotFolder(this.url);
    }

    saveExampleBaselineScreenshot(specName: string = 'info-label'): void {
        super.saveExampleBaselineScreenshot(specName, this.getScreenshotFolder());
    }

    compareWithBaseline(specName: string = 'info-label'): any {
        super.compareWithBaseline(specName, this.getScreenshotFolder());
    }
}
