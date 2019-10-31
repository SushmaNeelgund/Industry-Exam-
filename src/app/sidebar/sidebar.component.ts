import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  visibleSidebar1;
  collapsed: boolean;
  showMenu: string;
  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }
  sidebarhide() {
    this.visibleSidebar1 = true;
  }
onToggle() {
    this.collapsed = !this.collapsed;
  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  sidebar1() {
    this.visibleSidebar1 = false;
  }
  changeLang(language: string) {
    this.translate.use(language);
  }
}
