import { Play, Clock, Calendar, Download, Heart, Share2, Headphones, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImmersiveBackground from '@/components/ui/immersive-background';

// Placeholder featured episode — replace with real data from Spotify
const featuredEpisode = {
  id: 'spotify-ep-XYZ',
  title: 'Crescent Readers Club Podcast!',
  description: 'A synopsis of your featured episode pulled from Spotify.',
  duration: '45 minutes',
  date: '2025-09-20',
  plays: 100,    // if you have this info
  likes: 500,   // optional
  image: 'src/assets/Activities/CresPulse/pod.png',  // from spotify artwork
  categories: ['CategoryA', 'CategoryB'],
  spotifyUrl: 'https://open.spotify.com/episode/7lvvgXjbminT2G5ZvvpuLx?si=_hSMxI7GQ8CWuVSOxcmO4Q',
};

// Placeholder recent episodes — replace with your actual episodes
const recentEpisodes = [
  {
    id: 'spotify-ep-ABC',
    title: 'Crescent Readers Podcast: Spotify',
    description: 'Short description for the episode ABC.',
    duration: '50 minutes',
    date: '2025-09-18',
    plays: 0,
    image: 'src/assets/Activities/CresPulse/pod.png',
    categories: ['Another Category'],
    spotifyUrl: 'https://open.spotify.com/episode/7lvvgXjbminT2G5ZvvpuLx?si=_hSMxI7GQ8CWuVSOxcmO4Q',
  },
  // add more similarly
];

const categories = [
  'All',
  'Author Spotlight',
  'Genre Analysis',
  'Interview',
  'Storytelling',
  // etc.
];

export default function Podcast() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImmersiveBackground height="min-h-[70vh]" overlay="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="flex items-center mb-4">
              <Headphones className="h-8 w-8 text-secondary mr-3" />
              <span className="text-secondary font-medium">Crescent Readers Podcast</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Literary <span className="text-secondary">Conversations</span>
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-white/90">
              Tune in as we explore stories, voices, and ideas — straight from our latest episodes on Spotify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-smooth"
                asChild
              >
                <a href={featuredEpisode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-5 w-5" />
                  Listen Now
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/50 text-black hover:bg-white/10 transition-smooth">
                Subscribe
              </Button>
            </div>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-white">Podcast Stats</h3>
              <div className="grid grid-cols-2 gap-6 text-white/80">
                {/* If you have stats, show them; else hide or show placeholders */}
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">20+</div>
                  <div>Episodes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">500+</div>
                  <div>Downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">4.5</div>
                  <div>Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">1k+</div>
                  <div>Subscribers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ImmersiveBackground>

      {/* Featured Episode */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Episode</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our spotlight on the most recent or notable episodes from our podcast.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-elegant border border-border/50 overflow-hidden animate-fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${featuredEpisode.image})` }}>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-16 h-16 p-0 glow-effect"
                    asChild
                  >
                    <a href={featuredEpisode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="h-6 w-6 ml-0.5" fill="currentColor" />
                    </a>
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Latest</span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredEpisode.categories.map((cat) => (
                    <span key={cat} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">{cat}</span>
                  ))}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{featuredEpisode.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{featuredEpisode.description}</p>

                <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-secondary" />
                    {featuredEpisode.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-secondary" />
                    {new Date(featuredEpisode.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Play className="h-4 w-4 mr-1 text-secondary" />
                    {featuredEpisode.plays.toLocaleString()} plays
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    asChild
                  >
                    <a href={featuredEpisode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                      <Play className="mr-2 h-4 w-4" />
                      Listen on Spotify
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/50 text-black hover:bg-white/10 transition-smooth">
                    <Download className="mr-2 h-4 w-4" />
                    {/* optional: link to audio file or "Save to Spotify" */}
                    Save
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Episodes */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recent <span className="text-gradient">Episodes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore more episodes from our podcast archive.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up">
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

          <div className="space-y-6">
            {recentEpisodes.map((episode, idx) => (
              <div
                key={episode.id}
                className="bg-card rounded-xl shadow-soft border border-border/50 p-6 card-hover animate-fade-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  <div className="relative">
                    <img
                      src={episode.image}
                      alt={episode.title}
                      className="w-full h-32 md:h-24 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-10 h-10 p-0"
                        asChild
                      >
                        <a href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4" fill="currentColor" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {episode.categories.map((cat) => (
                        <span key={cat} className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">{cat}</span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {episode.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">{episode.description}</p>
                  </div>

                  <div className="text-center md:text-right">
                    <div className="text-sm text-muted-foreground mb-2 space-y-1">
                      <div className="flex items-center justify-center md:justify-end">
                        <Clock className="h-3 w-3 mr-1 text-secondary" />
                        {episode.duration}
                      </div>
                      <div className="flex items-center justify-center md:justify-end">
                        <Calendar className="h-3 w-3 mr-1 text-secondary" />
                        {new Date(episode.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {episode.plays ? episode.plays.toLocaleString() + ' plays' : ''}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-up">
            <Button variant="outline" size="lg">
              Load More Episodes
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
