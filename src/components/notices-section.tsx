
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import data from '@/content/events.json';

interface Notice {
    title: string;
    category: string;
    date: string;
    content: string;
}

interface NoticesData {
    title: string;
    items: Notice[];
}

interface NoticesSectionProps {
    notices: NoticesData;
    category: string;
    setCategory: (category: string) => void;
}

export function NoticesSection({ notices, category, setCategory }: NoticesSectionProps) {
  const { title, items } = notices;
  const { filters } = data;

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-blue-600 text-white text-center py-3 px-6 mb-12 rounded-lg shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold font-serif mb-4 sm:mb-0">{title}</h2>
          <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full sm:w-[200px] bg-card border-border/50 transition-all duration-150 ease-in-out text-white">
                  <SelectValue placeholder={filters.placeholder} />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {filters.categories.map((cat) => (
                      <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                  ))}
              </SelectContent>
          </Select>
        </div>

        {items.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
                <p>No notices match your current filter.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((notice, index) => (
                <Card key={index} className="bg-card border-border/20 group animate-fade-in-up transition-all hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/30" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-6">
                    <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors border-b-2 border-transparent group-hover:border-accent pb-1">
                        {notice.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wider bg-accent/20 text-accent px-2 py-1 rounded-full">{notice.category}</span>
                    </div>
                    <p className="text-sm text-foreground/60 mb-4">{notice.date}</p>
                    <p className="text-foreground/80">{notice.content}</p>
                </CardContent>
                </Card>
            ))}
            </div>
        )}
      </div>
    </section>
  );
}
