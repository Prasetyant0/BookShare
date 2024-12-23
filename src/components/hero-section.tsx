import { Button } from "@/components/ui/button";
import { BookOpen, Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="animate-slide-in text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Share the gift of</span>
                <span className="block text-[#5BC0EB] stagger-delay-1">knowledge & learning</span>
              </h1>
              <p className="animate-fade-in stagger-delay-2 mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Join our mission to make education accessible to everyone. Every book and every donation makes a difference in someone's life.
              </p>
              <div className="animate-fade-in stagger-delay-3 mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Button 
                  size="lg"
                  className="bg-[#5BC0EB] hover:bg-[#0288D1] w-full sm:w-auto animate-bounce-slow"
                  onClick={() => navigate('/donate-books')}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Donate Books
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto mt-3 sm:mt-0 animate-bounce-slow stagger-delay-1"
                  onClick={() => navigate('/donate-money')}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Make a Donation
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="animate-fade-in lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Library books"
        />
      </div>
    </div>
  );
}