import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '../../components/ThemeToggle';
import { ScrollToTop } from '../../components/ScrollToTop';
import { ResumeModal } from '../../components/ResumeModal';
import { IconArrowLeft, IconArrowUpRight } from '@tabler/icons-react';
import { ZoomableImage } from '../../components/ZoomableImage';

export default function CaseEN() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <main className="pb-0">
        
        {/* Case Header */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            This portfolio is a product
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] max-w-4xl">
            Code as Design: Building the portfolio as a product
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            The decision to abandon No-Code platforms and take full control of the architecture, turning the portfolio into a real proof of skills between Design and Engineering.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Role</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Design Engineer</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Product</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Portfolio (Web)</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">AI Used</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Cursor / Claude 3.5</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Status</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">In Production</p>
            </div>
          </div>
        </header>

        {/* Case Hero Image */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
            <Image 
              src="/case-portfolio/Este-portfolio-e-um-produto2.jpg" 
              alt="Portfolio development environment in VS Code" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>

        {/* Project Summary (Grid) */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Problem</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                No-Code platforms limit information architecture, inject unnecessary code (hurting performance), and do not reflect the reality of technical handoff in a real product environment.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Hypothesis</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                If I build the portfolio in React/Next.js, I practically prove my technical background, ensuring performance, total design freedom, and scalable code.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Evidence (Old Site)</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                The previous Framer site had vendor lock-in, difficulties optimizing accessibility, and load time impacted by third-party scripts.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Result</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A responsive, fully bilingual (PT/EN), and SEO-optimized portfolio, treated and evolved as a real digital product. It features native, high-performance light/dark theme toggling and adheres to strict accessibility standards (contrast, semantic HTML, and navigation), validating my end-to-end expertise.
              </p>
            </div>
          </div>
        </section>

        {/* First Part of the Article */}
        <div className="max-w-7xl mx-auto px-6 mb-24 space-y-20">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                01. Why rebuild the portfolio?
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  A Product Designer's portfolio is, essentially, their most important product. When we use closed templates or purely visual tools, we outsource architecture and performance decisions. The decision to rebuild wasn't just aesthetic, but strategic: I needed an environment where the code was a natural extension of the design.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                02. The limitations of No-Code
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  The previous site built in Framer gave us clear evidence of the limitations of visual platforms. We experienced firsthand the difficulty of migrating or expanding the project outside the tool's environment, faced major barriers in making it fully accessible to all audiences, and saw the load time suffer due to hidden code that the platform itself added without our control.
                </p>
              </div>

              <ZoomableImage 
                src="/case-portfolio/framer_1.jpg" 
                alt="Interface of a visual website building platform (Framer)" 
                fill 
                className="object-cover"
                wrapperClassName="w-full mt-4 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 aspect-video relative"
                figcaption="Relying on visual tools limited our control over the site's structure and speed."
              />
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                03. Code as a design medium
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  In this project, there was no exhaustive screen stage in Figma. The design was done "in browser", using Tailwind CSS to prototype directly in code. This allowed testing spacing, typography (Inter and Epilogue) and contrasts in real time, in a real environment.
                </p>
              </div>
              
              {/* Intermediate Image */}
              <ZoomableImage 
                src="/print-codigo.jpg" 
                alt="Code snippet of the navbar component" 
                fill 
                className="object-cover"
                wrapperClassName="w-full mt-4 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 aspect-video relative"
                figcaption="Direct component structuring in React and Tailwind CSS."
              />
            </div>
          </section>
        </div>

        {/* Second Part: 2 Topic Grid with Different Background */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800 py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20">
              
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Product and UX Decisions
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    The focus was reducing cognitive noise. I eliminated unnecessary pages and consolidated essential information into a fluid Single Page Application. Fixed navigation with a "glassmorphism" effect, a fluid language switch (PT/EN), and a native light/dark theme toggle were designed to ensure total control, universal accessibility, and visual comfort on any device.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  AI & Workflow
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Acting independently requires efficiency. I used generative AI as a <em>pair programmer</em> to speed up the Next.js boilerplate, structure logical modals, and debug complex React behaviors. AI didn't replace design decisions, but acted as a lever.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  From localhost to production
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Continuous deployment via Vercel ensured that every repository change was reflected in seconds. Architecture in the service of technical quality means this portfolio can scale easily: adding a blog, a new case, or integrating an API becomes a trivial process.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Learnings
                </h2>
                <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <p>
                    Designing in code changes how we think about states, components, and responsiveness. The biggest learning was understanding where visual detail adds value and where technical pragmatism must prevail. The result is a digital product that demonstrates exactly <em>how</em> I do it.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}


