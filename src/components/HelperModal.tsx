import { Helper } from '@/types/helper';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Phone, MapPin, User, Calendar, Briefcase, FileText } from 'lucide-react';

interface HelperModalProps {
  helper: Helper | null;
  open: boolean;
  onClose: () => void;
}

const HelperModal = ({ helper, open, onClose }: HelperModalProps) => {
  if (!helper) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground">
              <User className="w-8 h-8" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold">{helper.name}</DialogTitle>
              <Badge variant="secondary" className="mt-1">
                {helper.workType}
              </Badge>
            </div>
          </div>
        </DialogHeader>

        <Separator className="my-4" />

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <InfoItem icon={User} label="Gender" value={helper.gender} />
            <InfoItem icon={Calendar} label="Age" value={`${helper.age} years`} />
          </div>

          <InfoItem 
            icon={Briefcase} 
            label="Work Type" 
            value={helper.workType} 
          />

          <InfoItem
            icon={Phone}
            label="Phone Number"
            value={helper.phone}
            isPhone
          />

          <InfoItem
            icon={MapPin}
            label="Location"
            value={`${helper.localArea}, ${helper.city}, ${helper.state}`}
          />

          {helper.description && (
            <div className="pt-2">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                <FileText className="w-4 h-4" />
                <span>About / Experience</span>
              </div>
              <p className="text-sm text-foreground bg-secondary/50 p-4 rounded-lg">
                {helper.description}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const InfoItem = ({
  icon: Icon,
  label,
  value,
  isPhone = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  isPhone?: boolean;
}) => (
  <div>
    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-1">
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </div>
    {isPhone ? (
      <a 
        href={`tel:${value}`} 
        className="text-primary font-semibold hover:underline"
      >
        {value}
      </a>
    ) : (
      <p className="text-foreground font-medium">{value}</p>
    )}
  </div>
);

export default HelperModal;
