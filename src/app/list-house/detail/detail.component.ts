import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListHouseService } from '../list-house.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  slug: string = '';
  houseDetail: any;
  isLoading: boolean = false;
  constructor(
    private activateRoute: ActivatedRoute,
    private houseService: ListHouseService,
    private meta: Meta,
    private title: Title
  ) {}

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: any) => {
      if (params && params.slug) {
        this.slug = params.slug;

        this.getDetail();
      }
    });
  }

  getDetail() {
    this.isLoading = true;
    this.houseService.getDetailHouse(this.slug).subscribe(
      (res) => {
        this.isLoading = false;
        if (res) {
          this.houseDetail = res;

          this.setTitle(this.houseDetail.meta_title);
          this.meta.addTags([
            {
              name: 'description',
              content: this.houseDetail.meta_description,
            },
            { name: 'author', content: 'rhalim calnetic' },
            { name: 'keywords', content: 'Angular, SEO' },
          ]);
        }
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }
}
