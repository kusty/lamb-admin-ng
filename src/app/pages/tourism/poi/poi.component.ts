import { Component, OnInit, Input } from '@angular/core';
import { TourismService } from '../../../services/tourism.service';

@Component({
  selector: 'app-poi',
  templateUrl: './poi.component.html',
})
export class PoiComponent implements OnInit {

  private poiList = [];
  total: number;
  pageSize: number = 10;
  currentPage: number = 1;

  constructor(private tourismService: TourismService) {
  }

  ngOnInit() {
    this.getPoiList(1);
  }

  getPoiList(e) {
    this.tourismService.getPoiList({
      pageSize: this.pageSize,
      currentPage: e,
    }).subscribe((res) => {
      if (res.status === 200) {
        const { body: { list, pagination } } = res;
        this.poiList = [...list];
        this.total = pagination.total;
        this.currentPage = pagination.currentPage;
      }
    });
  }

}
