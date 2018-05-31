import { ElementRef } from '@angular/core';

export class ThySlideOption {
    key?: string;
    from?: string; // 'left','right','top','bottom'
    class?: string;
}

export const thySlideOptionDefaults: ThySlideOption = {
    from: 'right', // 'left','right','top','bottom'
    class: 'thy-slide',
};
