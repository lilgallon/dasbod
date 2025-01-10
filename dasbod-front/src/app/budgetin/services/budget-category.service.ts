import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BudgetCategoryDto } from '../models/budget-dtos';

@Injectable({ providedIn: 'root' })
export class BudgetCategoryService {
  public fetchBudgetCategoriesByBudgetPlanId(budgetPlanId: string): Observable<BudgetCategoryDto[]> {
    return of([
      {
        id: 'category-id',
        entityData: {
          name: 'Voiture',
          amount: 100,
          budgetPlanId: budgetPlanId,
        },
        computedFields: {
          spent: 80,
          percentSpent: 80,
          remaining: 20,
        },
      },
    ]);
  }
}
