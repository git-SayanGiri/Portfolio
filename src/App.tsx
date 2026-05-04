import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Database, 
  Globe, 
  Cpu, 
  Code2, 
  Layout, 
  Server, 
  Network, 
  Terminal,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from 'lucide-react';
import { useRef } from 'react';

const skills = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    description: "Crafting immersive user experiences with React, TypeScript, and modern styling frameworks.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"],
    color: "from-blue-400 to-cyan-400"
  },
  {
    title: "DBMS Fundamentals",
    icon: <Database className="w-6 h-6" />,
    description: "Strong academic understanding of relational and non-relational database principles.",
    tech: ["PostgreSQL", "MongoDB", "SQL Optimization", "Normalization"],
    color: "from-orange-400 to-red-400"
  },
  {
    title: "Computer Networking",
    icon: <Network className="w-6 h-6" />,
    description: "Solid foundation in network protocols, security, and web communication.",
    tech: ["TCP/IP", "HTTP/HTTPS", "DNS", "OSI Model"],
    color: "from-purple-400 to-pink-400"
  }
];

const stats = [
  { label: "DSA Problems", value: "50+" },
  { label: "Projects", value: "1" },
  { label: "Status", value: "Student" },
  { label: "Tech Stack", value: "Frontend" },
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-primary selection:text-surface">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-6 border-b border-white/5 bg-surface/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tighter"
          >
            SAYAN<span className="text-primary">.</span>GIRI
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {['Expertise', 'DSA', 'Network', 'Database', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-surface transition-all"
          >
            Resume
          </motion.button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for projects
              </div>
              
              <h1 className="text-6xl md:text-9xl mb-8 leading-[0.9] tracking-tighter">
                SAYAN <br /> <span className="text-gradient">GIRI.</span>
              </h1>
              
              <p className="max-w-xl text-lg text-slate-400 mb-10 leading-relaxed font-light">
                Aspiring frontend engineer and student with a focus on building beautiful user interfaces, 
                high-performance web experiences, and optimized database architectures.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl bg-primary text-surface font-bold text-sm tracking-tight flex items-center gap-2"
                >
                  Hire Me <ChevronRight className="w-4 h-4" />
                </motion.button>
                <div className="flex items-center gap-2">
                  <motion.a
                    href="https://github.com/git-SayanGiri"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sayangiri/"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="mailto:sayangiri260@gmail.com"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-display font-medium text-white mb-1 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section id="expertise" className="py-20 px-6 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl mb-4 tracking-tighter italic font-medium">DOMAIN EXPERTISE</h2>
              <p className="text-slate-500 max-w-lg text-sm">Specializing in the intersection of high-level frontend interfaces and low-level system performance.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-3xl border border-white/5 bg-card hover:bg-card/80 transition-all overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
                  
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  
                  <h3 className="text-xl mb-3">{skill.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map((t, j) => (
                      <span key={j} className="text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg bg-surface border border-white/5 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DSA & Programming Section */}
        <section id="dsa" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-mono text-xs mb-4 block tracking-widest">01 // ALGORITHMS</span>
                <h2 className="text-5xl md:text-7xl mb-8 tracking-tighter leading-tight">PROGRAMMING <br /> & DSA MASTER.</h2>
                <p className="text-slate-400 text-lg font-light mb-8 max-w-xl">
                  Deep understanding of data structures and algorithmic complexity. 
                  Experienced in solving complex computational problems using optimal time and space complexity.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Mastery in Trees, Graphs & Dynamic Programming",
                    "Advanced Computational Logic & Math",
                    "Complexity Analysis (Big O)",
                    "Competitive Programming Background"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <p className="text-sm text-slate-300 font-medium group-hover:translate-x-2 transition-transform cursor-default">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square glass rounded-3xl p-8 flex flex-col justify-center border-white/10 shadow-2xl relative z-10">
                  <div className="space-y-8 font-mono">
                    <div className="space-y-2">
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest">Logic Visualization</div>
                      <div className="h-64 rounded-xl bg-surface p-6 relative overflow-hidden group">
                        <div className="flex items-end justify-between h-full gap-2">
                          {[60, 40, 80, 50, 90, 70, 45, 65, 30, 85].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              className="w-full bg-primary/20 border-t border-primary group-hover:bg-primary/40 transition-colors"
                            />
                          ))}
                        </div>
                        <div className="absolute top-6 left-6 text-[8px] text-primary">TRAVERSING_GRAPH_NODES... [OK]</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-[8px] text-slate-500 uppercase mb-2">Primary Language</p>
                        <p className="text-xs font-bold text-white tracking-widest uppercase">C++ / Java</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-[8px] text-slate-500 uppercase mb-2">Secondary</p>
                        <p className="text-xs font-bold text-white tracking-widest uppercase">JavaScript / Python</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Network & DBMS Dual Section */}
        <section id="network" className="py-20 px-6 border-y border-white/5 bg-surface relative overflow-hidden">
          <div className="absolute top-0 right-0 p-20 opacity-5">
            <Database className="w-96 h-96" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-10 rounded-3xl bg-white/5 border border-white/5">
                <div className="text-primary font-mono text-[10px] mb-4 tracking-[0.3em]">02 // NETWORKS</div>
                <h3 className="text-3xl mb-4 font-medium tracking-tight">Computer Networking</h3>
                <p className="text-slate-400 text-sm font-light mb-8 !leading-loose">
                  Underneath every application lies the network. From HTTP/3 protocols to low-level socket programming, I ensure data travels fast, securely, and reliably. Expert in load balancing, CDN orchestration, and packet analysis.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {["TCP/IP", "UDP", "TLS", "QUIC", "DNS", "BGP"].map(t => (
                    <div key={t} className="px-3 py-2 bg-surface text-[10px] text-slate-400 rounded border border-white/5 font-mono">{t}</div>
                  ))}
                </div>
              </div>

              <div id="database" className="p-10 rounded-3xl bg-card border border-white/5">
                <div className="text-primary font-mono text-[10px] mb-4 tracking-[0.3em]">03 // STORAGE</div>
                <h3 className="text-3xl mb-4 font-medium tracking-tight">Deep DBMS Knowledge</h3>
                <p className="text-slate-400 text-sm font-light mb-8 !leading-loose">
                  Performance at scale requires intelligent data modeling. Proficient in indexing strategies, partition logic, and the trade-offs between SQL and NoSQL environments. ACID compliance enthusiast.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] text-primary/60 border-t border-white/5 pt-6">
                  <span className="font-mono">#RELATIONAL</span>
                  <span className="font-mono">#GRAPH_DB</span>
                  <span className="font-mono">#KEY_VALUE</span>
                  <span className="font-mono">#VECTOR_SEARCH</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <footer id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl mb-12 tracking-tighter">LET'S START A <br /><span className="text-gradient underline decoration-primary/20 underline-offset-8">DIALOGUE.</span></h2>
              <p className="text-slate-400 mb-12 text-lg font-light">
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 mb-20">
                <a href="mailto:sayangiri260@gmail.com" className="group text-2xl font-display font-medium hover:text-primary transition-colors flex items-center gap-3">
                  sayangiri260@gmail.com
                  <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              <div className="flex justify-center gap-10">
                <a 
                  href="https://github.com/git-SayanGiri" 
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/sayangiri/" 
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/im_sayan.giri?igsh=MTk0bmpidnUxcDR2ag==" 
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>

              <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[10px] text-slate-600 uppercase tracking-widest">© 2026 Sayan Giri — Systems & Interfaces</p>
                <div className="flex items-center gap-4 text-[10px] text-slate-600">
                  <span>BUILT WITH REACT</span>
                  <div className="w-1 h-1 rounded-full bg-slate-800" />
                  <span>CRAFTED FOR SPEED</span>
                </div>
              </div>
            </motion.div>
          </div>
        </footer>
      </main>

      {/* Decorative Orbs */}
      <div className="fixed top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] opacity-20 pointer-events-none" />
      <div className="fixed bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] opacity-10 pointer-events-none" />
    </div>
  );
}
