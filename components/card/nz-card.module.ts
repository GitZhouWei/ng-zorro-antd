import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from '../core/addon/addon.module';

import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardLoadingComponent } from './nz-card-loading.component';
import { NzCardMetaComponent } from './nz-card-meta.component';
import { NzCardTabComponent } from './nz-card-tab.component';
import { NzCardComponent } from './nz-card.component';

@NgModule({
  imports: [CommonModule, NzAddOnModule],
  declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
  exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
})
export class NzCardModule {}
