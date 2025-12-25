import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Pen, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";

/* ------------------ animation variants ------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ------------------ page ------------------ */

const LandingPage = () => {
  const features = [
    {
      icon: <BookOpen className="w-7 h-7 text-green-600" />,
      title: "Discover meaningful stories",
      description:
        "Read developer-first blogs on Web, Web3, systems, and real-world engineering.",
    },
    {
      icon: <Pen className="w-7 h-7 text-green-600" />,
      title: "Write without limits",
      description:
        "A clean editor that helps you focus on ideas, not formatting.",
    },
    {
      icon: <Users className="w-7 h-7 text-green-600" />,
      title: "Build your audience",
      description: "Connect with developers who care about quality and depth.",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-green-600" />,
      title: "Grow as a creator",
      description: "Track engagement and evolve your writing with feedback.",
    },
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen bg-white overflow-hidden">
        {/* ---------------- HERO SECTION ---------------- */}
        <section className="relative">
          {/* subtle background glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-50/60 to-white" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-7xl mx-auto px-6 pt-28 pb-32"
          >
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
            >
              Where developers
              <br />
              <span className="text-green-600">share what matters</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-xl text-gray-600 max-w-2xl"
            >
              A modern writing platform for engineers, builders, and thinkers.
              Read deep-dives. Share experiences. Learn continuously.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium flex items-center gap-2"
                >
                  Start reading <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-green-100 text-green-700 font-medium"
                >
                  Start writing
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------- FEATURES ---------------- */}
        <section className="bg-gray-50 py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-7xl mx-auto px-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-extrabold text-center"
            >
              Built for serious creators
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-600 text-center max-w-xl mx-auto"
            >
              Everything you need to publish thoughtful, high-quality content.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    {feature.icon}
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section className="py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto px-6"
          >
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 p-16 text-center text-white"
            >
              <h2 className="text-4xl font-extrabold">Start writing today</h2>

              <p className="mt-4 text-green-100 text-lg max-w-xl mx-auto">
                Join a growing community of developers sharing real knowledge,
                not clickbait.
              </p>

              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-10 px-10 py-4 rounded-full bg-white text-green-700 font-semibold"
                >
                  Create free account
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer className="border-t py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Medium Clone · Built by Kartikey
        </footer>
      </div>
    </PageWrapper>
  );
};

export default LandingPage;
