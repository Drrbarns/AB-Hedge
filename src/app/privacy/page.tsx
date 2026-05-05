
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Group Hedge Privacy Policy.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="pt-32 pb-16 bg-slate-900 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400">Last Updated: February 14, 2026</p>
      </div>

      <div className="container max-w-3xl mx-auto py-16 px-4 md:px-6">
        <div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-600 leading-relaxed space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h3>
            <p>
              Group Hedge ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Contact Us</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:privacy@abhedgegroup.com" className="text-amber-600 hover:text-amber-700 font-semibold">privacy@abhedgegroup.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
