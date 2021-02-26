import { Component, OnInit } from '@angular/core';
import {
    ContentDensity,
    ContentDensityService
} from '@fundamental-ngx/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'fd-content-density-example',
    templateUrl: './content-density-example.component.html',
    providers: [ContentDensityService]
})
export class ContentDensityExampleComponent implements OnInit {
    selectedDensity: ContentDensity;

    compact$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private _contentDensityService: ContentDensityService) {}

    ngOnInit(): void {
        this.selectedDensity = 'cozy';

        this._contentDensityService.contentDensity.subscribe(val => {
            this.compact$.next(val === 'compact');
        });
    }

    onChange(): void {
        this._contentDensityService.contentDensity.next(this.selectedDensity);
    }
}
