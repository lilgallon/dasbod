"use client"

import React, { useState } from "react"

import { Reference } from "@/lib/data/common"
import { BudgetPlanContent } from "@/components/business/budget/content/budget-plan-content"
import { BudgetPlanSelectContent } from "@/components/business/budget/content/budget-plan-select-content"

export default function BudgetPage() {
  const [budgetPlanRef, setBudgetPlanRef] = useState<Reference>()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Budget
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">truc</p>

        {budgetPlanRef ? (
          <BudgetPlanContent budgetPlanRef={budgetPlanRef}></BudgetPlanContent>
        ) : (
          <BudgetPlanSelectContent></BudgetPlanSelectContent>
        )}
      </div>
    </section>
  )
}
