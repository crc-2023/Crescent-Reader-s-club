import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImmersiveBackground from '@/components/ui/immersive-background';

const featuredActivity = {
  id: 1,
  title: '30-Day Atomic Habits Challenge',
  excerpt:
    'Transform your life by applying James Clear’s principles of small, consistent changes. Join our 30-day guided challenge to build keystone habits and track your progress.',
  content:
    'The challenge is based on the core concepts of Atomic Habits: identity-based habits, the four laws of behavior change, and habit stacking. Each day introduces one tiny change that compounds into massive transformation.',
  author: 'CRC Habits Team',
  date: '2025-09-28',
  readTime: '10 min activity',
  category: 'Habit Building',
  tags: ['Atomic Habits', 'Habit Stacking', 'Keystone Habits'],
  image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  featured: true,
};

const recentActivities = [
  {
    id: 2,
    title: 'Habit Stacking Workshop',
    excerpt:
      'Learn how to use the proven technique of “habit stacking” to attach new habits to existing routines, making them stick with less effort.',
    author: 'Coach Radhika',
    date: '2025-09-25',
    readTime: '45 min session',
    category: 'Workshop',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
  },
  {
    id: 3,
    title: 'Identity-Based Habits Session',
    excerpt:
      'Instead of focusing on outcomes, learn how to shift your identity to match the person you want to become. “I’m the type of person who…”',
    author: 'James Clear (inspired)',
    date: '2025-09-22',
    readTime: '60 min activity',
    category: 'Mindset',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
  },
  {
    id: 4,
    title: 'Environment Design Challenge',
    excerpt:
      'Your environment shapes your behavior. Join this activity where we optimize your workspace, kitchen, or phone layout to reduce friction for good habits.',
    author: 'CRC Mentors',
    date: '2025-09-20',
    readTime: '30 min task',
    category: 'Practical Activity',
    image: 'https://images.unsplash.com/photo-1581091012184-5c8d948f96b8?w=400&q=80',
  },
  {
    id: 5,
    title: 'Habit Tracking with Cue Cards',
    excerpt:
      'Track your habits visually with cue cards and streak calendars. This activity helps build accountability while reinforcing small wins.',
    author: 'Student Club',
    date: '2025-09-18',
    readTime: '20 min setup',
    category: 'Tracking',
    image: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf?w=400&q=80',
  },
  {
    id: 6,
    title: 'Keystone Habit Discussion',
    excerpt:
      'What is one habit that influences all other areas of your life? In this group activity, participants share their keystone habits and stories.',
    author: 'CRC Habits Forum',
    date: '2025-09-15',
    readTime: '40 min discussion',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 7,
    title: '2-Minute Rule Practice',
    excerpt:
      'Big changes start small. Practice reducing every new habit to a 2-minute version and share how it changed your consistency.',
    author: 'CRC Leaders',
    date: '2025-09-12',
    readTime: '15 min drill',
    category: 'Quick Start',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80',
  },
];

const categories = [
  'All',
  'Habit Building',
  'Mindset',
  'Workshop',
  'Practical Activity',
  'Tracking',
  'Community',
  'Quick Start',
];

const trendingTopics = [
  'Habit Stacking',
  'Keystone Habits',
  '2-Minute Rule',
  'Identity Shift',
  'Environment Design',
  'Habit Tracking',
  'Compound Growth',
  'Consistency',
];

export default function AtomicHabitsActivities() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImmersiveBackground height="min-h-[60vh]" overlay="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
          <div className="animate-fade-up">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-secondary mr-3" />
              <span className="text-secondary font-medium text-lg">ATOMIC HABITS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Small Changes, <span className="text-secondary">Big Results</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Explore hands-on activities inspired by James Clear’s Atomic Habits. Build
              sustainable routines, shift your identity, and transform your habits with
              science-backed methods.
            </p>
          </div>
        </div>
      </ImmersiveBackground>

      {/* Featured Activity */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Activity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kickstart your habit journey with our most impactful challenge.
            </p>
          </div>

          <article className="bg-card rounded-2xl shadow-elegant border border-border/50 overflow-hidden animate-fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div
                className="h-64 lg:h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${featuredActivity.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                    {featuredActivity.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredActivity.readTime}
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {featuredActivity.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredActivity.excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-secondary" />
                    <span className="text-sm text-muted-foreground">{featuredActivity.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-secondary" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(featuredActivity.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredActivity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth">
                  Join Challenge
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Recent Activities & Sidebar */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="text-center mb-12 animate-fade-up">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Recent <span className="text-gradient">Activities</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Practical exercises and challenges from Atomic Habits in action.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === 'All' ? 'default' : 'outline'}
                    size="sm"
                    className="transition-smooth"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Activities List */}
              <div className="space-y-8">
                {recentActivities.map((activity, index) => (
                  <article
                    key={activity.id}
                    className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden card-hover animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div
                        className="h-48 md:h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${activity.image})` }}
                      />

                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                            {activity.category}
                          </span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {activity.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-secondary transition-smooth cursor-pointer">
                          {activity.title}
                        </h3>

                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {activity.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <User className="h-3 w-3 mr-1" />
                            <span className="mr-4">{activity.author}</span>
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{new Date(activity.date).toLocaleDateString()}</span>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-secondary hover:text-secondary/80"
                          >
                            Start
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="text-center mt-12 animate-fade-up">
                <Button variant="outline" size="lg">
                  Load More Activities
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Sign-up */}
              <div className="bg-card p-6 rounded-xl shadow-soft border border-border/50 animate-fade-up">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Join the Habit Community
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Get updates on new challenges and habit-building exercises every week.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Trending Topics */}
              <div
                className="bg-card p-6 rounded-xl shadow-soft border border-border/50 animate-fade-up"
                style={{ animationDelay: '0.1s' }}
              >
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 text-secondary mr-2" />
                  <h3 className="text-xl font-semibold text-foreground">Trending Habits</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm hover:bg-secondary hover:text-secondary-foreground transition-smooth cursor-pointer"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Reflections */}
              <div
                className="bg-card p-6 rounded-xl shadow-soft border border-border/50 animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Recent Reflections
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      user: 'GrowthSeeker',
                      comment: 'The 2-minute rule made my workouts so much easier to start!',
                      article: '2-Minute Rule Practice',
                    },
                    {
                      user: 'HabitHacker',
                      comment: 'Habit stacking with my morning coffee is a game changer.',
                      article: 'Habit Stacking Workshop',
                    },
                    {
                      user: 'ConsistencyQueen',
                      comment: 'Tracking habits with cue cards helped me stay accountable.',
                      article: 'Habit Tracking with Cue Cards',
                    },
                  ].map((reflection, idx) => (
                    <div key={idx} className="border-l-2 border-secondary/30 pl-3">
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-medium text-foreground">{reflection.user}</span> on{' '}
                        {reflection.article}
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        "{reflection.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
