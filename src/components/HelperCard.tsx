import { Helper } from '@/types/helper';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, User } from 'lucide-react';

interface HelperCardProps {
  helper: Helper;
  onClick: () => void;
}

const HelperCard = ({ helper, onClick }: HelperCardProps) => {
  return (
    <Card
      className="cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground">
            <User className="w-6 h-6" />
          </div>
          <Badge variant="secondary" className="font-medium">
            {helper.workType}
          </Badge>
        </div>
        
        <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {helper.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3">
          {helper.gender} • {helper.age} years
        </p>
        
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="truncate">
            {helper.localArea}, {helper.city}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HelperCard;
