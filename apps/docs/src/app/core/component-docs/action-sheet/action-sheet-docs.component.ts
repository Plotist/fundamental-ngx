import { Component } from '@angular/core';

import * as ActionSheetSrc from '!raw-loader!./examples/action-sheet/action-sheet-example.component.html';
import * as ActionSheetSrcTs from '!raw-loader!./examples/action-sheet/action-sheet-example.component.ts';
import * as actionSheetMobileSrc from '!raw-loader!./examples/action-sheet-mobile/action-sheet-mobile-example.component.html';
import * as actionSheetMobileSrcTs from '!raw-loader!./examples/action-sheet-mobile/action-sheet-mobile-example.component.ts';
import { ExampleFile } from '../../../documentation/core-helpers/code-example/example-file';

@Component({
    selector: 'app-action-sheet',
    templateUrl: './action-sheet-docs.component.html'
})
export class ActionSheetDocsComponent {
    actionSheetExample: ExampleFile[] = [
        {
            language: 'html',
            code: ActionSheetSrc,
            fileName: 'action-sheet-example'
        },
        {
            language: 'typescript',
            code: ActionSheetSrcTs,
            fileName: 'action-sheet-example',
            component: 'ActionSheetExampleComponent'
        }
    ];

    actionSheetMobileExample: ExampleFile[] = [
        {
            language: 'html',
            code: actionSheetMobileSrc,
            fileName: 'action-sheet-mobile-example'
        },
        {
            language: 'typescript',
            code: actionSheetMobileSrcTs,
            fileName: 'action-sheet-mobile-example',
            component: 'ActionSheetMobileExampleComponent'
        }
    ];
}
