import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X, Maximize2 } from 'lucide-react'
import { resumeData } from '../data/resume'

export const Appreciations = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="appreciations" className="py-24 bg-muted/30 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4 text-center">Professional Appreciations</h2>
        <div className="w-24 h-1.5 bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-medium">
          A collection of feedback and recognitions from colleagues, managers, and the global ServiceNow community.
        </p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {resumeData.appreciations.map((app: any, i: number) => (
            <motion.div
              key={`app-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid"
            >
              <div 
                className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedImage(app.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-full text-primary shadow-xl scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={32} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t-2 border-border bg-card">
                  <h4 className="font-heading font-black text-lg tracking-tight uppercase italic">{app.name}</h4>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">{app.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog.Root open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <AnimatePresence>
          {selectedImage && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/90 z-[100] backdrop-blur-sm"
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-5xl max-h-[90vh] z-[101] outline-none"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={selectedImage}
                      alt="Appreciation Detail"
                      className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                    />
                    <Dialog.Close asChild>
                      <button className="absolute -top-12 right-0 p-3 text-white hover:text-primary transition-colors bg-white/10 rounded-full">
                        <X size={32} />
                      </button>
                    </Dialog.Close>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  )
}