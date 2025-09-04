// app/page.js
'use client';

import Hero from '../components/Hero';
import Venue from '../components/Venue';
import RsvpForm from '../components/RsvpForm';
import DressCode from '../components/DressCode';
import Info from '../components/Info';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery'; // Új komponens importálása
import ScrollToTopButton from '../components/ScrollToTopButton';

export default function WeddingWebsite() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-body relative">
        <Hero />
        <Venue />

        {/* RSVP Szekció */}
        <section id="rsvp" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Visszajelzés</h2>
            <p className="text-lg text-gray-600 mt-4 mb-10">
              Kérjük, legkésőbb május 6-ig jelezzétek, hogy számíthatunk-e Rátok!
            </p>
            <RsvpForm />
          </div>
        </section>

        <DressCode />
        <Info />
        <Gallery /> {/* Galéria komponens hozzáadva */}

        {/* Üzenj nekünk Szekció */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Üzenj nekünk!</h2>
            <p className="text-lg text-gray-600 mt-4 mb-10">
              Ha bármi kérdésetek van, vagy csak egy kedves üzenetet küldenétek, itt megtehetitek.
            </p>
            <Contact />
          </div>
        </section>

        <ScrollToTopButton />
    </main>
  );
}