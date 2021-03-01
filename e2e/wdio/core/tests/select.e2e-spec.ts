import { SelectPo } from '../pages/select.po';
import {
    addIsActiveClass,
    checkElementScreenshot,
    click,
    focusElement,
    getAttributeByName,
    getElementArrayLength,
    getImageTagBrowserPlatform,
    getText, isElementClickable,
    isElementDisplayed,
    mouseHoverElement,
    refreshPage,
    saveElementScreenshot,
    waitForElDisplayed,
    waitForInvisibilityOf
} from '../../driver/wdio';
import {
    addRemoveSelectOptions,
    customControlSelectOptions,
    extendedSelectOptions,
    maxHeightSelectOptions,
    mobileSelectOptions,
    optionTag,
    programmaticSelectOptions,
    selectModesCompactSelectOptions,
    selectModesDefaultSelectOptions,
    semanticModesErrorSelectOptions,
    semanticModesInformationSelectOptions,
    semanticModesSuccesSelectOptions,
    semanticModesWarningSelectOptions
} from '../fixtures/testData/select-tags';

describe('Select component:', function() {
    beforeEach(() => {
        refreshPage();
    });

    const selectPage = new SelectPo();
    const {
        selectModesExample,
        selectSemanticStatesExample,
        customControlExample,
        extendetOptionsExample,
        mobileModeExample,
        maxHeightExample,
        addRemoveOptionExample,
        programmaticControlExample,
        overlayContainer,
        buttons,
        option,
        listBox,
        options,
        displayedText
    } = selectPage;


    beforeAll(() => {
        selectPage.open();
    }, 1);

    describe('Select modes', function() {
        it('should be able to select the option for default select', () => {
            const textBefore = getText(selectModesExample + displayedText, 0);
            click(selectModesExample + buttons, 0);
            waitForElDisplayed(option, 4);
            click(options(2));
            const textAfter = getText(selectModesExample + displayedText, 0);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check for default select', () => {
            click(selectModesExample + buttons, 0);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, selectModesDefaultSelectOptions + i, optionTag, i);
            }
        });

        it('should be able to select the option for compact select', () => {
            const textBefore = getText(selectModesExample + displayedText, 1);
            click(selectModesExample + buttons, 1);
            waitForElDisplayed(option, 4);
            click(options(7));
            const textAfter = getText(selectModesExample + displayedText, 1);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check for compact select', () => {
            click(selectModesExample + buttons, 1);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, selectModesCompactSelectOptions + i, optionTag, i);
            }
        });

        it('should check disabled select', () => {
            expect(isElementClickable(selectModesExample + buttons, 2)).toBe(false);
            expect(getAttributeByName(selectModesExample + buttons, 'disabled', 2)).toBe('true');
        });
    });

    describe('Semantic state', function() {
        it('should be able to select the option Success state', () => {
            const textBefore = getText(selectSemanticStatesExample + displayedText, 0);
            click(selectSemanticStatesExample + buttons, 0);
            waitForElDisplayed(option, 4);
            click(options(18));
            const textAfter = getText(selectSemanticStatesExample + displayedText, 0);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check Success', () => {
            click(selectSemanticStatesExample + buttons, 0);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, semanticModesSuccesSelectOptions + i, optionTag, i);
            }
        });

        it('should be able to select the option Warning state', () => {
            const textBefore = getText(selectSemanticStatesExample + displayedText, 1);
            click(selectSemanticStatesExample + buttons, 1);
            waitForElDisplayed(option, 4);
            click(options(21));
            const textAfter = getText(selectSemanticStatesExample + displayedText, 1);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check Warning', () => {
            click(selectSemanticStatesExample + buttons, 1);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, semanticModesWarningSelectOptions + i, optionTag, i);
            }
        });

        it('should be able to select the option Error state', () => {
            const textBefore = getText(selectSemanticStatesExample + displayedText, 2);
            click(selectSemanticStatesExample + buttons, 2);
            waitForElDisplayed(option, 4);
            click(options(26));
            const textAfter = getText(selectSemanticStatesExample + displayedText, 2);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check Error', () => {
            click(selectSemanticStatesExample + buttons, 2);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, semanticModesErrorSelectOptions + i, optionTag, i);
            }
        });

        it('should be able to select the option Information state', () => {
            const textBefore = getText(selectSemanticStatesExample + displayedText, 3);
            click(selectSemanticStatesExample + buttons, 3);
            waitForElDisplayed(option, 4);
            click(options(29));
            const textAfter = getText(selectSemanticStatesExample + displayedText, 3);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check Information', () => {
            click(selectSemanticStatesExample + buttons, 3);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, semanticModesInformationSelectOptions + i, optionTag, i);
            }
        });
    });

    describe('Custom Control Content', function() {
        it('should be able to select the option', () => {
            const textBefore = getText(customControlExample + displayedText);
            click(customControlExample + buttons, 0);
            waitForElDisplayed(option, 4);
            click(options(34));
            const textAfter = getText(customControlExample + displayedText);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check', () => {
            click(customControlExample + buttons, 0);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, customControlSelectOptions + i, optionTag, i);
            }
        });
    });

    describe('Extended Options', function() {
        it('should be able to select the option', () => {
            const textBefore = getText(extendetOptionsExample + displayedText);
            click(extendetOptionsExample + buttons, 0);
            waitForElDisplayed(option, 4);
            click(options(38));
            const textAfter = getText(extendetOptionsExample + displayedText);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check', () => {
            click(extendetOptionsExample + buttons, 0);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, extendedSelectOptions + i, optionTag, i);
            }
        });
    });

    describe('Mobile Mode', function() {
        it('should be able to select the option', () => {
            const textBefore = getText(mobileModeExample + displayedText);
            click(mobileModeExample + buttons, 0);
            waitForElDisplayed(option);
            click(options(44));
            const textAfter = getText(mobileModeExample + displayedText);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check', () => {
            click(mobileModeExample + buttons, 0);
            waitForElDisplayed(option);
            const arrLength = getElementArrayLength(option);

            for (let i = 0; arrLength > i; i++) {
                checkElementStates(option, mobileSelectOptions + i, optionTag, i);
            }
        });
    });

    describe('Max Height', function() {
        it('should be able to select the option', () => {
            const textBefore = getText(maxHeightExample + displayedText);
            click(maxHeightExample + buttons, 0);
            waitForElDisplayed(option, 4);
            click(options(47));
            const textAfter = getText(maxHeightExample + displayedText);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check', () => {
            click(maxHeightExample + buttons, 0);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, maxHeightSelectOptions + i, optionTag, i);
            }
        });
    });

    describe('Adding and Removing Options', function() {
        beforeEach(() => {
            refreshPage();
        });

        it('should be able to select the option', () => {
            const textBefore = getText(addRemoveOptionExample + displayedText);
            click(addRemoveOptionExample + buttons, 2);
            waitForElDisplayed(option, 4);
            click(options(56));
            const textAfter = getText(addRemoveOptionExample + displayedText);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should be able to add option', () => {
            click(addRemoveOptionExample + buttons, 2);
            waitForElDisplayed(option, 4);
            const optionsCountBefore = getElementArrayLength(option);
            click(addRemoveOptionExample + buttons, 2);
            click(addRemoveOptionExample + buttons, 0);
            click(addRemoveOptionExample + buttons, 2);
            waitForElDisplayed(option, 4);
            const optionsCountAfterAdding = getElementArrayLength(option);

            expect(optionsCountBefore).toEqual(optionsCountAfterAdding - 1);
        });

        it('should be able to add remove option', () => {
            click(addRemoveOptionExample + buttons, 2);
            waitForElDisplayed(option, 4);
            const optionsCountBefore = getElementArrayLength(option);
            click(addRemoveOptionExample + buttons, 2);
            click(addRemoveOptionExample + buttons, 1);
            click(addRemoveOptionExample + buttons, 2);
            waitForElDisplayed(option, 4);
            const optionsCountAfterAdding = getElementArrayLength(option);

            expect(optionsCountBefore).toEqual(optionsCountAfterAdding + 1);
        });

        it('should have visual check', () => {
            click(addRemoveOptionExample + buttons, 2);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, addRemoveSelectOptions + i, optionTag, i);
            }
        });
    });

    describe('Programmatic Control', function() {
        it('should be able to select the option', () => {
            const textBefore = getText(programmaticControlExample + displayedText);
            click(programmaticControlExample + buttons, 3);
            waitForElDisplayed(option, 4);
            click(options(60));
            const textAfter = getText(programmaticControlExample + displayedText);
            expect(textBefore).not.toEqual(textAfter);
        });

        it('should be able to control select by buttons', () => {
            const textBefore = getText(programmaticControlExample + displayedText);
            click(programmaticControlExample + buttons, 0);
            const textAfter = getText(programmaticControlExample + displayedText);

            click(programmaticControlExample + buttons, 1);
            waitForElDisplayed(option, 4);
            click(programmaticControlExample + buttons, 2);
            waitForInvisibilityOf(overlayContainer);

            expect(textBefore).not.toEqual(textAfter);
        });

        it('should have visual check', () => {
            click(programmaticControlExample + buttons, 3);
            waitForElDisplayed(option, 4);
            const arrLength = getElementArrayLength(option);

            for (let i = 4; arrLength > i; i++) {
                checkElementStates(option, programmaticSelectOptions + i, optionTag, i);
            }
        });
    });

    describe('Check orientation', function() {
        it('should check RTL and LTR', () => {
            selectPage.checkRtlSwitch();
        });
    });

    describe('Check visual regression', function() {
        beforeEach(() => {
            refreshPage();
        });

        it('should check examples visual regression', () => {
            selectPage.saveExampleBaselineScreenshot('select-core');
            expect(selectPage.compareWithBaseline('select-core')).toEqual(0);
        });
    });

});

