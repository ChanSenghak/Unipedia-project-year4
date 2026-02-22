import { useState, useEffect } from "react";

function Blockcategory() {
  const categories = [
    { icon: "/public/image.png", title: "Human Resources", count: 6 },
    { icon: "/public/marketing.png", title: "Marketing", count: 12 },
    { icon: "/public/finance.png", title: "Finance", count: 9 },
    { icon: "/public/it.png", title: "IT Support", count: 14 },
    { icon: "/public/design.png", title: "Graphic Design", count: 7 },
    { icon: "/public/sales.png", title: "Sales", count: 10 },
    { icon: "/public/engineering.png", title: "Engineering", count: 8 },
    { icon: "/public/legal.png", title: "Legal", count: 4 },
    { icon: "/public/health.png", title: "Healthcare", count: 15 },
    { icon: "/public/education.png", title: "Education", count: 11 },
    { icon: "/public/operations.png", title: "Operations", count: 5 },
    { icon: "/public/logistics.png", title: "Logistics", count: 13 },
    { icon: "/public/security.png", title: "Security", count: 6 },
    { icon: "/public/hospitality.png", title: "Hospitality", count: 9 },
    { icon: "/public/customer-service.png", title: "Customer Service", count: 16 },
    { icon: "/public/content.png", title: "Content Writing", count: 7 },
    { icon: "/public/product.png", title: "Product Management", count: 5 },
    { icon: "/public/business.png", title: "Business Development", count: 12 },
    { icon: "/public/accounting.png", title: "Accounting", count: 9 },
    { icon: "/public/research.png", title: "Research & Development", count: 6 },
  ];

  return (
    <div className="p-8 min-h-screen">
      <div className="grid grid-cols-4 gap-4 max-w-6xl">

        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition-all duration-200 border-2 bg-white border-gray-300 shadow-lg hover:shadow-xl hover:scale-[1.07] hover:border-blue-500"

          >
            <img src={item.icon} className="w-14 h-14 mb-3" alt={item.title} />

            <div className="text-center">
              <p className="text-xl font-medium text-black mb-1">{item.title}</p>
              <p className="text-xl font-semibold text-blue-500">({item.count})</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Blockcategory;
