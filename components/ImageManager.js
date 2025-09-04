// components/ImageManager.js
'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import { UploadCloud, Trash2, Loader2, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ImageManager() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter(); // A lap frissítéséhez

  async function fetchImages() {
    const { data, error } = await supabase.storage.from('gallery').list('', {
      limit: 100, sortBy: { column: 'created_at', order: 'desc' },
    });
    if (data) setImages(data);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async (event) => {
    setError('');
    setUploading(true);
    const file = event.target.files[0];
    if (!file) {
      setUploading(false);
      return;
    }

    const fileName = `${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage
      .from('gallery')
      .upload(fileName, file);

    if (uploadError) {
      setError('Hiba a feltöltés során: ' + uploadError.message);
    } else {
      await fetchImages(); // Frissítjük a listát
      router.refresh(); // Szerver oldali komponenst is frissítjük
    }
    setUploading(false);
  };

  const handleDelete = async (imageName) => {
    const { error: deleteError } = await supabase.storage
      .from('gallery')
      .remove([imageName]);

    if (deleteError) {
      alert('Hiba a törlés során: ' + deleteError.message);
    } else {
      setImages(images.filter(img => img.name !== imageName));
      router.refresh();
    }
  };

  const getImageUrl = (name) => {
    return supabase.storage.from('gallery').getPublicUrl(name).data.publicUrl;
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Galéria Kezelése</h3>
        <label className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-lg cursor-pointer hover:bg-emerald-700 transition-colors">
          <UploadCloud size={16} />
          <span>Kép feltöltése</span>
          <input type="file" className="hidden" onChange={handleUpload} disabled={uploading} accept="image/*" />
        </label>
      </div>

      {uploading && <div className="flex items-center gap-2 text-gray-500 mb-4"><Loader2 className="animate-spin" /><span>Feltöltés folyamatban...</span></div>}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      {images.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map(image => (
            <div key={image.id} className="relative group aspect-square">
              <Image src={getImageUrl(image.name)} alt={image.name} fill className="object-cover rounded-md" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => { if(window.confirm('Biztosan törölni szeretnéd ezt a képet?')) handleDelete(image.name) }}
                  className="p-2 text-white bg-red-600 rounded-full hover:bg-red-700"
                  title="Kép törlése"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-8">Nincsenek képek a galériában.</p>
      )}
    </div>
  );
}