function checkHoverState(selector: string, tag: string, elementName: string, index: number = 0): void {
    mouseHoverElement(selector, index);
    saveElementScreenshot(selector, tag + '-' + getImageTagBrowserPlatform());
    expect(checkElementScreenshot(selector, tag + '-' + getImageTagBrowserPlatform(), {}, index))
        .toBeLessThan(2, `${elementName} button hover state mismatch`);
}

function checkFocusState(selector: string, tag: string, elementName: string, index: number = 0): void {
    focusElement(selector, index);
    saveElementScreenshot(selector, tag + '-' + getImageTagBrowserPlatform(), {}, index);
    expect(checkElementScreenshot(selector, tag + '-' + getImageTagBrowserPlatform(), {}, index))
        .toBeLessThan(2, `${elementName} button focus state mismatch`);
}

function checkActiveState(selector: string, tag: string, elementName: string, index: number = 0): void {
    addIsActiveClass(selector, index);
    saveElementScreenshot(selector, tag + '-' + getImageTagBrowserPlatform(), {}, index);
    expect(checkElementScreenshot(selector, tag + '-' + getImageTagBrowserPlatform(), {}, index))
        .toBeLessThan(2, `${elementName} button item ${index} active state mismatch`);
}

function checkElementStates(selector: string, tag: string, elementName: string, index: number = 0): void {
    checkHoverState(selector, tag + '-hover', elementName, index);
    checkFocusState(selector, tag + '-focus', elementName, index);
    checkActiveState(selector, tag + '-active', elementName, index);
}
