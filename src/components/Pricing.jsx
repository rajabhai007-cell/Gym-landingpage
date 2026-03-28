import React from "react";

const plans = [
  { name: "Basic", price: "$20/mo", features: ["Access to gym", "Free water bottle"] },
  { name: "Standard", price: "$40/mo", features: ["All Basic features", "Group classes"] },
  { name: "Premium", price: "$60/mo", features: ["All Standard features", "Personal trainer"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        {plans.map((plan) => (
          <div className="card" key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#" className="btn">Choose Plan</a>
          </div>
        ))}
      </div>
    </section>
  );
}