
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Reach out to our specialized teams for expert guidance.',
};

import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 sm:pt-32 pb-32 sm:pb-40"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f1f3d 30%, #0d1a30 60%, #0a1425 100%)"
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-amber-600/3 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 border-amber-500/30 bg-amber-500/10 text-amber-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold backdrop-blur-sm">
            Get in Touch
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
            Start the <span className="text-amber-500">Conversation</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Reach out to our specialized teams for expert guidance on your next major project. We are ready to deploy resources globally.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-6 -mt-20 sm:-mt-24 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
          <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8 gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Call Us</h3>
                <p className="text-slate-500 text-sm mt-1">Mon-Fri from 8am to 5pm</p>
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-amber-600 font-bold mt-2 hover:text-amber-700 block text-base">{SITE_CONFIG.phone}</a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8 gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Email Us</h3>
                <p className="text-slate-500 text-sm mt-1">We'll respond within 24 hours</p>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-amber-600 font-bold mt-2 hover:text-amber-700 block text-base break-all">{SITE_CONFIG.email}</a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="flex flex-col items-center text-center pt-8 pb-8 gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Visit Us</h3>
                <p className="text-slate-500 text-sm mt-1">Come say hello at our HQ</p>
                <address className="not-italic text-sm text-slate-700 font-medium mt-2">{SITE_CONFIG.address}</address>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-12 mb-16 sm:mb-24 border border-slate-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">Send us a message</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Fill out the form below and our team will route your inquiry to the appropriate department for a swift response.
            </p>
            <ContactForm />
          </div>
          <div className="relative min-h-[400px] bg-slate-100 rounded-2xl overflow-hidden hidden lg:block border border-slate-200">
            {/* Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6!2d-0.2!3d5.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9!2sAccra!5e0!3m2!1sen!2sgh!4v1600000000000!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0, opacity: 1, filter: 'grayscale(100%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">Headquarters</p>
                  <p className="text-sm text-slate-600">Digital Center, Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
