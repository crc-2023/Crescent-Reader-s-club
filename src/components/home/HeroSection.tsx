import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Users, Calendar, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-background.jpg";

export default function HeroSection() {
  // Animated counters for stats
  const [books, setBooks] = useState(0);
  const [members, setMembers] = useState(0);
  const [events, setEvents] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBooks((prev) => (prev < 5 ? prev + 1 : 5));
      setMembers((prev) => (prev < 150 ? prev + 2 : 150));
      setEvents((prev) => (prev < 50 ? prev + 1 : 50));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/90">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      </div>

      {/* Floating Animated Shapes */}
      <motion.div
        className="absolute w-40 h-40 bg-secondary/25 rounded-full top-10 left-16 animate-float-slow"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />
      <motion.div
        className="absolute w-28 h-28 bg-secondary/20 rounded-full bottom-20 right-10 animate-float-fast"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute w-20 h-20 bg-secondary/15 rounded-full top-1/2 left-1/3 animate-float"
        animate={{ x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Welcome to
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-6xl md:text-8xl mt-2">
              Crescent Readers Club
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join a vibrant community of book enthusiasts! Participate in reading sessions,
            engaging podcasts, creative writing, and cultural events. Discover stories,
            explore ideas, and connect with passionate readers and writers.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-8 py-5 text-lg transition-all shadow-lg"
            >
              <Link to="/about">
                Discover Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/50 text-black hover:bg-white/10 px-8 py-5 text-lg transition-all"
            >
              <Link to="/events">Join Our Events</Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center card-hover">
              <BookOpen className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">{books}+</h3>
              <p className="text-white/80 text-sm">Books Discussed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center card-hover">
              <Users className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">{members}+</h3>
              <p className="text-white/80 text-sm">Active Members</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center card-hover">
              <Calendar className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-white mb-2">{events}+</h3>
              <p className="text-white/80 text-sm">Events Hosted</p>
            </div>
          </motion.div>

          {/* Featured Activities / Podcasts */}
          <motion.div
            className="mt-16 text-left max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-2">
              <Mic className="h-6 w-6 text-secondary" /> Featured Podcasts & Stories
            </h2>
            <p className="text-white/80 mb-6">
              Explore our curated podcasts, stories, and reviews created by our members.
              Learn about AI, creative writing, culture, and more — with detailed discussions
              and insightful content for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 card-hover hover:scale-105 transition-transform">
                <h3 className="font-semibold text-white text-xl mb-2">AI Podcast</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Dive deep into the world of Artificial Intelligence. Our members discuss
                  AI advancements, ethical dilemmas, and how technology shapes our future.
                  Perfect for tech enthusiasts and curious minds alike.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 card-hover hover:scale-105 transition-transform">
                <h3 className="font-semibold text-white text-xl mb-2">Independence Day Special</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Celebrate creativity and patriotism through stories, poems, and reflections
                  from our club members. Explore rich narratives that highlight culture,
                  heritage, and the spirit of freedom.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Explore All Activities Button */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-900 px-10 py-5 shadow-lg transition-transform hover:scale-105"
            >
              <Link to="/activities">
                Explore All Activities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
