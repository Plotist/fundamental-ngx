import { BreadcrumbPo } from '../pages/breadcrumb.po';
import {
    checkElementScreenshot,
    getElementArrayLength,
    isElementClickable,
    mouseHoverElement,
    refreshPage, saveElementScreenshot,
    scrollIntoView, waitForPresent
} from '../../driver/wdio';

import {
    linksExample, linksHoverState
} from '../fixtures/testData/breadcrumb.tags';


describe('Breadcrumb test suite:', function() {

    const breadcrumbPage: BreadcrumbPo = new BreadcrumbPo();
    const { links, disabledLinks } = breadcrumbPage;

    beforeAll(() => {
        breadcrumbPage.open();
    }, 1);

    afterEach(() => {
        refreshPage();
        waitForPresent(links);
    }, 1);

    it('should check links', () => {
        const linksLength = getElementArrayLength(links);
        for (let i = 0; i < linksLength; i++) {
            scrollIntoView(links, i);
            expect(isElementClickable(links, i)).toBe(true);
            checkLinkHoverState(links, linksExample + linksHoverState + '-' + i, 'breadcrumb-links', i);
        }
    });

    it('should check disable links', () => {
        const disabledLinksLength = getElementArrayLength(disabledLinks);
        for (let i = 0; i < disabledLinksLength; i++) {
            scrollIntoView(disabledLinks, i);
            expect(isElementClickable(disabledLinks, i)).toBe(false);
        }
    });

    describe('Check visual regression', function() {

        it('should check examples visual regression', () => {
            breadcrumbPage.saveExampleBaselineScreenshot('breadcrumb');
            expect(breadcrumbPage.compareWithBaseline('breadcrumb')).toBeLessThan(1);
        });
    });
});

function checkLinkHoverState(selector: string, tag: string, linkName: string, index: number = 0): void {
    mouseHoverElement(selector, index);
    saveElementScreenshot(selector, tag);
    expect(checkElementScreenshot(selector, tag, {}, index))
        .toBeLessThan(2, `${linkName} link hover state mismatch`);
}


