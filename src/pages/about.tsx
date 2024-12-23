import { Card, CardContent } from "@/components/ui/card";
import { BookHeart, Users2, Target } from "lucide-react";

export function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About BookShare</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <BookHeart className="h-12 w-12 text-[#5BC0EB] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">Making education accessible to everyone through book donations and financial support.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Users2 className="h-12 w-12 text-[#5BC0EB] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
              <p className="text-gray-600">A community of book lovers and education advocates working to spread knowledge.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Target className="h-12 w-12 text-[#5BC0EB] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Goal</h3>
              <p className="text-gray-600">To create a world where every person has access to quality educational resources.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          BookShare began with a simple idea: every book has the power to change a life. Founded in 2020, 
          we've grown from a small local initiative to a nationwide movement, connecting generous donors 
          with schools and communities in need of educational resources.
        </p>
        
        <h2 className="text-3xl font-semibold mb-4">How We Work</h2>
        <p className="text-gray-600">
          We partner with schools, libraries, and community centers to identify where books and educational 
          resources are needed most. Through our network of donors and volunteers, we collect, sort, and 
          distribute books to these communities, ensuring that quality education remains accessible to all.
        </p>
      </div>
    </div>
  );
}