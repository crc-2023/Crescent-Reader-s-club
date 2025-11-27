import { useState, useEffect, KeyboardEvent } from "react";
import { Calendar, BookOpen, Mic, Newspaper, X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import ImmersiveBackground from "@/components/ui/immersive-background";
import { motion, AnimatePresence } from "framer-motion";

// ================== DATA ================== //
export const cresTales = [
    {
        id: 1,
        title: "AI Photo Synthesis",
        image: "src/assets/Activities/CresTales/ai_phtsyn.jpg",
        category: "Story",
        description:
            "A creative experiment where members generated AI-driven visuals paired with short narratives, blending technology with imagination.",
    },
    {
        id: 2,
        title: "Book Review",
        image: "src/assets/Activities/CresTales/book_review.jpg",
        category: "Review",
        description:
            "Our members share insightful reviews of books, highlighting key lessons, favorite quotes, and personal takeaways.",
    },
    {
        id: 3,
        title: "Independence Day Special",
        image: "src/assets/Activities/CresTales/cele_indp_days.jpg",
        category: "Special",
        description:
            "Celebrating India's Independence Day with stories, reflections, and creative content from our club writers.",
    },
    {
        id: 4,
        title: "Creative Short Content",
        image: "src/assets/Activities/CresTales/csc.jpg",
        category: "Story",
        description:
            "Bite-sized creative pieces including microfiction, one-liners, and thought-provoking short content.",
    },
    {
        id: 5,
        title: "Days in Words",
        image: "src/assets/Activities/CresTales/days_words.jpg",
        category: "Poetry",
        description:
            "Poetry that captures everyday life, emotions, and reflections of our members in lyrical form.",
    },
    {
        id: 6,
        title: "Detective Files",
        image: "src/assets/Activities/CresTales/detective_files.jpg",
        category: "Mystery",
        description:
            "Engaging mystery stories where members play the role of detectives, solving imaginative cases.",
    },
    {
        id: 7,
        title: "Detective Uncovered",
        image: "src/assets/Activities/CresTales/detective_uncover.jpg",
        category: "Mystery",
        description:
            "Behind-the-scenes analysis of popular detective tales and fictional mysteries with club discussions.",
    },
    {
        id: 8,
        title: "IPL Insights",
        image: "src/assets/Activities/CresTales/ipl.jpg",
        category: "Sports",
        description:
            "Weekly insights and commentaries on IPL matches, blending sports enthusiasm with analytical writing.",
    },
];

export const cresPods = [
    {
        id: 9,
        title: "AI Podcast",
        image: "src/assets/Activities/CresPods/ai.jpg",
        category: "Podcast",
        description:
            "A podcast exploring the future of Artificial Intelligence, its opportunities, challenges, and impact on society.",
    },
    {
        id: 10,
        title: "Five Resume Tips",
        image: "src/assets/Activities/CresPods/five_resume.jpg",
        category: "Podcast",
        description:
            "Actionable resume-building tips shared by experts to help students and professionals shine in job applications.",
    },
    {
        id: 11,
        title: "Freedom Talk",
        image: "src/assets/Activities/CresPods/freedom.jpg",
        category: "Podcast",
        description:
            "An engaging discussion on the meaning of freedom, democracy, and the responsibilities it brings.",
    },
    {
        id: 12,
        title: "Friends Forever",
        image: "src/assets/Activities/CresPods/frnds.jpg",
        category: "Podcast",
        description:
            "A light-hearted talk on friendship, shared memories, and the importance of human connection.",
    },
    {
        id: 13,
        title: "Independence Day Special",
        image: "src/assets/Activities/CresPods/hpy_ind_day.jpg",
        category: "Podcast",
        description:
            "Special Independence Day podcast featuring patriotic stories, interviews, and cultural reflections.",
    },
];

export const cresPulse = [
    {
        id: 14,
        title: "August 3 Edition",
        date: "2024-08-03",
        document: "src/assets/Activities/CresPulse/aug_03.pdf",
        category: "Newsletter",
        description:
            "CresPulse launch edition, highlighting upcoming events, new initiatives, and club announcements.",
    },
    {
        id: 15,
        title: "August 10 Edition",
        date: "2024-08-10",
        document: "src/assets/Activities/CresPulse/aug_10.pdf",
        category: "Newsletter",
        description:
            "Coverage of cultural activities, storytelling highlights, and featured student writers.",
    },
    {
        id: 16,
        title: "August 17 Edition",
        date: "2024-08-17",
        document: "src/assets/Activities/CresPulse/aug_17.pdf",
        category: "Newsletter",
        description:
            "Special Independence week issue packed with patriotic stories, poems, and artwork.",
    },
    {
        id: 17,
        title: "August 24 Edition",
        date: "2024-08-24",
        document: "src/assets/Activities/CresPulse/aug_24.pdf",
        category: "Newsletter",
        description:
            "Spotlight on CresPods and CresTales contributors with behind-the-scenes club updates.",
    },
    {
        id: 18,
        title: "August 31 Edition",
        date: "2024-08-31",
        document: "src/assets/Activities/CresPulse/aug_31.pdf",
        category: "Newsletter",
        description:
            "Monthly recap featuring top stories, event coverage, and future plans.",
    },
    {
        id: 19,
        title: "September 7 Edition",
        date: "2024-09-07",
        document: "src/assets/Activities/CresPulse/sep_07.pdf", // PDF document
        category: "Newsletter",
        description:
            "Highlighting CresClub’s involvement in cultural activities and sports analysis.",
    },
    {
        id: 20,
        title: "September 14 Edition",
        date: "2024-09-14",
        document: "src/assets/Activities/CresPulse/sep_14.pdf",
        category: "Newsletter",
        description:
            "Exploring creativity through CresTales and engaging club member interviews.",
    },
];

// ================== CATEGORY COLORS ================== //
const categoryColors: Record<string, string> = {
    Story: "from-blue-500 to-purple-600",
    Review: "from-green-500 to-teal-600",
    Special: "from-pink-500 to-rose-600",
    Poetry: "from-indigo-500 to-blue-600",
    Mystery: "from-orange-500 to-red-600",
    Sports: "from-amber-500 to-yellow-600",
    Podcast: "from-cyan-500 to-blue-600",
    Newsletter: "from-purple-500 to-indigo-600",
};

// ================== COMPONENT ================== //
export default function Activities() {
    const allItems = [...cresTales, ...cresPods, ...cresPulse];
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedItem = selectedIndex !== null ? allItems[selectedIndex] : null;

    // Keyboard navigation (Esc to close, arrows to navigate)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedItem) return;
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowRight") setSelectedIndex((i) => (i !== null ? (i + 1) % allItems.length : 0));
            if (e.key === "ArrowLeft") setSelectedIndex((i) => (i !== null ? (i - 1 + allItems.length) % allItems.length : 0));
        };
        window.addEventListener("keydown", handleKeyDown as any);
        return () => window.removeEventListener("keydown", handleKeyDown as any);
    }, [selectedItem, allItems.length]);

    const renderCard = (item: any, index: number) => (
        <motion.div
            key={item.id}
            className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden card-hover cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedIndex(allItems.findIndex((i) => i.id === item.id))}
        >
            <div
                className="h-48 bg-cover bg-center relative group"
                style={{ backgroundImage: `url(${item.image || "/default.jpg"})` }}
            >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all" />
                <div className="absolute top-4 left-4">
                    <span
                        className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${categoryColors[item.category]}`}
                    >
                        {item.category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground leading-tight mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </div>
        </motion.div>
    );

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <ImmersiveBackground height="min-h-[60vh]" overlay="dark">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our <span className="text-secondary">Activities</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Explore CresTales, CresPods, and CresPulse – where stories, voices,
                        and newsletters bring our community together with creativity and passion.
                    </motion.p>
                </div>
            </ImmersiveBackground>

            {/* CresTales Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                            <BookOpen className="h-8 w-8 text-secondary" /> CresTales
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Where creativity meets imagination — stories, reviews, and poetry from our members.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {cresTales.map(renderCard)}
                    </div>
                </div>
            </section>

            {/* CresPods Section */}
            <section className="py-20 bg-gradient-to-br from-accent/20 to-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                            <Mic className="h-8 w-8 text-secondary" /> CresPods
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Dive into thought-provoking conversations, insights, and creative podcasts by our members.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {cresPods.map(renderCard)}
                    </div>
                    {/* Spotify Button */}
                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://open.spotify.com/episode/7lvvgXjbminT2G5ZvvpuLx?si=ad72d074535043bb" // Replace with your actual Spotify link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all"
                        >
                            Go to Spotify
                        </a>
                    </div>
                </div>
            </section>


            {/* CresPulse Section */}
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                            <Newspaper className="h-8 w-8 text-secondary" /> CresPulse
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Stay updated with our weekly newsletter covering stories, events, and highlights.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {cresPulse.map(renderCard)}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-card rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl relative"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 text-black hover:text-red-500 z-10"
                                onClick={() => setSelectedIndex(null)}
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Prev button */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary"
                                onClick={() =>
                                    setSelectedIndex((i) =>
                                        i !== null ? (i - 1 + allItems.length) % allItems.length : 0
                                    )
                                }
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </button>

                            {/* Next button */}
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary"
                                onClick={() =>
                                    setSelectedIndex((i) =>
                                        i !== null ? (i + 1) % allItems.length : 0
                                    )
                                }
                            >
                                <ChevronRight className="h-8 w-8" />
                            </button>

                            {/* Content */}
                            <div className="w-full bg-background flex justify-center items-center">
                                {selectedItem.document ? (
                                    <div className="w-full h-[80vh] flex flex-col">
                                        <iframe
                                            src={selectedItem.document}
                                            title={selectedItem.title}
                                            className="w-full h-full rounded-md"
                                        />
                                        <a
                                            href={selectedItem.document}
                                            download
                                            className="flex items-center gap-2 mt-2 text-secondary hover:underline self-end px-4 py-2"
                                        >
                                            <Download className="h-5 w-5" /> Download Newsletter
                                        </a>
                                    </div>
                                ) : (
                                    <img
                                        src={selectedItem.image}
                                        alt={selectedItem.title}
                                        className="w-full h-auto object-contain max-h-[80vh] mx-auto"
                                    />
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-foreground">
                                    {selectedItem.title}
                                </h3>
                                {selectedItem.date && (
                                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                                        <Calendar className="h-4 w-4 mr-2 text-secondary" />
                                        {new Date(selectedItem.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </div>
                                )}
                                <p className="text-muted-foreground text-lg">
                                    {selectedItem.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
