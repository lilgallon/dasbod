import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TableModule, TableRowSelectEvent } from 'primeng/table';
import { BudgetPlanDto } from '../../../models/budget-dtos';

@Component({
  selector: 'app-budget-plan-table',
  imports: [CurrencyPipe, DatePipe, TableModule],
  templateUrl: './budget-plan-table.component.html',
  styleUrl: './budget-plan-table.component.css',
})
export class BudgetPlanTableComponent {
  public budgetPlans = input<BudgetPlanDto[]>([]);
  public budgetPlanSelect = output<BudgetPlanDto>();
  public budgetPlanUnselect = output();

  public onRowSelect(event: TableRowSelectEvent): void {
    this.budgetPlanSelect.emit(event.data);
  }

  public onRowUnselect(): void {
    this.budgetPlanUnselect.emit();
  }
}
