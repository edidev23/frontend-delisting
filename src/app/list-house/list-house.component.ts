import { Component, OnInit } from '@angular/core';
import { ListHouseService } from './list-house.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.scss'],
})
export class ListHouseComponent implements OnInit {
  listHouses: any;
  constructor(
    private houseService: ListHouseService,
    private meta: Meta,
    private title: Title
  ) {
    this.meta.addTags([
      { name: 'description', content: 'List house page of deListing Apps' },
      { name: 'author', content: 'rhalim calnetic' },
      { name: 'keywords', content: 'Angular, SEO' },
    ]);
    this.setTitle('List House Page');
  }

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.houseService.getHouses().subscribe((res) => {
      if (res) {
        this.listHouses = res;
      }
    });
  }
}
