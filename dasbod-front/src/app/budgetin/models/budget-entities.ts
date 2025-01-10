import { EntityData } from '../../models/common';

export interface BudgetPlan extends EntityData {
  amountAtStart: number;
  expectedIncome: number;
  startDate: Date;
  endDate: Date;
}

export interface BudgetCategory extends EntityData {
  name: string;
  amount: number;
  budgetPlanId: string;
}

export interface BudgetTransaction extends EntityData {
  date: string;
  categoryId: string;
  amount: number;
  description: string;
  status: BudgetTransactionStatus;
}

export type BudgetTransactionStatus = 'PAID' | 'PROCESSING' | 'PLANNED';
