import { Component, OnInit } from '@angular/core';
import { AddNewsletter } from '../models/add-newsletter.model';
import { NewsletterService } from '../services/newsletter.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../category/models/category.model';

@Component({
  selector: 'app-add-newsletter',
  templateUrl: './add-newsletter.component.html',
  styleUrls: ['./add-newsletter.component.css']
})
export class AddNewsletterComponent implements OnInit{
  model: AddNewsletter;
  categories$?: Observable<Category[]>;

  constructor(private newsletterService: NewsletterService,
    private router: Router,
    private categoryService: CategoryService) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      author: '',
      isVisible: true,
      publishedDate: new Date(),
      categories: []
    }
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }

  onFormSubmit(): void{
    this.newsletterService.createNewsletter(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/newsletters');
      }
    });
  }
}
