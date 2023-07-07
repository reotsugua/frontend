import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCatComponent } from './new-cat/new-cat.component';
import { SearchCatsComponent } from './search-cats/search-cats.component';
import { CatsRoutingModule } from './cats-routing.module';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [NewCatComponent, SearchCatsComponent],
  imports: [CommonModule, CatsRoutingModule, MatTableModule],
  providers: [],
})
export class CatsModule {}