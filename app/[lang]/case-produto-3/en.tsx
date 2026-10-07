import Link from 'next/link';
import Image from 'next/image';
import { ZoomableImage } from '../../components/ZoomableImage';

export default function CaseEN() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <main className="pb-0">
        
        {/* Case Header */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            B2B SaaS • Intellectual Property
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] max-w-4xl">
            Seek Figurative
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            Design and Technical Handoff of an advanced trademark search module by image similarity. From the AI search journey to access engineering and business rules.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Role</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Product Designer</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Product</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Seek Figurative</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">AI Used</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Claude</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Status</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">In Production</p>
            </div>
          </div>
        </header>

        {/* Case Hero Image */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-[4/3] sm:aspect-video bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/SeekFigurativo/cover.jpg" 
              alt="Seek Figurative project cover" 
              fill 
              className="object-cover" 
              priority 
            />
          </div>
        </div>

        {/* Project Summary (Grid) */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-12 bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800">
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">The Context</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                In Intellectual Property (IP) management, the search for trademark similarity is not limited to text. <strong>Figurative Search</strong> requires rigorous visual analysis, supported by artificial intelligence, to identify conceptual, structural, and compound similarities in registered logos and symbols.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">The Challenge</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mapping, designing, and documenting version 1.0 (Beta) of this module. The challenge was to unify image upload and cropping with highly specific filters (NCL, CFE, Process Status), and ensure developers had a foolproof technical handoff.
              </p>
            </div>
          </div>
        </section>

        {/* First Part: Journey and Flows */}
        <div className="max-w-7xl mx-auto px-6 mb-24 space-y-20">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                01. The Visual Search Journey
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  The flow designed for <strong>Seek Figurative</strong> is linear but deep. Everything starts on the dashboard where the user monitors their monthly search quota. When initiating a search, the user uploads an image and can use an internal <strong>cropping tool</strong> to focus on the exact area of the symbol.
                </p>
                <p>
                  The <strong>Search Strategies</strong> shape the algorithm:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
                  <li><strong>Compound Similarity:</strong> Combines concept and shape.</li>
                  <li><strong>Conceptual Similarity:</strong> Focuses on the idea of the image, regardless of the strokes.</li>
                  <li><strong>Shape Similarity:</strong> Evaluates proportions, outlines, and geometric patterns.</li>
                </ul>
                <p className="mt-6">
                  In addition to AI, I applied vital technical refinements for the sector: crossing by Vienna Classification (CFE), NCL, RPI number, and process <em>status</em> (Extinct or Archived).
                </p>
              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                02. Results, Comparison, and Audit
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  The results visualization needed high density without losing clarity. The grid presents processes with quick actions and allows bulk selection for auditing. 
                </p>
                <p>
                  The icing on the cake is the <strong>Visual Comparison</strong>: a modal where the uploaded image and the registered trademark found by the system are placed side by side. Alongside them, the entire scope of essential legal metadata is structurally listed to reduce decision-making time:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-700 dark:text-zinc-300">
                  <li><strong>Vital Dates:</strong> Filing, Grant, Validity, and Protection.</li>
                  <li><strong>Legal Events:</strong> Complete history of Dispatches and Petitions.</li>
                  <li><strong>Coverage:</strong> Designated Countries (Madrid Protocol) and Classes.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Highlight Section: Handoff and Architecture */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 py-24 sm:py-32 border-y border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="mb-16 max-w-4xl">
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                The Handoff Engineering
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                An enterprise product doesn't live on pretty screens alone. The technical documentation sent to Front-end was structured in 6 rigorous pillars to eliminate ambiguities in development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Access Rules and Logs</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Architectural differentiation of profiles. The <strong>Master/Admin</strong> has global vision and deep filters of the whole team's history, while the <strong>Dependent User</strong> is restricted, by business rules and interface, to their own usage (sandbox).
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Design System & Variants</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Total documentation of UI Components. All buttons, modals, checkboxes, tables, and tooltips were exported with their micro-states (hover, disabled, active) based on a grid system for 1366x768.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Feedback and Evaluation</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Creation of a <em>rating</em> system (1 to 5 stars) integrated into the results list, feeding back the AI model on the figurative search quality, with conditional fields for justifications.
                </p>
              </div>

            </div>

            {/* The Role of Claude */}
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 flex flex-col md:flex-row gap-8 items-center shadow-sm">
              <div className="md:w-2/3 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                  The Role of AI (Claude)
                </div>
                <h3 className="font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Agility and Precision in Technical Handoff
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                  To structure this complex documentation in record time, I used <strong>Claude</strong> as a technical assistant. It helped draft the state logics and business rules, requiring from me only the curation and targeted manual adjustments to align the output with our actual components. This reduced the Handoff creation time by <strong>80%</strong> compared to the manual detail-by-detail process.
                </p>
              </div>
              <div className="md:w-1/3 flex w-full justify-center md:justify-end pr-4">
                <div className="text-center">
                  <span className="font-heading text-6xl sm:text-7xl font-extrabold text-blue-600 dark:text-blue-500 drop-shadow-sm">-80%</span>
                  <p className="text-xs font-bold text-blue-600/70 dark:text-blue-400/70 mt-2 uppercase tracking-widest">Handoff Time</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6">
          <ZoomableImage 
            src="/SeekFigurativo/Handoff_seek2.jpg" 
            alt="Complete mapping of screens and flows for Seek Figurative" 
            width={1920}
            height={1080}
            className="object-cover"
            wrapperClassName="w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl relative"
            figcaption="Overview of the visual search module's screen and flow mapping."
          />
        </section>

      </main>

    </div>
  );
}
