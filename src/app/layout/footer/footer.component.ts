import { Component, OnInit } from '@angular/core';
import { WorkShop } from 'src/app/data/interfaces/WorkShop.interface';
import { WorkShopService } from 'src/app/data/services/places/workShop/workShop.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
