import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

// Services
import { TemplateService } from '../../services/template.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collapse-menu',
  templateUrl: './collapse-menu.component.html',
  styleUrls: ['./collapse-menu.component.scss'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        visibility: 'visible',
      })),
      state('state2', style({
        height: '1px',
        visibility: 'hidden'
      })),
      transition('state2=>state1', animate('250ms ease-out')),
      transition('state1=>state2', animate('250ms ease-in')),
    ])
  ]
})
export class CollapseMenuComponent implements OnInit {

  @Input()
  private menuItems: MenuItem[];
  menuShowItems: MenuShowItem[];
  private lastSelected = -1;
  private menuStatus:any

  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    console.log(this.menuItems);
    this.menuStatus = this.templateService.menuIsOpen();
    console.log(this.menuStatus);
    this.menuShowItems = [];
    this.menuItems.forEach((val, index, array) => {
        this.menuShowItems.push({item: val, show: false});
    });
  }

  toggle(selected: MenuShowItem) {
    const index  = this.menuShowItems.indexOf(selected);
    if (this.lastSelected === index) {
      this.menuShowItems[index].show = false;
      this.lastSelected = -1;
    } else {
      this.menuShowItems[index].show = true;
      this.lastSelected = index;
    }
    for (let i = 0; i < this.menuShowItems.length; i++) {
      if (index !== i) {
        this.menuShowItems[i].show = false;
      }
    }
  
  }

}

export interface MenuItem {
  icon: string;
  url: string;
  label: string;
  submenu?: MenuItem[];
}

interface MenuShowItem {
  item: MenuItem;
  show: boolean;
}
