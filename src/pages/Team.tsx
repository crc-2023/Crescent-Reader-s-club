import { Star, Users, PenTool, BookOpen, Megaphone, Video, Globe, Share2, UserCircle, Pencil, Brush } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const roles = {
  leadership: [
    { name: 'Yamini.V', role: 'President', icon: Star },
    { name: 'Musthaq Naina B', role: 'Secretary', icon: PenTool },
    { name: 'Shalini I', role: 'Secretary', icon: PenTool },
    { name: 'A. Mohamed Yahya', role: 'Joint Secretary', icon: PenTool },
    { name: 'R. Sushmitha', role: 'Joint Secretary', icon: PenTool },
    { name: 'Jishnu J', role: 'Vice President', icon: Star },
    { name: 'A.M Aliya Aiman Shareen', role: 'Vice President', icon: Star },
    { name: 'Senthil Murugan R', role: 'Treasurer', icon: BookOpen },
    { name: 'Yashvita K', role: 'PR', icon: Megaphone },
    { name: 'T Madhu Mithra', role: 'Joint Public Relations', icon: Megaphone },
  ],
  organizers: [
    { name: 'Swaminathan S', role: 'General Organizer', icon: Users },
    { name: 'Irfan Ali Ameenudeen', role: 'General Organizer', icon: Users },
    { name: 'Shaistha Farheen', role: 'General Organizer', icon: Users },
    { name: 'Raheena Kurath Riaz', role: 'General Organizer', icon: Users },
  ],
  marketing: [
    { name: 'Harish Aabitheen J', role: 'Marketing Lead', icon: Megaphone },
    { name: 'N Latheefa Asma', role: 'Marketing Joint Lead', icon: Megaphone },
    { name: 'Mahalakshmi Venkatesh', role: 'Marketing Joint Lead', icon: Megaphone },
  ],
  media: [
    { name: 'Mohammed Muzzammil M K', role: 'Website Handle', icon: Globe },
    { name: 'Akshaya', role: 'Social Media Handle', icon: Share2 },
    { name: 'Fathima Firdhouse', role: 'Social Media Handle', icon: Share2 },
    { name: 'S. Sairam', role: 'Video Editor', icon: Video },
    { name: 'R. Rajiv Raam', role: 'Crespulse English', icon: BookOpen },
    { name: 'Mohamed Suhaim', role: 'Crespulse Tamil', icon: BookOpen },
    { name: 'Sara Sakeena', role: 'CresPods Head', icon: Video },
    { name: 'Leroy Prajwal Golconda', role: 'CresTales Head', icon: BookOpen },
  ],
  executive: [
    'Mohamed Suharavardhi M N','Raiyan B','Mohamed Faheem','A. Rizwan Shariff',
    'S. Ponranjana','Mohamed Imthiyas A','Zainab Hussain','Mohammed Nishadh S',
    'Tharun S','Mohamed Yaseen','Syed Ismail S.I','Anjana Devi.S','Murshidha Shereen'
  ].map(n => ({ name: n, role: 'Executive Member', icon: UserCircle })),
  associate: [
    'S. Mohamed Shameem','Kishore Kanna','Kavya S','Sumaiya Afreen','Ahamed',
    'Varnikhaa Shri A','Mohammad Muzzamil','A. Muhammad Suhaib'
  ].map(n => ({ name: n, role: 'Associate Member', icon: UserCircle })),
  special: [
    { name: 'Faheema Bushra', role: 'Designing Team', icon: Brush },
    { name: 'Mohammed Faadil', role: 'Marathi Lead', icon: BookOpen },
    { name: 'Dhanya S', role: 'Event General Lead', icon: Star },
    { name: 'R. Roopesh', role: 'Write-up Lead', icon: Pencil },
    { name: 'Mohamed Arshad J', role: 'Joint Write-up Lead', icon: Pencil },
  ]
};

export default function Team() {
  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <img
          src={heroBackground}
          alt="Hero Background"
          className="absolute w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet Our <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">CRC Team</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The heart of Crescent Readers Club lies in its people. Each member plays a vital role in shaping our journey.
          </motion.p>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {Object.entries(roles).map(([group, members], idx) => (
            <motion.div
              key={group}
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
            >
              <h2 className="text-4xl font-bold mb-8 text-gradient capitalize">
                {group === 'leadership' ? 'Leadership'
                  : group === 'organizers' ? 'Organizers'
                  : group === 'marketing' ? 'Marketing & PR'
                  : group === 'media' ? 'Media & Creative Heads'
                  : group === 'executive' ? 'Executive Members'
                  : group === 'associate' ? 'Associate Members'
                  : 'Special Teams'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((m: any, i: number) => (
                  <motion.div
                    key={i}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition-transform"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <m.icon className="h-8 w-8 text-purple-500" />
                      <div>
                        <h3 className="text-xl font-semibold">{m.name}</h3>
                        <p className="text-white/70">{m.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/90 text-center">
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join Our <span className="text-purple-500">Team</span>
        </motion.h2>
        <motion.p
          className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Be part of Crescent Readers Club and help us shape unforgettable literary experiences.
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
