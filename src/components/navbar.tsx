import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 text-[#5BC0EB]" />
            <span className="ml-2 text-xl font-bold text-gray-900">BookShare</span>
          </Link>
          
          <div className="hidden sm:flex sm:items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/about')}>About</Button>
            <Button variant="ghost" onClick={() => navigate('/impact')}>Impact</Button>
            <Button variant="ghost" onClick={() => navigate('/contact')}>Contact</Button>
            <Button 
              className="bg-[#5BC0EB] hover:bg-[#0288D1]"
              onClick={() => navigate('/donate-books')}
            >
              Donate Now
            </Button>
          </div>

          <MobileNav />
        </div>
      </div>
    </nav>
  );
}