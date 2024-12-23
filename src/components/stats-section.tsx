import { BookMarked, Users, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { name: 'Books Donated', value: '50K+', icon: BookMarked },
  { name: 'Lives Impacted', value: '100K+', icon: Users },
  { name: 'Schools Supported', value: '500+', icon: School },
];

export function StatsSection() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={stat.name} className={`animate-scale-in stagger-delay-${index + 1} border-none shadow-none`}>
              <CardContent className="flex flex-col items-center p-6">
                <stat.icon className="h-12 w-12 text-[#5BC0EB] mb-4 animate-bounce-slow" />
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}