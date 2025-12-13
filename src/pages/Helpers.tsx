import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import HelperCard from '@/components/HelperCard';
import HelperModal from '@/components/HelperModal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getHelpers } from '@/lib/helpers';
import { Helper, WORK_TYPES } from '@/types/helper';
import { Search, UserPlus, Users } from 'lucide-react';

const Helpers = () => {
  const [helpers, setHelpers] = useState<Helper[]>([]);
  const [filteredHelpers, setFilteredHelpers] = useState<Helper[]>([]);
  const [selectedHelper, setSelectedHelper] = useState<Helper | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [workTypeFilter, setWorkTypeFilter] = useState('all');

  useEffect(() => {
    const data = getHelpers();
    setHelpers(data);
    setFilteredHelpers(data);
  }, []);

  useEffect(() => {
    let filtered = helpers;

    // Filter by work type
    if (workTypeFilter !== 'all') {
      filtered = filtered.filter((h) => h.workType === workTypeFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (h) =>
          h.name.toLowerCase().includes(query) ||
          h.city.toLowerCase().includes(query) ||
          h.localArea.toLowerCase().includes(query)
      );
    }

    setFilteredHelpers(filtered);
  }, [helpers, searchQuery, workTypeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Available Helpers
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse through our directory of trusted helpers in your area
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, city, or area..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={workTypeFilter} onValueChange={setWorkTypeFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="All Work Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Work Types</SelectItem>
              {WORK_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        {filteredHelpers.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHelpers.map((helper, index) => (
              <div
                key={helper.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <HelperCard
                  helper={helper}
                  onClick={() => setSelectedHelper(helper)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {helpers.length === 0 ? 'No Helpers Yet' : 'No Results Found'}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              {helpers.length === 0
                ? 'Be the first to add your details and get discovered by families in your area.'
                : 'Try adjusting your search or filters to find what you\'re looking for.'}
            </p>
            {helpers.length === 0 && (
              <Button variant="hero" size="lg" asChild>
                <Link to="/add-helper">
                  <UserPlus className="w-4 h-4" />
                  Add Helper Details
                </Link>
              </Button>
            )}
          </div>
        )}

        {/* Modal */}
        <HelperModal
          helper={selectedHelper}
          open={!!selectedHelper}
          onClose={() => setSelectedHelper(null)}
        />
      </main>
    </div>
  );
};

export default Helpers;
