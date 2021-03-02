import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input, OnDestroy, OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { ActionSheetComponent } from '../../action-sheet/action-sheet.component';
import { ContentDensityService } from '../../utils/public_api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'fd-wizard-step-indicator',
    templateUrl: './wizard-step-indicator.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardStepIndicatorComponent implements OnInit, OnDestroy {
    /**
     * The icon to use for this step.
     */
    @Input()
    glyph: string;

    /**
     * Whether or not the step indicator (specifically, the action sheet) is compact.
     */
    @Input()
    compact: boolean = null;

    /**
     * Event emitted when this step indicator is clicked.
     */
    @Output()
    stepIndicatorItemClicked = new EventEmitter<WizardStepComponent>();

    @ViewChild(ActionSheetComponent)
    actionSheet: ActionSheetComponent;

    /** @hidden */
    stackedItems: WizardStepComponent[];

    /** @hidden */
    private _subscriptions = new Subscription();

    constructor(private _cdRef: ChangeDetectorRef, private _contentDensityService: ContentDensityService) {}

    /** @hidden */
    ngOnInit(): void {
        if (this.compact === null) {
            this._subscriptions.add(this._contentDensityService.contentDensity.subscribe(density => {
                this.compact = density === 'compact';
                this._cdRef.detectChanges();
            }))
        }
    }

    /** @hidden */
    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

    /** @hidden */
    stepItemClicked(step?: WizardStepComponent, event?: MouseEvent): void {
        if (this.actionSheet) {
            this.actionSheet.close();
        }
        event.preventDefault();
        this.stepIndicatorItemClicked.emit(step);
    }

    /** @hidden */
    setStackedItems(items: WizardStepComponent[]): void {
        this.stackedItems = items;
        this._cdRef.detectChanges();
    }
}
