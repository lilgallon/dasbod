import { Component, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { BudgetCategoryDto } from '../../../models/budget-dtos';

@Component({
  selector: 'app-budget-category-table',
  imports: [TableModule, Button, CurrencyPipe],
  templateUrl: './budget-category-table.component.html',
  styleUrl: './budget-category-table.component.css',
})
export class BudgetCategoryTableComponent {
  public budgetCategories = input<BudgetCategoryDto[]>([]);
}
