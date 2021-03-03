import { BaseComponentPo } from './base-component.po';
import { waitForElDisplayed } from '../../driver/wdio';

export class ThumbnailPo extends BaseComponentPo {

    url = '/thumbnail';
    root = '#page-content';

    mainImage = '.fdp-media-container img';
    mainVideo = '.fdp-media-container video';
    verticalGalleryImages = 'fdp-platform-thumbnail-basic-example fd-avatar';
    horizontalGalleryImages = 'fdp-platform-thumbnail-horizontal-example fd-avatar';
    verticalGalleryVideo = 'fdp-platform-thumbnail-video-media-example fd-avatar';

    open(): void {
        super.open(this.url);
        waitForElDisplayed(this.mainImage);
    }

    getScreenshotFolder(): object {
        return super.getScreenshotFolder(this.url);
    }

    saveExampleBaselineScreenshot(specName: string = 'thumbnail'): void {
        super.saveExampleBaselineScreenshot(specName, this.getScreenshotFolder());
    }

    compareWithBaseline(specName: string = 'thumbnail'): any {
        super.compareWithBaseline(specName, this.getScreenshotFolder());
    }
}
