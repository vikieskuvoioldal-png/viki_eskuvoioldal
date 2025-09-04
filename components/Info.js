// components/Info.js
'use client';
import { motion } from 'framer-motion';
import { Hotel, Bus, ExternalLink } from 'lucide-react';

const accommodations = [
  {
    name: 'Villa Chardonnay Etyek',
    link: '#', // Ide jöhet a szállás linkje
  },
  {
    name: 'Átrium Panzió',
    link: '#', // Ide jöhet a szállás linkje
  },
  {
    name: 'Búzál Morócza Pincészet',
    link: '#', // Ide jöhet a szállás linkje
  },
];

export default function Info() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Hasznos Információk</h2>
          <p className="text-lg text-gray-600 mt-4">
            Hogy a készülődés és az utazás a lehető legkényelmesebb legyen számotokra.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Szállás */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 bg-white rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-4">
              <Hotel className="text-amber-500" />
              Ajánlott Szállások
            </h3>
            <p className="text-gray-600 mb-4">
              A szállásfoglalás saját költségen lehetséges az alábbi helyeken, akár már június 5-től.
            </p>
            <ul className="space-y-3">
              {accommodations.map((acc) => (
                <li key={acc.name}>
                  <a
                    href={acc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-semibold text-gray-700">{acc.name}</span>
                    <ExternalLink size={16} className="text-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Transzfer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 bg-white rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-4">
              <Bus className="text-sky-500" />
              Transzfer
            </h3>
            <p className="text-gray-600">
              Vendégeink kényelmét szem előtt tartva transzfert is biztosítunk, melynek díja a jelentkezők számától függ.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Az ezzel kapcsolatos igényeteket kérjük, az RSVP szekcióban jelezzétek, hogy a szervezést gördülékennyé tegyétek számunkra.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}