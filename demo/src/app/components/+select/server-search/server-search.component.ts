import {
    Component,
    ViewEncapsulation,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    Renderer2,
    Output,
    EventEmitter,
    TemplateRef,
    ChangeDetectorRef
} from '@angular/core';
import { taskTypes } from '../mock-data';
import { timer } from 'rxjs';

@Component({
    selector: 'custom-select-server-search',
    templateUrl: './server-search.component.html'
})
export class CustomSelectServerSearchComponent implements OnInit {
    optionData = taskTypes;

    selectedTaskType: string;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.selectedTaskType = this.optionData[0].name;
    }

    thyOnSearch(value: string) {
        timer(100).subscribe(() => {
            this.optionData = taskTypes.filter(option => option.display_name.includes(value));
        });
    }
}
