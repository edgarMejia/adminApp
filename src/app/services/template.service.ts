import { Injectable } from '@angular/core';

@Injectable()
export class TemplateService {
    public menuStatus:Boolean; // menu status, open/close
    
    menuIsOpen() {
        return !this.menuStatus;
    }
    constructor() {}
}