
import React from 'react';
import { testimonials } from '../data';

const Testimonials = () => {
  return (
    // Hapus background section
    <section id="testimonials" className="px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Ubah warna teks heading */}
        <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">
          What They Said 
        </h2>
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            // Ubah style kartu testimoni menjadi semi-transparan
            <div key={testimonial.name} className="max-w-2xl p-8 mx-auto border rounded-xl bg-slate-800/50 border-slate-700">
              {/* Ubah warna teks kutipan */}
              <p className="mb-6 text-lg italic text-slate-300">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-center">
                <img 
                  src={testimonial.imageUrl} 
                  alt={testimonial.name} 
                  className="object-cover mr-4 rounded-full w-14 h-14"
                />
                <div>
                  {/* Ubah warna teks nama dan jabatan */}
                  <p className="font-bold text-slate-100">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;