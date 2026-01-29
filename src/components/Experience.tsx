import { motion } from 'framer-motion'
import { resumeData } from '../data/resume'

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Professional Journey</h2>
        <div className="w-24 h-1.5 bg-primary mx-auto mb-16 rounded-full" />
        
        <div className="space-y-12">
          {resumeData.experience.map((job: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary/30 pb-4"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-border overflow-hidden shadow-sm shrink-0">
                      <img
                        src={`https://logo.clearbit.com/${job.domain}?size=100`}
                        alt={job.company}
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://www.google.com/s2/favicons?domain=${job.domain}&sz=128`;
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading">{job.title}</h3>
                      <p className="text-primary font-bold tracking-tight uppercase text-sm">{job.company}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-accent px-4 py-1.5 rounded-full font-bold self-start md:self-center uppercase tracking-wider border border-border">
                    {job.period}
                  </span>
                </div>
                
                <ul className="space-y-3 text-muted-foreground text-sm list-disc pl-4 font-medium leading-relaxed">
                  {job.responsibilities.map((task: string, i: number) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
