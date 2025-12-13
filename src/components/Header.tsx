import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Home, UserPlus } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Users className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground">HelperHub</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Button
            variant={isActive('/') ? 'secondary' : 'ghost'}
            size="sm"
            asChild
          >
            <Link to="/">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </Button>
          <Button
            variant={isActive('/helpers') ? 'secondary' : 'ghost'}
            size="sm"
            asChild
          >
            <Link to="/helpers">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">View Helpers</span>
            </Link>
          </Button>
          <Button
            variant={isActive('/add-helper') ? 'default' : 'outline'}
            size="sm"
            asChild
          >
            <Link to="/add-helper">
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Helper</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
