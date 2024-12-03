import { Component, OnInit } from '@angular/core';
import { WorkShop } from 'src/app/data/interfaces/WorkShop.interface';
import { WorkShopService } from 'src/app/data/services/places/workShop/workShop.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedWorkShop!: WorkShop | null;

  constructor(private WorkShopService: WorkShopService) { }

  ngOnInit(): void {
    this.getCurrentWorkShop()
  }

  getCurrentWorkShop(){
    this.WorkShopService.currentWorkShop$.subscribe((WorkShop)=>{
      this.selectedWorkShop = WorkShop
    })
  }

}
