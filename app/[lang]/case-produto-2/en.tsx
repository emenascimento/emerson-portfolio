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
            Mobile App • MBA Project
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6 leading-[1.1] max-w-4xl">
            NutriGuide: Connecting patients and nutritionists in one place
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            An overview on how to design an app that solves patient pain points while working as a strategic retention and monitoring tool for the nutrition professional.
          </p>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-10 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Role</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Product Designer</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Product</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">NutriGuide (App)</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">AI Used</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Not applied in this flow</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-1">Status</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Approved academic prototype</p>
            </div>
          </div>
        </header>

        {/* Case Hero Image */}
        <div className="max-w-7xl mx-auto px-6 mb-16 sm:mb-24">
          <div className="relative w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-3xl overflow-hidden">
            <Image 
              src="/nutriguide/hero.jpg" 
              alt="NutriGuide app screens on two iPhones, showing the login screen and the patient's home screen" 
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
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Problem</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Nutritionists often lose continuous connection with their patients outside the office. Generic tools or static PDFs make diet engagement difficult, resulting in treatment abandonment.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Hypothesis</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                If we build an application that centralizes the routine (diary, tips, partners) in the patient's hand, the nutritionist gains a powerful system (CRM) for tracking real data, increasing the success rate.
              </p>
            </div>
          </div>
        </section>

        {/* First Part of the Article */}
        <div className="max-w-7xl mx-auto px-6 mb-24 space-y-20">
          
          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                01. How the project started
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  The project emerged during the MBA with the need to explore health applications. While the market was saturated with mental health apps or generic diet apps, we identified a relationship gap: the lack of dedicated tools that meet the clinical needs of nutritionists while engaging their clients.
                </p>
                <p>
                  The core idea was to transform the app into a connecting link. For the patient, it's a personal physical health assistant; for the professional, NutriGuide works as a retention and diet plan adherence tracking system.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                02. Patient Behavior
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  With the rise in teleconsultations, we conducted a Survey focused on understanding the pain points of the end user: the patients. Since the academic deadline was shorter than a corporate one, the quantitative focus revealed our core audience: women (60%), aged 26 to 35, residing in São Paulo.
                </p>
                <p>
                  Looking through the nutritionist's lens, this persona is valuable as it represents an economically active audience that, despite seeking wellness, faces major difficulties in practically executing good eating routines.
                </p>
              </div>

              {/* Evidence and Result Block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10 bg-zinc-100 dark:bg-zinc-900/50 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Evidence</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    User research revealed that 47.1% do not consider themselves to have good eating habits, and the majority operate in a hybrid or home office setup, requiring a solution adaptable to the new post-pandemic routine.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Result</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Development of a high-fidelity prototype for the UX Design MBA, validating a B2B2C model where the app bridges the gap between the nutritionist's service and the patient's daily life.
                  </p>
                </div>
              </div>
              
              <ZoomableImage 
                src="/nutriguide/resultados.webp" 
                alt="Person using a tablet to answer a survey" 
                fill 
                className="object-cover"
                wrapperClassName="w-full mt-4 bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-video relative"
                figcaption="Survey Research: overcoming the challenge of live interview time for rapid profile mapping."
              />
            </div>
          </section>

          <hr className="border-t border-zinc-200 dark:border-zinc-800 hidden md:block" />

          <section className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/3 shrink-0">
              <h2 className="font-heading text-3xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 md:sticky md:top-32">
                03. Navigable Prototype
              </h2>
            </div>
            <div className="w-full md:w-2/3 space-y-8">
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Explore the experience designed for the patient. The flow focuses on reducing friction when logging daily food intake, ensuring the nutritionist receives constant and real data.
                </p>
              </div>
              
              <div className="w-full rounded-2xl overflow-hidden shadow-2xl aspect-video relative bg-zinc-100 dark:bg-zinc-900 mt-4">
                <iframe 
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} 
                  className="absolute inset-0 w-full h-full"
                  src="https://embed.figma.com/proto/b7SCEWoBkMKwTBfSnhA6fR/Wireframes---Prot%C3%B3tipos---Nutriguide?node-id=125-478&p=f&scaling=scale-down&content-scaling=fixed&page-id=88%3A509&starting-point-node-id=125%3A491&embed-host=share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        {/* Highlight Section */}
        <section className="w-full bg-zinc-100 dark:bg-zinc-900/30 py-24 sm:py-32 border-y border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="mb-16 max-w-4xl">
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                Strategy and Opportunities
              </h2>
              <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Beyond the layout, NutriGuide was conceived on B2B2C strategic business pillars focused on clinical retention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">Telework and Engagement</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Research showed that the majority of users work in a Hybrid (39.2%) or Home Office (33.3%) model. For the nutritionist, this means the client's meals occur in highly variable contexts. The app responds to this by allowing the patient to log their food from anywhere, generating crucial asynchronous data for the next appointment.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">The Habits Opportunity</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  With 47.1% of respondents stating they do not have good eating habits, NutriGuide's interface focuses on minimal friction. Logging the food diary needs to be faster than the patient's urge to abandon the routine. This is the key selling point (pitch) of the system for professionals.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">The Product as a System</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  The high-fidelity prototype designed the B2B2C experience in practice. While the delivered screens are aimed at the patient, the strategy behind each button is to ensure the nutritionist has tools to reduce their churn rate (patient dropout).
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="font-heading text-xl font-bold mb-4 text-blue-600 dark:text-blue-500">MBA Learnings</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Working with the deadline constraints of an MBA perfectly simulates the startup environment. The biggest takeaway was discovering that simple data from a Survey, when viewed through a business lens, is enough to justify and pivot the direction of an entire digital health product.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}


