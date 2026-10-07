import Link from 'next/link';
import Image from 'next/image';
import { ZoomableImage } from '../../components/ZoomableImage';
import { IconSettings, IconCalendarEvent, IconSearch, IconMap } from '@tabler/icons-react';

export default function CaseEN() {
  return (
    <div className="font-sans relative bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <main className="pb-0">
        
        {/* Case Header */}
        <header className="pt-16 sm:pt-24 pb-12 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            Website Redesign • Financial SaaS
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] max-w-4xl">
            MoneyFy: repositioning a financial system for IP offices
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            The MoneyFy product underwent a system redesign, with a new version launched on the market. From this point, the challenge arose to reposition the product through a new website aligned with its current value.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Role</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Product Designer</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Product</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">MoneyFy (Website)</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">AI Used</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Not applied in this flow</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Status</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Prototype reviewed and approved</p>
            </div>
          </div>
        </header>

        {/* Case Hero Image */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/moneyfy/hero-2.jpg" 
              alt="MoneyFy website on Desktop, Tablet, and Mobile devices" 
              fill 
              className="object-contain" 
              priority 
            />
          </div>
        </div>

        {/* Main Article */}
        <div className="max-w-7xl mx-auto px-6 mb-24 space-y-20">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                01. The Challenge and Action Fronts
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                It was necessary to understand the product as a whole, the pain points regarding the current site, and make constant alignments for the full execution of the project. To organize the design performance, we focused on 4 main fronts:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Card 1 */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900/30 flex items-center justify-center text-zinc-600 dark:text-zinc-400 mb-4">
                    <IconSettings size={20} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-zinc-50 mb-2">Technical Alignment</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Technical alignment with the team to prioritize viable solutions, focusing on resolving development constraints.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900/30 flex items-center justify-center text-zinc-600 dark:text-zinc-400 mb-4">
                    <IconCalendarEvent size={20} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-zinc-50 mb-2">Planning and Deadlines</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Strategic planning and deadline negotiation to ensure the viability of deliveries within the expected schedule.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900/30 flex items-center justify-center text-zinc-600 dark:text-zinc-400 mb-4">
                    <IconSearch size={20} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-zinc-50 mb-2">Content Audit</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Audit of information architecture and content to identify friction and guide text reformulation.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-900/30 flex items-center justify-center text-zinc-600 dark:text-blue-400 mb-4">
                    <IconMap size={20} stroke={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-zinc-50 mb-2">Roadmap Reprioritization</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Reprioritization of the Product roadmap to integrate the new demand without compromising previously established parallel deliveries.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                02. Roadmap (Deadline)
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Strategic action plan for the project to ensure timely deliveries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">Discovery <span className="text-sm font-normal text-zinc-500 ml-2">•<span className="text-sm font-normal text-blue-500 ml-2">3 Weeks</span></span></h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">CSD Matrix, User Flow, Heuristic Analysis, Benchmark, Alignments with Stakeholders, Internal Interviews, Interview Consolidation and Pain Points Mapping.</p>
                </div>
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">Creation & Prototype <span className="text-sm font-normal text-zinc-500 ml-2">•<span className="text-sm font-normal text-blue-500 ml-2">4 Weeks</span></span></h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Development of a high-fidelity and functional prototype.</p>
                </div>
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">Validation <span className="text-sm font-normal text-zinc-500 ml-2">•<span className="text-sm font-normal text-blue-500 ml-2">1 Week</span></span></h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">Alignment and review with stakeholders, and alignment with the technical team.</p>
                </div>
                <div className="p-6 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-heading text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">Handoff <span className="text-sm font-normal text-zinc-500 ml-2">•<span className="text-sm font-normal text-blue-500 ml-1">1 Week</span></span></h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">File structure to forward to development.</p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                03. Discovery Process
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Some evidence of processes carried out according to the discovery planning, essential to ensure the interface would solve the correct user problems.
                </p>
              </div>
              
              <ZoomableImage 
                src="/moneyfy/discovery3.jpg" 
                alt="Evidence of the Discovery Process" 
                width={1400} 
                height={900} 
                className="w-full h-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-900/50" 
                wrapperClassName="w-full mt-4"
                figcaption="View of User Flow, Heuristic Analysis, Benchmark, Internal Interviews, Communication Plan, Planning and Go to Market (GTM)."
              />
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                04. Prototype and Final Layouts
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Final interfaces of the website redesign. Based on understanding the product as a whole and the pain points related to the old site, we developed the solutions and their variations.
                </p>
              </div>

              <ZoomableImage 
                src="/moneyfy/layouts2.png" 
                alt="Variations, Final Version and Handoff" 
                width={1400} 
                height={1400} 
                className="w-full h-auto rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-900/50 p-2 sm:p-4" 
                wrapperClassName="w-full mt-4"
                figcaption="Variations for validation, Final and approved Version, and Handoff structure."
              />
            </div>
          </section>
        </div>

        {/* Different Background for Validation and Conclusion */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-zinc-800 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 space-y-24">
            
            {/* Technical Validation */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-full md:w-1/3 shrink-0">
                <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                  05. Technical Viability
                </h2>
              </div>
              <div className="w-full md:w-2/3 space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  After developing the high-fidelity solutions for the Landing Page gaps, the critical step was engineering alignment. We focused on validating the viability of complex components identified in the heuristic analysis, such as the centralized feature hub, visual integration maps, and interactive tour implementation.
                </p>
                <p>
                  We maintained constant alignments with developers during ideation. The goal was to anticipate restrictions in executing dense elements (such as GIFs or system videos) and ensure the handoff wasn't just a Figma file, but bottleneck-proof component documentation.
                </p>
                <p>
                  With technical viability ensured at the base, the presentation to stakeholders was entirely based on product logic: we demonstrated how the studies guided each structural decision, delivering a solution that is both executable in code and strategic for business.
                </p>
              </div>
            </div>

            <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

            {/* Conclusion / Impact */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="w-full md:w-1/3 shrink-0">
                <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                  Impact and Strategic Vision
                </h2>
              </div>
              <div className="w-full md:w-2/3 space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  The MoneyFy redesign highlighted that a SaaS's success doesn't only happen within the dashboard. Retention begins at acquisition, in how value is communicated to the market. By aligning conversion-focused usability with highly structured Discovery, we transformed an outdated site into the company's main sales channel.
                </p>
                <p>
                  The key to the fluidity of this project was breaking the silo between design and engineering. Designing while already considering the front-end architecture ensures the final interface serves not only to delight, but to scalably guide user pain points into clear retention arguments.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}

