// components/Venue.js
'use client';
import { motion } from 'framer-motion';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

export default function Venue() {
  // Helyes Google Maps linkek az Etyeki Czímeres Pálinkaházhoz
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Etyeki+Cz%C3%ADmeres+P%C3%A1linkah%C3%A1z";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.139423235275!2d18.74619881562519!3d47.44784797917454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e7dc1db55c1b%3A0xb1a76790b50f759a!2sEtyeki%20Cz%C3%ADmeres%20P%C3%A1linkah%C3%A1z!5e0!3m2!1shu!2shu!4v1693759522123!5m2!1shu!2shu";

  return (
    <section className="py-20 bg-gray-50"> {/* Finomított háttérszín */}
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">A Nagy Nap Helyszíne</h2>
          <p className="text-lg text-gray-600 mt-4">
            Szeretettel várunk Benneteket az Etyeki Czímeres Birtokon!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          {/* Információk */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-3">
                <MapPin className="text-gray-400" /> {/* Visszafogottabb ikonszín */}
                Helyszín
              </h3>
              <p className="text-gray-700 font-bold">Etyeki Czímeres Birtok</p>
              <p className="text-gray-500">2091 Etyek, Sóskúti út</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-3">
                <Clock className="text-gray-400" /> {/* Visszafogottabb ikonszín */}
                Időrend
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-bold">16:00</span> – Vendégvárás</li>
                <li><span className="font-bold">17:00</span> – Ceremónia</li>
              </ul>
            </div>
             <a
              href={directionsUrl} // Javított, működő link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
            >
              Útvonaltervezés Google Maps-szel <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* Térkép */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-80 w-full rounded-lg shadow-xl overflow-hidden border border-gray-200"
          >
            <iframe
              src={embedUrl} // Javított, működő beágyazás
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}