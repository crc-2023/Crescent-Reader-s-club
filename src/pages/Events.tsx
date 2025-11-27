import { Calendar, MapPin, Clock, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImmersiveBackground from "@/components/ui/immersive-background";

// Local event images
import marathadiImg from "@/assets/Events/marathadi.jpg";
import mindMingleImg from "@/assets/Events/mind_mingle.jpg";
import worldBookDayImg from "@/assets/Events/world_book_day.jpg";

const upcomingEvents = [
  {
    id: 1,
    title: "Mind Mingle: Literary Exchange",
    date: "2025-09-24",
    time: "5:00 PM - 8:00 PM",
    location: "University Library Hall",
    description:
      "An intellectual evening where distinguished guests, authors, and readers come together to discuss literature, libraries, and book culture. Includes panel discussions, open mic, and networking.",
    attendees: 50,
    maxAttendees: 100,
    category: "Multi-Event",
    image: mindMingleImg,
  },
  {
    id: 2,
    title: "Mar Book Swap Festival",
    date: "2025-10-10",
    time: "10:00 AM - 4:00 PM",
    location: "Community Center Courtyard",
    description:
      "Bring your favorite books and swap them with fellow readers! An exciting event promoting sustainable reading, community sharing, and the love for stories.",
    attendees: 32,
    maxAttendees: 60,
    category: "Book Swap",
    image: marathadiImg,
  },
];

const pastEvents = [
  {
    id: 3,
    title: "World Book Day Celebration",
    date: "2025-04-23",
    location: "Campus Auditorium",
    attendees: 120,
    category: "Celebration",
    description:
      "A vibrant celebration of World Book Day featuring book exhibitions, student write-ups, author talks, and a grand literary showcase of diverse cultures.",
    image: worldBookDayImg,
  },
];

const categoryColors: Record<string, string> = {
  "Multi-Event": "from-purple-500 to-indigo-600",
  "Book Swap": "from-green-500 to-emerald-600",
  Celebration: "from-pink-500 to-rose-600",
};

export default function Events() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ImmersiveBackground height="min-h-[60vh]" overlay="dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-up">
            CRC <span className="text-secondary">Events & Activities</span>
          </h1>
          <p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Explore our vibrant events that celebrate books, creativity, and
            community. From book swaps to panel discussions, we create spaces
            where literature comes alive.
          </p>
        </div>
      </ImmersiveBackground>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars for these exciting upcoming activities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="h-52 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${
                        categoryColors[event.category]
                      }`}
                    >
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-secondary" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-secondary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-secondary" />
                      <span>
                        {event.attendees}/{event.maxAttendees} attending
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Past <span className="text-gradient">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A look back at some of the memorable literary gatherings we’ve
              hosted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className="bg-card p-6 rounded-xl shadow-soft border border-border/50 card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className="h-40 rounded-lg bg-cover bg-center mb-4"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${
                      categoryColors[event.category]
                    }`}
                  >
                    {event.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-secondary" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-secondary" />
                    <span>{event.attendees} attended</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
