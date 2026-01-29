import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Technical Expertise</h2>
        <div className="w-24 h-1.5 bg-primary mx-auto mb-16 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {Object.entries(resumeData.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-card border-2 border-border rounded-3xl shadow-xl hover:border-primary/50 transition-all group"
            >
              <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors flex items-center font-heading">
                <span className="w-2 h-6 bg-primary mr-3 rounded-full" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(skills as string[]).map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-muted text-foreground rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all cursor-default border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-primary/5 rounded-[3rem] border-2 border-dashed border-primary/20">
          <h3 className="text-2xl font-black mb-10 text-center tracking-tight uppercase italic font-heading">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {resumeData.certifications.map((cert: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="px-5 py-3 bg-white dark:bg-zinc-900 border border-border shadow-sm hover:border-primary/50 transition-all rounded-xl"
              >
                <span className="text-sm font-bold text-foreground font-sans uppercase tracking-tight">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}