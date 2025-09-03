// app/page.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CalendarCheck, ExternalLink } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import RsvpForm from '../components/RsvpForm';
import WeddingHeader from '../components/WeddingHeader';
import WeddingGifts from '../components/WeddingGifts';
import WeddingMessages from '../components/WeddingMessages';
import WeddingMessagesForm from '../components/WeddingMessagesForm';
import WeddingCountdown from '../components/WeddingCountdown';

export default function WeddingWebsite() {
    const images = [
        { src: "/images/wedding1.jpg" },
        { src: "/images/wedding2.webp" },
        { src: "/images/wedding3.jpg" },
        { src: "/images/wedding4.jpg" },
        { src: "/images/wedding5.jpg" },
        { src: "/images/wedding6.jpg" },
        { src: "/images/wedding7.jpg" },
        { src: "/images/wedding8.jpg" },
      ];

  const [isGalleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [selectedGift, setSelectedGift] = useState(null);
  const [isAddGiftModalOpen, setAddGiftModalOpen] = useState(false);


  return (
    <main className="min-h-screen bg-white text-gray-800 font-body">
      {/* A komponensek elrejtéséhez tedd őket kommentbe az alábbiak szerint. */}
      {/* A komment jelek: {/* ... */}

      {/* <WeddingHeader /> */}
Üresség
      <div className="pt-24" id="info">
      
      {/* <WeddingCountdown /> */}

      {/*
        <motion.section
            id="rsvp-form"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="max-w-xl mx-auto px-6 py-20"
        >
            <div className="text-center">
                <h3 className="text-3xl font-semibold text-brand-rose mb-4 flex items-center justify-center gap-3"><CalendarCheck/> Kérjük, jelezz vissza! (RSVP)</h3>
                <p className="text-gray-600 mb-8">Visszajelzésedet legkésőbb <strong>május 15-ig</strong> várjuk, hogy a szervezést megkönnyítsd számunkra. Köszönjük!</p>
            </div>
            <RsvpForm />
        </motion.section>
      */}

      {/*
        <motion.section
          id="helyszin"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto px-6 py-16"
        >
            <div className="text-center">
                <h3 className="text-3xl font-semibold text-brand-rose mb-2">Helyszínek</h3>
                <p className="text-gray-600 mb-10">Szeretettel várunk Titeket a nagy napunkon az alábbi helyszíneken!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <div>
                        <h4 className="font-serif text-2xl text-brand-text flex items-center gap-2">Ceremónia</h4>
                        <p className="text-gray-700 mt-2">Szent Anna Templom, Debrecen</p>
                        <p className="text-gray-500">2026. Június 10. – 15:00</p>
                    </div>
                    <div>
                        <h4 className="font-serif text-2xl text-brand-text flex items-center gap-2">Vacsora & Buli</h4>
                        <p className="text-gray-700 mt-2">Liszkay Pincészet, Monoszló</p>
                        <p className="text-gray-500">Kapunyitás 17:00-tól</p>
                    </div>
                    <a
                    href="http://googleusercontent.com/maps.google.com/4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-outline text-sm inline-flex items-center gap-2"
                    >
                    Útvonaltervezés <ExternalLink size={14} />
                    </a>
                </div>
                <div className="h-80 rounded-2xl shadow-xl overflow-hidden">
                <iframe
                    src="http://googleusercontent.com/maps.google.com/5"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
            </div>
        </motion.section>
      */}

      {/* <WeddingMessages/> */}
      {/* <WeddingMessagesForm/> */}

      {/*
        <motion.section
          id="program"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto px-6 py-16"
        >
          <h3 className="text-3xl font-semibold text-brand-rose mb-6 text-center">Esküvői Program</h3>
          <ul className="space-y-4 text-gray-700">
            <li>15:00 – Szertartás</li>
            <li>16:00 – Közös fotózás</li>
            <li>17:00 – Vacsora és beszédek</li>
            <li>19:00 – Nyitótánc</li>
            <li>20:00 – Élő zene és buli</li>
            <li>22:00 – Tortavágás</li>
          </ul>
        </motion.section>
      */}

      {/* <WeddingGifts/> */}

      {/*
        <motion.section
            id="galeria"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-6xl mx-auto px-6 py-16"
          >
            <h3 className="text-3xl font-semibold text-brand-rose mb-8 text-center">Galéria</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-w-4 aspect-h-3"
                  onClick={() => {
                    setPhotoIndex(index);
                    setGalleryOpen(true);
                  }}
                >
                  <Image
                    src={img.src}
                    alt={`Esküvői fotó ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
        </motion.section>
      */}
      
      {/*
        <motion.section
            id="video"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="py-20 bg-gradient-to-b from-rose-50 to-white"
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h3 className="text-3xl font-semibold text-brand-rose mb-4">A Mi Történetünk</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Egy rövid film a közös pillanatainkról, amit szeretettel készítettünk Nektek.
                </p>
                <div className="w-full max-w-3xl mx-auto aspect-video rounded-2xl shadow-xl overflow-hidden">
                    <video
                        src="/videos/video.mp4"
                        controls
                        poster="/images/wedding3.jpg"
                        className="w-full h-full object-cover"
                    >
                        A böngésződ nem támogatja a videó lejátszást.
                    </video>
                </div>
            </div>
        </motion.section>
      */}

      {/*
        <Lightbox
            open={isGalleryOpen}
            close={() => setGalleryOpen(false)}
            slides={images}
            index={photoIndex}
            on={{ view: ({ index }) => setPhotoIndex(index) }}
            styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
        />
      */}

      {/*
        <footer className="bg-rose-100 text-center py-12 mt-20 text-brand-rose">
          <p className="text-xl font-serif italic">Köszönjük, hogy velünk ünnepelsz!</p>
          <p className="text-sm mt-2">Anna & Balázs esküvője – 2025</p>
        </footer>
      */}
      </div>
    </main>
  );
}