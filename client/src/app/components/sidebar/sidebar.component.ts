import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/placements', title: 'Placements',  icon:'content_paste', class: '' },
    { path: '/internships', title: 'Internships',  icon:'library_books', class: '' },
    { path: '/competitions', title: 'Competitions',  icon:'bubble_chart', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/useraccount', title: 'Account Settings',  icon:'settings', class: '' },
    {path: '/login', title:'Logout', icon:'logout', class: '' }

  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
  };
}
