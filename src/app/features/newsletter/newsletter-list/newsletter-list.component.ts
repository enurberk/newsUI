import { Component, OnInit } from '@angular/core';
import { NewsletterService } from '../services/newsletter.service';
import { Observable } from 'rxjs';
import { Newsletter } from '../models/newsletter.model';

@Component({
  selector: 'app-newsletter-list',
  templateUrl: './newsletter-list.component.html',
  styleUrls: ['./newsletter-list.component.css']
})
export class NewsletterListComponent implements OnInit{

  newsletters$?: Observable<Newsletter[]>;


  constructor(private newsletterService: NewsletterService) {
    
  }

  ngOnInit(): void {
    this.newsletters$ = this.newsletterService.getAllNewsletter();
  }

}
