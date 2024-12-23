import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, GraduationCap, School, Users } from "lucide-react";

export function Impact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Impact</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-[#5BC0EB]" />
              Educational Access
            </CardTitle>
            <CardDescription>Improving literacy rates across communities</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Through our book donation programs, we've helped increase literacy rates 
              by 25% in partner communities and provided over 50,000 students with 
              access to quality educational materials.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-[#5BC0EB]" />
              Student Success
            </CardTitle>
            <CardDescription>Supporting academic achievement</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Students in our partner schools have shown a 30% improvement in reading 
              comprehension and a 20% increase in overall academic performance.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-6 w-6 text-[#5BC0EB]" />
              School Support
            </CardTitle>
            <CardDescription>Empowering educational institutions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              We've partnered with over 500 schools nationwide, helping them build 
              and maintain quality libraries that serve thousands of students daily.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-[#5BC0EB]" />
              Community Engagement
            </CardTitle>
            <CardDescription>Building stronger communities</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our initiatives have brought together over 10,000 volunteers and donors, 
              creating a powerful network of education advocates across the country.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}