import { Mail, Phone, MapPin, Linkedin, Github, Palette } from 'lucide-react'
import { resumeData } from '../data/resume'

interface FooterProps {
  theme?: string
  setTheme?: (theme: 'blue' | 'purple' | 'teal') => void
}

export const Footer = ({ theme, setTheme }: FooterProps) => {
  return (
    <footer id="contact" className="py-16 bg-background border-t border-border px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold font-heading text-xl mb-6 tracking-tight">VIVEK SATTANATHA</h3>
            <p className="text-muted-foreground text-sm max-w-xs font-medium leading-relaxed">
              Elite ServiceNow CTA and Solution Architect with 13+ years of experience. 
              Specializing in ITIL-aligned automation and enterprise transformation.
            </p>
            
            {/* Theme Selector */}
            {setTheme && (
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                  <Palette size={14} /> Select Theme Color
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setTheme('blue')}
                    className={`w-8 h-8 rounded-full bg-blue-500 border-2 ${theme === 'blue' ? 'border-foreground' : 'border-transparent'}`}
                    title="Blue Theme"
                  />
                  <button 
                    onClick={() => setTheme('purple')}
                    className={`w-8 h-8 rounded-full bg-purple-500 border-2 ${theme === 'purple' ? 'border-foreground' : 'border-transparent'}`}
                    title="Purple Theme"
                  />
                  <button 
                    onClick={() => setTheme('teal')}
                    className={`w-8 h-8 rounded-full bg-teal-500 border-2 ${theme === 'teal' ? 'border-foreground' : 'border-transparent'}`}
                    title="Teal Theme"
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold font-heading mb-6 uppercase tracking-widest text-xs text-primary">Contact Details</h4>
            <a 
              href={`mailto:${resumeData.contact.email}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{resumeData.contact.email}</span>
            </a>
            <a 
              href={`tel:${resumeData.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
            >
              <Phone size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{resumeData.contact.phone}</span>
            </a>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resumeData.contact.location)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
            >
              <MapPin size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{resumeData.contact.location}</span>
            </a>
          </div>
          
          <div>
            <h4 className="font-bold font-heading mb-6 uppercase tracking-widest text-xs text-primary">Social Presence</h4>
            <div className="flex gap-4">
              <a
                href={resumeData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={resumeData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-accent rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-[10px] uppercase tracking-[0.2em] font-bold">
          <p>© {new Date().getFullYear()} Vivek Sattanatha K. All rights reserved.</p>
          <p className="mt-2 text-primary/50">Built with React, TypeScript, Tailwind CSS, Docker & Self-hosted</p>
        </div>
      </div>
    </footer>
  )
}