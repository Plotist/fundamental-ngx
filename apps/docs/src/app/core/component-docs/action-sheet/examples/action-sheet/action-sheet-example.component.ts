import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetComponent, ContentDensityService, MessageToastService } from '@fundamental-ngx/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'fd-action-sheet-cosy-example',
    templateUrl: './action-sheet-example.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionSheetExampleComponent implements OnInit {
    compact$: Observable<boolean>;

    @ViewChild(ActionSheetComponent)
    actionSheetComponent: ActionSheetComponent;

    constructor(
        private _messageToastService: MessageToastService,
        private _contentDensityService: ContentDensityService
    ) {}

    ngOnInit(): void {
        this.compact$ = this._contentDensityService.contentDensity.pipe(map((density) => density === 'compact'));
    }

    actionPicked(action: string): void {
        this.openMessageToast(action);
        this.actionSheetComponent.close();
    }

    openMessageToast(action: string): void {
        const content = `${action} action performed`;
        this._messageToastService.open(content, {
            duration: 5000
        });
    }
}
