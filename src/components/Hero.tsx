import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, Linkedin, Mail, FileText, Clock, Award, CheckCircle, Cloud } from 'lucide-react'
import { resumeData } from '../data/resume'

const iconMap: Record<string, any> = {
  Clock,
  Award,
  CheckCircle,
  Cloud,
}

const StatCard = ({ stat }: { stat: any }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const Icon = iconMap[stat.icon]

  return (
    <div 
      className="perspective-1000 h-56 w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden p-6 bg-card border border-border rounded-3xl shadow-lg flex flex-col items-center justify-center">
          <div className={`p-3 rounded-2xl bg-muted group-hover:bg-primary group-hover:text-white transition-colors mb-4 ${stat.color}`}>
            <Icon size={24} />
          </div>
          <span className="text-2xl font-bold font-mono tracking-tight">{stat.value}</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-1 text-center leading-tight px-2">{stat.label}</span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden p-6 bg-primary text-primary-foreground rounded-3xl shadow-lg flex flex-col items-center justify-center rotate-y-180">
          <p className="text-sm font-semibold leading-relaxed text-center px-2">
            {stat.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_30px_rgba(var(--primary),0.5)]">
            <img
              src="/images/MyPhoto.jpg"
              alt={resumeData.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Vivek+Sattanatha&size=200';
              }}
            />
          </div>
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
          >
            CTA Certified
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-extrabold mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-cyan-400"
        >
          {resumeData.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-semibold text-muted-foreground mb-12 font-heading"
        >
          {resumeData.title}
        </motion.h2>

        {/* Flip Stats Widgets */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mb-16">
          {resumeData.stats.map((stat: any, i: number) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>

        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {resumeData.badges.map((badge: string, i: number) => (
            <motion.div 
              key={i} 
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.15 }}
              className="h-24 md:h-32 bg-white rounded-2xl p-4 border border-border shadow-md hover:shadow-2xl transition-all"
            >
              <img 
                src={badge} 
                alt="Badge" 
                className="h-full w-auto object-contain"
                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href={resumeData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-accent rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href={resumeData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-accent rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="flex items-center gap-2 px-8 py-4 bg-accent rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
          >
            <Mail size={20} /> Contact
          </a>
          <a
            href="/data/resume.pdf"
            download="Vivek_Sattanatha_ServiceNow_Resume.pdf"
            className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all shadow-[0_0_20px_rgba(var(--primary),0.5)]"
          >
            <FileText size={20} /> Resume PDF
          </a>
        </motion.div>
      </div>
    </section>
  )
}
