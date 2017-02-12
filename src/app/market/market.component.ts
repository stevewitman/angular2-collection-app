import { Component, OnInit } from '@angular/core';

import { CollectableService } from '../shared/collectable.service'

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styles: []
})
export class MarketComponent implements OnInit {
  collectables = [];

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectables = this.collectableService.getCollecables();
  }

  onAddToCollection() {
    
  }

}
