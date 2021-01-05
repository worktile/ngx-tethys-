import { Component, Optional, SkipSelf } from '@angular/core';

@Component({
    selector: 'thy-timeline-custom-horizontal-example',
    templateUrl: './custom-horizontal.component.html'
})
export class ThyTimelineCustomHorizontalExampleComponent {
    public thyColor = 'primary';

    public thyReverse = 'sequence';

    constructor() {}
}
