import Link from 'next/link';
import { Button } from './ui/button';
import data from '@/content/contact.json';

export function RulesConductSection() {
  const { rules } = data;
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-2xl animate-fade-in-up">
          <h2 className="text-3xl font-serif font-bold text-center text-primary mb-6">{rules.title}</h2>
          <ul className="space-y-4 mb-8">
            {rules.list.map((rule, index) => (
              <li key={index} className="flex items-start">
                <SwordIcon className="w-5 h-5 text-accent mr-4 mt-1 flex-shrink-0 animate-swipe-in" style={{ animationDelay: `${100 + index * 100}ms`}}/>
                <span className="text-white/80">{rule}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href={rules.guidelinesUrl} target="_blank" rel="noopener noreferrer">
                {rules.buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const SwordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.414 1.586a2 2 0 0 0-2.828 0L12 9.172 4.414 1.586a2 2 0 0 0-2.828 2.828L9.172 12l-7.586 7.586a2 2 0 0 0 2.828 2.828L12 14.828l7.586 7.586a2 2 0 0 0 2.828-2.828L14.828 12l7.586-7.586a2 2 0 0 0 0-2.828zM13 13h-2v-2h2v2zM13 5h-2V3h2v2zM13 21h-2v-2h2v2z" />
  </svg>
)
