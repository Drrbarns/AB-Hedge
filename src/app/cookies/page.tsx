
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'AB Hedge Group Cookie Policy.',
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <div className="pt-32 pb-16 bg-slate-900 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
        <p className="text-slate-400">Effective Date: February 14, 2026</p>
      </div>

      <div className="container max-w-3xl mx-auto py-16 px-4 md:px-6">
        <div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-600 leading-relaxed space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h3>
            <p>
              A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Cookies</h3>
            <p>
              We use cookies for a variety of reasons detailed below. Unfortunately is most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration.</li>
              <li><strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact.</li>
              <li><strong>Email newsletters related cookies:</strong> This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Disabling Cookies</h3>
            <p>
              You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. More Information</h3>
            <p>
              Hopefully that has clarified things for you. If there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. However if you are still looking for more information then you can contact us via email: <a href="mailto:info@abhedgegroup.com" className="text-amber-600 hover:text-amber-700 font-semibold">info@abhedgegroup.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
