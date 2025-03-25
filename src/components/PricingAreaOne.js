import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    price: "$19",
    duration: "/mo",
    title: "Starter",
    features: [
      "Mobile App Development",
      "Branding & Identity",
      "Email Marketing & Automation",
      "E-commerce Solutions",
      "Social Media Management",
      "Video & Animation Production",
    ],
  },
  {
    price: "$49",
    duration: "/mo",
    title: "Professional",
    features: [
      "Mobile App Development",
      "Branding & Identity",
      "Email Marketing & Automation",
      "E-commerce Solutions",
      "SEO Optimization",
      "24/7 Support",
    ],
  },
  {
    price: "$99",
    duration: "/mo",
    title: "Enterprise",
    features: [
      "Full Mobile & Web App Development",
      "Advanced Branding & Strategy",
      "Email Marketing & Automation",
      "E-commerce & Payment Integration",
      "Social Media Growth Strategy",
      "Dedicated Account Manager",
    ],
  },
];

const PricingAreaOne = () => {
  return (
    <>
      <div className="pricing-area bg-gray pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Pricing Plan</h6>
            <h2 className="title">
              Best plan to get our <span>Services</span>
            </h2>
          </div>
          <div className="row">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className={`single-pricing-inner style-3 ${
                    index === 1 ? "price-active" : ""
                  }`}
                >
                  <h2 className="mb-3">
                    {plan.price} <sub>{plan.duration}</sub>
                  </h2>
                  <h5>{plan.title}</h5>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i} className={i >= 4 ? "hide" : ""}>
                        <FaCheck /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="btn btn-black border-radius border-radius-0 w-100"
                    to="/signup"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingAreaOne;
