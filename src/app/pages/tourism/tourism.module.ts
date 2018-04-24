import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoiComponent } from './poi/poi.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TourismRoutingModule } from './tourism.routing';

import { TourismService } from '../../services/tourism.service';
import { MyDatePickerModule } from 'mydatepicker';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    TourismRoutingModule,
    CommonModule,
    NgxPaginationModule,
    MyDatePickerModule,
    FormsModule,
    NgZorroAntdModule
  ],
  declarations: [PoiComponent],
  providers: [TourismService]
})
export class TourismModule { }
