import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/admin/placements', title: 'Placements',  icon:'work', class: '' },
    { path: '/admin/internships', title: 'Internships',  icon:'laptop', class: '' },
    { path: '/admin/competitions', title: 'Competitions',  icon:'event', class: '' },
    { path: '/studentdetails', title: 'Students',  icon:'people', class: '' },
    { path: '/admin/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    {path: '/admin/manageaccount', title:'Manage Account', icon:'settings', class: ''},
    {path: '/login', title:'Logout', icon:'logout', class: '' }
];


@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

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
