import {OpaqueToken} from '@angular/core';

export const JQ_TOKEN = new OpaqueToken('jQuery');

export function jqueryFactory() {
    return window['jQuery'];
}

export const JQUERY_PROVIDER = {provide: JQ_TOKEN, useFactory: jqueryFactory};
