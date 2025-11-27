import { BookOpen, Target, Eye, Users, Award, Calendar, Globe, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBackground from '@/assets/hero-background.jpg';
import { Button } from '@/components/ui/button';

const timeline = [
  { year: '2023', title: 'Club Foundation', description: 'Started as a passionate circle of readers exploring classics and modern works.' },
  { year: '2023', title: 'Community Growth', description: 'Welcomed diverse members and expanded genres across cultures and themes.' },
  { year: '2023', title: 'Digital Presence', description: 'Launched podcast, online forums, and virtual book discussions reaching global audiences.' },
  { year: '2023', title: 'CresPulse Launch', description: 'Introduced our blog and newsletter, spotlighting reviews, author interviews, and insights.' },
  { year: '2025', title: 'Community Impact', description: 'Crossed 150+ active members, partnered with libraries, and initiated social reading campaigns.' },
];

const objectives = [
  { icon: BookOpen, title: 'Literary Exploration', description: 'Dive deep into diverse genres, movements, and authors worldwide.' },
  { icon: Users, title: 'Community Building', description: 'Foster connections and friendships through shared literary journeys.' },
  { icon: Award, title: 'Intellectual Growth', description: 'Boost critical thinking, analysis, and cultural awareness.' },
  { icon: Calendar, title: 'Consistent Engagement', description: 'Curated reading schedules, events, and panel discussions.' },
  { icon: Globe, title: 'Global Reach', description: 'Engage readers across borders with multilingual, multicultural discussions.' },
  { icon: Heart, title: 'Inclusive Space', description: 'A safe, welcoming environment for all readers and voices.' },
];

const stats = [
  { number: '150+', label: 'Active Members' },
  { number: '15+', label: 'Events Hosted' },
  { number: '20+', label: 'Library Partnerships' },
  { number: '10+', label: 'Books Discussed' },
];

export default function About() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="absolute w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text block text-4xl md:text-6xl mt-2">
              Crescent Readers Club
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A thriving literary family where stories connect people, ideas spark debates, and books open doors to new worlds.
          </motion.p>

          <motion.div
            className="flex justify-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-black text-white px-8 py-4 shadow-lg hover:scale-105 transition">Join Us</Button>
            <Button className="border border-white/50 text-white px-8 py-4 hover:bg-white/10 transition">Explore Events</Button>
          </motion.div>
        </div>
      </section>

      {/* Faculty Coordinators Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/30 to-black text-center">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Faculty <span className="text-gradient">Coordinators</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-2xl font-semibold">Dr. P PanneerSelvam</h3>
              <p className="text-purple-400 font-medium">Librarian</p>
              <p className="text-white/70 mt-2">B.S.Abdur Rahman Crescent Institute of Science & Technology</p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold">Dr. Nazneen M.Y.</h3>
              <p className="text-purple-400 font-medium">Assistant Professor, Law Department</p>
              <p className="text-white/70 mt-2">B.S.Abdur Rahman Crescent Institute of Science & Technology</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Our <span className="text-gradient">Objectives</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            The values that guide our journey as readers and thinkers.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="inline-flex p-3 rounded-xl bg-purple-500/20 mb-4">
                  <obj.icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{obj.title}</h3>
                <p className="text-white/70">{obj.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-black/90">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Our <span className="text-gradient">Journey</span>
          </motion.h2>
          <p className="text-xl text-white/80 mb-16">
            Key milestones that shaped our story.
          </p>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-500/30 transform -translate-x-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex items-center md:flex-row ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="absolute left-1/2 w-5 h-5 bg-purple-500 rounded-full transform -translate-x-1/2 z-10 shadow-lg" />
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                      <div className="text-2xl font-bold text-purple-500">{item.year}</div>
                      <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                      <p className="text-white/70 mt-1">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-900/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 className="text-4xl font-bold mb-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Our Impact
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-extrabold text-purple-500">{s.number}</div>
                <p className="text-white/80 mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/90 text-center">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Be Part of Our Story
        </motion.h2>
        <motion.p
          className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Join Crescent Readers Club and embark on a lifelong literary adventure. Your next favorite story—and friends—await.
        </motion.p>
        <Button 
  asChild 
  className="px-8 py-4 bg-purple-500 text-white rounded-xl shadow-lg hover:scale-105 transition"
>
  <a 
    href="https://forms.gle/CZnhUrLXpedTba5T6" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Become a Member
  </a>
</Button>
      </section>
    </div>
  );
}




