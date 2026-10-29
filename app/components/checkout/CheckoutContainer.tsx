"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";
import { ALL_PLANS, getPlanByNameOrId, Plan } from "../../lib/plans";

export default function CheckoutContainer() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan");
  const priceParam = searchParams.get("price");

  const [selectedPlan, setSelectedPlan] = useState<Plan>(() =>
    getPlanByNameOrId(planParam, priceParam)
  );

  // Sync state if user navigates back/forward with different query params
  useEffect(() => {
    if (planParam || priceParam) {
      setSelectedPlan(getPlanByNameOrId(planParam, priceParam));
    }
  }, [planParam, priceParam]);

  const handlePlanChange = (newPlan: Plan) => {
    setSelectedPlan(newPlan);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Form & Interactive Plan Selector (7 cols) */}
      <div className="lg:col-span-7">
        <CheckoutForm
          selectedPlan={selectedPlan}
          onPlanChange={handlePlanChange}
          allPlans={ALL_PLANS}
        />
      </div>

      {/* Right Column: Order Summary (5 cols) */}
      <div className="lg:col-span-5">
        <OrderSummary selectedPlan={selectedPlan} />
      </div>
    </div>
  );
}
