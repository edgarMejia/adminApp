import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// Services
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Output()
  menuToggle: EventEmitter<number> = new EventEmitter();
  menuStatus: boolean = false;

  constructor(private templateService: TemplateService) { }
  ngOnInit() {

  }

  onClick() {
    this.templateService.menuStatus = !this.templateService.menuStatus; // to get the menu status
    this.menuToggle.emit();
    !this.menuStatus;
  }

}
