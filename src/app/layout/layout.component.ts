import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/list-datafiles', title: 'File List',  icon:'content_paste', class: '' },
];
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

      menuItems: any[];

      constructor() { }

      ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      }
      isMobileMenu() {
          if ($(window).width() > 991) {
              return false;
          }
          return true;
      }
    }
