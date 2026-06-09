import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SitemapComponent } from './features/navigation/sitemap.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SitemapComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
