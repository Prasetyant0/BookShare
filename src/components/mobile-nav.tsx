import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export function MobileNav() {
  const navigate = useNavigate();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Impact", href: "/impact" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="sm:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate(item.href)}
            >
              {item.label}
            </Button>
          ))}
          <Button 
            className="w-full bg-[#5BC0EB] hover:bg-[#0288D1]"
            onClick={() => navigate('/donate-books')}
          >
            Donate Now
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}