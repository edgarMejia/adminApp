import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../collapse-menu/collapse-menu.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-split-layout',
  templateUrl: './split-layout.component.html',
  styleUrls: ['./split-layout.component.scss'],
  animations: [
    trigger('changeState', [
      state('open', style({
        width: '200px'
      })),
      state('closed', style({
        width: '100px'
      })),
      state('reduce-padding', style({
        paddingLeft: '100px'
      })),
      state('add-padding', style({
        paddingLeft: '200px'
      })),
      transition('open=>closed', animate('250ms ease-out')),
      transition('closed=>open', animate('250ms ease-in')),
      transition('reduce-padding=>add-padding', animate('250ms ease-in')),
      transition('add-padding=>reduce-padding', animate('250ms ease-out')),
    ])
  ]
})
export class SplitLayoutComponent implements OnInit {

  currentState = true;
  menu: MenuItem[] = [
    {
      icon: 'fa-file',
      url: '#',
      label: 'Opcion 1',
      submenu: [
        {
          icon: 'fa-file',
          url: '#',
          label: 'sub menu 1'
        },
        {
          icon: 'fa-file',
          url: '#',
          label: 'sub menu 2'
        }
      ]
    },
    {
      icon: 'fa-file',
      url: '#',
      label: 'Opcion 2',
      submenu: [
        {
          icon: 'fa-file',
          url: '#',
          label: 'sub menu 1'
        },
        {
          icon: 'fa-file',
          url: '#',
          label: 'sub menu 2'
        }
      ]
    },
    {
      icon: 'fa-file',
      url: '#',
      label: 'Opcion 3',
      submenu: [
        {
          icon: 'fa-file',
          url: '#',
          label: 'sub menu 1'
        },
        {
          icon: 'fa-file',
          url: '#',
          label: 'sub menu 2'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onMenuToggle() {
    this.currentState = !this.currentState;
  }

}
