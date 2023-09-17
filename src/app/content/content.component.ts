import { Component } from '@angular/core';
import { SharedStateService } from '../shared-state.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  constructor(
    public sharedStateService:SharedStateService
  ){}

}
