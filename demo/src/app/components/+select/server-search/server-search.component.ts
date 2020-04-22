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
    optionData = [];

    selectedTaskTypes = ['test'];

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.thyOnSearch('');
    }

    thyOnSearch(value: string) {
        // fake api response data
        timer(100).subscribe(() => {
            this.optionData = taskTypes
                .filter(option => option.display_name.includes(value))
                .map(option => {
                    return { ...option };
                });
            const fixOption = this.selectedTaskTypes
                .filter(taskTypeValue => {
                    return taskTypeValue === 'test';
                })
                .map(_id => {
                    return {
                        display_name: '使用者需要填充的Option',
                        name: 'task',
                        _id
                    };
                });
            this.optionData = fixOption.concat(this.optionData);
        });
    }
}
