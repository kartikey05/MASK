import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, Search, Shield, Clock, Heart } from 'lucide-react';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      
      <main className="container py-16 md:py-24">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            Find Trusted Helpers{' '}
            <span className="text-primary">Near You</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Connect with reliable cooks, cleaners, babysitters, drivers, and more. 
            Your perfect helper is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/add-helper">
                <UserPlus className="w-5 h-5" />
                Add Helper Details
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/helpers">
                <Search className="w-5 h-5" />
                View Helpers
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FeatureCard
            icon={Shield}
            title="Verified Profiles"
            description="Browse through detailed helper profiles with work experience and contact information."
            delay="0.1s"
          />
          <FeatureCard
            icon={Clock}
            title="Quick & Easy"
            description="Add your details in minutes or find the right helper for your needs instantly."
            delay="0.2s"
          />
          <FeatureCard
            icon={Heart}
            title="Community Driven"
            description="Built for helpers and families to connect directly, no middlemen involved."
            delay="0.3s"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 MASK. Connecting helpers with families.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: string;
}) => (
  <div 
    className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
    style={{ animationDelay: delay }}
  >
    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
      <Icon className="w-7 h-7 text-primary-foreground" />
    </div>
    <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
