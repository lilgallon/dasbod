import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { MenubarComponent } from '../shared/components/menubar/menubar.component';
import { Breadcrumb } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarComponent, Breadcrumb],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private readonly primeng: PrimeNG) {
    this.primeng.theme.set({
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities',
        },
      },
    });
  }

  public breadcrumb: { items: MenuItem[]; home: MenuItem } = {
    items: [{ label: 'TODO' }],
    home: { icon: 'pi pi-home', routerLink: '/' },
  };
}
