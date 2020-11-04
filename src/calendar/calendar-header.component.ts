import { ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { DateRangeItemInfo } from '../date-range/date-range.class';
import { FunctionProp } from '../util/helpers';
import { endOfMonth, getUnixTime, startOfMonth, TinyDate } from '../util/tiny-date';
import { fromUnixTime, getMonth, getYear } from 'date-fns';

@Component({
    selector: 'thy-calendar-header',
    templateUrl: './calendar-header.component.html'
})
export class ThyCalendarHeaderComponent implements OnInit {
    @HostBinding('class.thy-calendar-full-header-container') className = true;

    // @Input() mode: 'month' | 'year' = 'month';

    // @Input() fullscreen = true;

    @Input()
    set currentDate(value: TinyDate) {
        this.setDate(value);
    }

    @Input() operationRender: FunctionProp<TemplateRef<any>>;

    // @Output() readonly modeChange: EventEmitter<'month' | 'year'> = new EventEmitter();

    @Output() readonly yearChange: EventEmitter<number> = new EventEmitter();

    @Output() readonly monthChange: EventEmitter<number> = new EventEmitter();

    @Output() readonly dateRangeChange: EventEmitter<DateRangeItemInfo> = new EventEmitter();

    public dateRanges: DateRangeItemInfo[] = [
        {
            key: 'month',
            text: getYear(new Date()) + '年' + (getMonth(new Date()) + 1) + '月',
            begin: getUnixTime(startOfMonth(new Date())),
            end: getUnixTime(endOfMonth(new Date())),
            timestamp: {
                interval: 1,
                unit: 'month'
            }
        }
    ];

    public date: DateRangeItemInfo;

    public markMonth: number;

    public markYear: number;

    public currentMonth: number;

    public currentYear: number;

    private _currentDate: TinyDate;

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.initialMarkMonth();
    }

    initialMarkMonth() {
        this.markMonth = getMonth(new Date());
        this.markYear = getYear(new Date());
    }

    onChangeMonth(month: DateRangeItemInfo) {
        const currentMonth = fromUnixTime(month.begin).getMonth();
        this.currentMonth = currentMonth;
        this.monthChange.emit(this.currentMonth);
    }

    onChangeYear(year: DateRangeItemInfo) {
        const currentYear = fromUnixTime(year.begin).getFullYear();
        this.currentYear = currentYear;
        this.yearChange.emit(this.currentYear);
    }

    onChangeRange(dateRange: DateRangeItemInfo) {
        this.onChangeYear(dateRange);
        this.onChangeMonth(dateRange);
        this.dateRangeChange.emit(dateRange);
    }

    backToday() {
        this.currentMonth = this.markMonth;
        this.date = { ...this.dateRanges[0] };
        this.onChangeRange(this.date);
        this.cdr.detectChanges();
    }

    setDate(value: TinyDate) {
        if (value.getMonth() !== getMonth(new Date()) || value.getYear() !== getYear(new Date())) {
            this._currentDate = value;
            const dateRange = {
                ...this.dateRanges[0],
                key: 'exception',
                begin: getUnixTime(startOfMonth(this._currentDate.nativeDate)),
                end: getUnixTime(endOfMonth(this._currentDate.nativeDate))
            };
            this.date = dateRange;
            this.onChangeRange(dateRange);
        } else {
            this.backToday();
        }
    }
}
