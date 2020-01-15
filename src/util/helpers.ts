import { TemplateRef } from '@angular/core';
import { coerceBooleanProperty, coerceCssPixelValue, _isNumberValue } from '@angular/cdk/coercion';

export function inputValueToBoolean(value: boolean | string): boolean {
    return value === '' || (value && value !== 'false');
}

export function isUndefined(value: any) {
    return value === undefined;
}

export function isNull(value: any) {
    return value === null;
}

export function isUndefinedOrNull(value: any) {
    return isUndefined(value) || isNull(value);
}

export function isArray(value: any): boolean {
    return value && baseGetTag(value) === '[object Array]';
}

export function isEmpty(value: any): boolean {
    return !(isArray(value) && value.length > 0);
}

export function isString(value: any): boolean {
    return value && baseGetTag(value) === '[object String]';
}

function isObjectLike(value: any) {
    return typeof value === 'object' && value !== null;
}

function baseGetTag(value: any) {
    const objectProto = Object.prototype;
    const hasOwnProperty = objectProto.hasOwnProperty;
    const toString = objectProto.toString;
    const symToStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : undefined;

    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    if (!(symToStringTag && symToStringTag in Object(value))) {
        return toString.call(value);
    }
    const isOwn = hasOwnProperty.call(value, symToStringTag);
    const tag = value[symToStringTag];
    let unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    } catch (e) {}

    const result = toString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}

export function isNumber(value: any) {
    return typeof value === 'number' || (isObjectLike(value) && baseGetTag(value) === '[object Number]');
}

export function isObject(value: any) {
    // Avoid a V8 JIT bug in Chrome 19-20.
    // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
    const type = typeof value;
    return !!value && (type === 'object' || type === 'function');
}

export function isFunction(value: any) {
    const type = typeof value;
    return !!value && type === 'function';
}

export function isDate(value: any) {
    const type = typeof value;
    return !!value && type === 'object' && !!value.getTime;
}

export function coerceArray<T>(value: T | T[]): T[] {
    return Array.isArray(value) ? value : [value];
}

export function get(object: any, path: string, defaultValue?: any) {
    const paths = path.split('.');
    let result = object[paths.shift()];
    while (result && paths.length) {
        result = result[paths.shift()];
    }
    return result === undefined ? defaultValue : result;
}

export function set(object: any, path: string, value: any) {
    if (object == null) {
        return object;
    }
    const paths = path.split('.');
    let index = -1;
    const length = paths.length;
    const lastIndex = length - 1;
    let nested = object;
    while (nested !== null && ++index < length) {
        const key = paths[index];
        if (isObject(nested)) {
            if (index === lastIndex) {
                nested[key] = value;
                nested = nested[key];
                break;
            } else {
                if (nested[key] == null) {
                    nested[key] = {};
                }
            }
        }
        nested = nested[key];
    }
    return object;
}

export function isBoolean(value: any) {
    return value === true || value === false || (isObjectLike(value) && baseGetTag(value) === '[object Boolean]');
}

export function fromArray(value: any): any[] {
    if (Array.from && isFunction(Array.from)) {
        return Array.from(value);
    } else {
        return Array.prototype.slice.call(value);
    }
}

export function htmlElementIsEmpty(element: HTMLElement) {
    if (element && element.childNodes) {
        const nodes = element.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node.nodeType === Node.ELEMENT_NODE && (node as HTMLElement).outerHTML.toString().trim().length !== 0) {
                return false;
            } else if (node.nodeType === Node.TEXT_NODE && node.textContent.toString().trim().length !== 0) {
                return false;
            } else if (node.nodeType !== Node.COMMENT_NODE) {
                return false;
            }
        }
    }
    return true;
}

export function hexToRgb(hexValue: string, alpha?: number): string {
    const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const hex = hexValue.replace(rgx, (m: any, r: any, g: any, b: any) => r + r + g + g + b + b);
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const resultR = parseInt(rgb[1], 16);
    const resultG = parseInt(rgb[2], 16);
    const resultB = parseInt(rgb[3], 16);
    if (alpha) {
        return `rgba(${resultR}, ${resultG}, ${resultB}, ${alpha})`;
    } else {
        return `rgb(${resultR}, ${resultG}, ${resultB})`;
    }
}

export function formatDate(date: Date | number): number {
    if (isNumber(date)) {
        if (date.toString().length === 10) {
            return date as number;
        } else {
            return parseInt(((date as number) / 1000).toFixed(0), 10);
        }
    } else {
        return parseInt(((date as Date).getTime() / 1000).toFixed(0), 10);
    }
}

export function clamp(value: number, min = 0, max = 100) {
    return Math.max(min, Math.min(max, value));
}

export function keyBy<T>(array: T[], key: T extends object ? keyof T : never): { [key: string]: T } {
    const result: { [key: string]: T } = {};
    array.forEach(item => {
        const keyValue = item[key];
        (result as any)[keyValue] = item;
    });
    return result;
}

export function indexKeyBy<T>(array: T[], key: T extends object ? keyof T : never): { [key: string]: number } {
    const result: { [key: string]: number } = {};
    array.forEach((item, index) => {
        const keyValue = item[key];
        (result as any)[keyValue] = index;
    });
    return result;
}

function upperFirst(string: string): string {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export function camelCase(values: string[]): string {
    if (isArray(values)) {
        return values.reduce((result, word, index) => {
            word = word.toLowerCase();
            return result + (index ? upperFirst(word) : word);
        }, '');
    } else {
        return;
    }
}

export function generateRandomStr() {
    return Math.random()
        .toString(36)
        .substring(2);
}

export function isNonEmptyString(value: any): boolean {
    return typeof value === 'string' && value !== '';
}

export function isTemplateRef(value: any): boolean {
    return value instanceof TemplateRef;
}

export function toBoolean(value: boolean | string): boolean {
    return coerceBooleanProperty(value);
}
export type FunctionProp<T> = (...args: any[]) => T;
export function toNumber(value: number | string): number;
export function toNumber<D>(value: number | string, fallback: D): number | D;
export function toNumber(value: number | string, fallbackValue: number = 0): number {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}

export function toCssPixel(value: number | string): string {
    return coerceCssPixelValue(value);
}

export function valueFunctionProp<T>(prop: FunctionProp<T>, ...args: any[]): T {
    return typeof prop === 'function' ? prop(...args) : prop;
}

export function propDecoratorFactory<T, D>(
    name: string,
    fallback: (v: T) => D
): (target: any, propName: string) => void {
    function propDecorator(target: any, propName: string, originalDescriptor?: TypedPropertyDescriptor<any>): any {
        const privatePropName = `$$__${propName}`;

        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            //   warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
        }

        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true
        });

        return {
            get(): string {
                return originalDescriptor && originalDescriptor.get
                    ? originalDescriptor.get.bind(this)()
                    : this[privatePropName];
            },
            set(value: T): void {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(fallback(value));
                }
                this[privatePropName] = fallback(value);
            }
        };
    }

    return propDecorator;
}
