import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {  MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarModule,SidebarModule,  MegaMenuModule, CommonModule    ,RouterLink, RouterLinkActive 
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  items = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      root: true
    },
    {
      label: 'Image',
      icon: 'pi pi-fw pi-users',
      root: true,
      items: [
        [

          {items:[

            {
              label: 'photoViewer',
              icon: 'pi pi-fw pi-user',
              route: '/imageUtil/photoViewer'
            },
            {
              label: 'animate',
              icon: 'pi pi-fw pi-user',
              route: '/imageUtil/animate'
            },
            {
              label: 'Security',
              icon: 'pi pi-fw pi-lock',
              route: '/imageUtil/security'
            }
          ]

          }
      ]
        
      ]
    },
    // {
    //   label: 'Settings',
    //   icon: 'pi pi-fw pi-cog',
    //   items: [
    //     {
    //       label: 'Account',
    //       icon: 'pi pi-fw pi-user',
    //       route: '/settings/account'
    //     },
    //     {
    //       label: 'Security',
    //       icon: 'pi pi-fw pi-lock',
    //       route: '/settings/security'
    //     }
    //   ]
    // },
    {
      label: 'Help',
      icon: 'pi pi-fw pi-question',
      route: '/help'
    }
  ];
}