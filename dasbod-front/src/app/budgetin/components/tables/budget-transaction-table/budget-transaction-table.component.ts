import { Component, input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tag } from 'primeng/tag';
import { BudgetTransactionStatus } from '../../../models/budget-entities';
import { BudgetTransactionDto } from '../../../models/budget-dtos';

@Component({
  selector: 'app-budget-transaction-table',
  imports: [TableModule, Button, CurrencyPipe, FormsModule, Tag, DatePipe],
  templateUrl: './budget-transaction-table.component.html',
  styleUrl: './budget-transaction-table.component.css',
})
export class BudgetTransactionTableComponent {
  public budgetTransactions = input<BudgetTransactionDto[]>([]);

  getSeverity(status: BudgetTransactionStatus) {
    switch (status) {
      case 'PAID':
        return 'success';
      case 'PROCESSING':
        return 'warn';
      case 'PLANNED':
        return 'contrast';
    }
  }
}
