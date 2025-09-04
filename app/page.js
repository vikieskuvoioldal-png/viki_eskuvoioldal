// app/page.js
'use client';

import Hero from '../components/Hero';
import Venue from '../components/Venue';
import RsvpForm from '../components/RsvpForm'; // Importálás
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function WeddingWebsite() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-body relative">
        <Hero />
        <Venue />

        {/* RSVP Szekció */}
        <section id="rsvp" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Visszajelzés</h2>
            <p className="text-lg text-gray-600 mt-4 mb-10">
              Kérjük, jelezd nekünk, hogy számíthatunk-e Rád!
            </p>
            <RsvpForm />
          </div>
        </section>

        <ScrollToTopButton />
    </main>
  );
}