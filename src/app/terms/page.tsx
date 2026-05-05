
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Group Hedge Terms and Conditions.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="pt-32 pb-16 bg-slate-900 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Terms of Use</h1>
        <p className="text-slate-400">Effective Date: February 14, 2026</p>
      </div>

      <div className="container max-w-3xl mx-auto py-16 px-4 md:px-6">
        <div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-600 leading-relaxed space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h3>
            <p>
              These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Group Hedge ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Intellectual Property Rights</h3>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. User Representations</h3>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Prohibited Activities</h3>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Disclaimer</h3>
            <p>
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">6. Contact Us</h3>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at <a href="mailto:legal@abhedgegroup.com" className="text-amber-600 hover:text-amber-700 font-semibold">legal@abhedgegroup.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
