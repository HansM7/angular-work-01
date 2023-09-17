import { Component } from '@angular/core';
import { SharedStateService } from '../shared-state.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

	constructor(
		public sharedStateService:SharedStateService
	){}

	getButtonText(): string {
		if(this.sharedStateService.sidebarOpen$){
			return 'Open'
		}
		return 'Close'
	  }
	  
	  // Método para cambiar el estado
	  toggleService() {
		this.sharedStateService.toggleSidebar();  // Asegúrate que este método está correctamente cambiando el estado
	  }

}
