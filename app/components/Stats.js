// app/components/Stats.js
import { COMPANY_STATS } from '../constants';

export default function Stats({ bgColor = "bg-gray-50" }) {
  const stats = [
    { number: COMPANY_STATS.projects, label: "Projects Completed", icon: "🏠" },
    { number: COMPANY_STATS.years, label: "Years Experience", icon: "📅" },
    { number: COMPANY_STATS.rating, label: "Google Rating", icon: "⭐" },
    { number: COMPANY_STATS.availability, label: "Emergency Service", icon: "🚨" }
  ];

  return (
    <section className={`py-16 px-6 ${bgColor}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}