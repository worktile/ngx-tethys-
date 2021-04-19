import { Component, Directive, ElementRef, Renderer2, Input, HostBinding, OnInit } from '@angular/core';
import { UpdateHostClassService } from 'ngx-tethys/core';

export type ThyNavType = 'primary' | 'secondary' | 'thirdly' | 'secondary-divider';
export type ThyNavSize = '' | 'sm';
export type ThyNavHorizontal = '' | 'left' | 'center' | 'right';

const navTypeClassesMap = {
    primary: ['nav-primary'],
    secondary: ['nav-secondary'],
    thirdly: ['nav-thirdly'],
    'secondary-divider': ['nav-secondary-divider']
};

const navSizeClassesMap = {
    sm: 'nav-sm'
};

const navHorizontalClassesMap = {
    left: '',
    center: 'justify-content-center',
    right: 'justify-content-end'
};

@Component({
    selector: 'thy-nav',
    template: `
        <ng-content></ng-content>
    `,
    host: {
        class: 'thy-nav'
    },
    providers: [UpdateHostClassService]
})
export class ThyNavComponent implements OnInit {
    private _type: ThyNavType;
    private _size: ThyNavSize;
    private _horizontal: ThyNavHorizontal;
    private _initialized = false;

    @Input()
    set thyType(type: ThyNavType) {
        this._type = type || 'primary';
        if (this._initialized) {
            this._updateClasses();
        }
    }

    @Input()
    set thySize(size: ThyNavSize) {
        this._size = size;
        if (this._initialized) {
            this._updateClasses();
        }
    }

    @Input()
    set thyHorizontal(horizontal: ThyNavHorizontal) {
        this._horizontal = horizontal;
        if (this._initialized) {
            this._updateClasses();
        }
    }

    @Input()
    set thyVertical(value: boolean) {
        this._isVertical = value;
    }

    @Input()
    set thyFill(value: boolean) {
        this._isFill = value;
    }

    @HostBinding('class.thy-nav--vertical') _isVertical = false;

    @HostBinding('class.thy-nav--fill') _isFill = false;

    private _updateClasses() {
        let classNames: string[] = [];
        if (navTypeClassesMap[this._type]) {
            classNames = [...navTypeClassesMap[this._type]];
        }
        if (navSizeClassesMap[this._size]) {
            classNames.push(navSizeClassesMap[this._size]);
        }
        if (navHorizontalClassesMap[this._horizontal]) {
            classNames.push(navHorizontalClassesMap[this._horizontal]);
        }
        this.updateHostClass.updateClass(classNames);
    }

    constructor(private updateHostClass: UpdateHostClassService, private elementRef: ElementRef) {
        this.updateHostClass.initializeElement(elementRef.nativeElement);
    }

    ngOnInit() {
        this._initialized = true;
        this._updateClasses();
    }
}
