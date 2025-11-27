import { BookOpen, Calendar, Users, Mic, FileText, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickNavItems = [
  {
    title: 'About Us',
    description: 'Learn about our mission, vision, and the journey of our club',
    icon: Info,
    href: '/about',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Events',
    description: 'Discover upcoming book discussions, workshops, and literary events',
    icon: Calendar,
    href: '/events',
    gradient: 'from-green-500 to-teal-600',
  },
    {
    title: 'Activities',
    description: 'Discover upcoming book discussions, workshops, and literary events',
    icon: Calendar,
    href: '/activities',
    gradient: 'from-green-500 to-teal-600',
  },
  {
    title: 'Our Team',
    description: 'Meet the passionate individuals behind our thriving community',
    icon: Users,
    href: '/team',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'Podcast',
    description: 'Listen to our literary discussions and author interviews',
    icon: Mic,
    href: '/podcast',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'CresPulse',
    description: 'Read our latest articles, reviews, and literary insights',
    icon: FileText,
    href: '/crespulse',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    title: 'Join the Discussion',
    description: 'Connect with fellow readers and share your thoughts',
    icon: BookOpen,
    href: '/events',
    gradient: 'from-yellow-500 to-orange-600',
  },
];

export default function QuickNavSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into the different facets of our literary community and discover 
            what makes Crescent Readers Club a unique place for book lovers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickNavItems.map((item, index) => (
            <Link
              key={item.title}
              to={item.href}
              className="group block animate-fade-up card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-soft border border-border/50 group-hover:border-secondary/50 transition-smooth">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-soft`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-smooth">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center text-secondary group-hover:translate-x-2 transition-smooth">
                  <span className="text-sm font-medium">Explore</span>
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}