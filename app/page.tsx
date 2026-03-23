"use client";

import { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/601117957335?text=${msg}`, '_blank');
  };

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <nav className="fixed top-0 left-0 right-0 z-50 shadow-md" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            
            <span className="text-xl font-bold" style={{ color: '#000000' }}>Business Generator</span>
          </div>
          <div className="hidden md:flex gap-6">
            {['About', 'Services', 'Contact'].map((i) => (
              <button key={i} onClick={() => scroll(i.toLowerCase())} className="font-medium hover:opacity-80 transition-opacity" style={{ color: '#14213d' }}>{i}</button>
            ))}
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} style={{ color: '#14213d' }} /> : <Menu size={24} style={{ color: '#14213d' }} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-2" style={{ backgroundColor: '#ffffff' }}>
            {['About', 'Services', 'Contact'].map((i) => (
              <button key={i} onClick={() => scroll(i.toLowerCase())} className="py-2 text-left font-medium" style={{ color: '#14213d' }}>{i}</button>
            ))}
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>Business Generator</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: '#14213d' }}>Your trusted partner in excellence</p>
          <a href={`https://wa.me/601117957335`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: '#fca311' }}>
            <MessageCircle size={24} />WhatsApp Us
          </a>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#000000' }}>About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <p className="text-lg leading-relaxed" style={{ color: '#14213d' }}>Test</p>
            <div className="grid grid-cols-3 gap-4">
              <img src="https://placehold.co/400x300/e2e8f0/64748b?text=About+1" alt="About 1" className="rounded-lg shadow-lg w-full h-32 object-cover" />
              <img src="https://placehold.co/400x300/e2e8f0/64748b?text=About+2" alt="About 2" className="rounded-lg shadow-lg w-full h-32 object-cover" />
              <img src="https://placehold.co/400x300/e2e8f0/64748b?text=About+3" alt="About 3" className="rounded-lg shadow-lg w-full h-32 object-cover" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ t: 'Vision', d: 'test' }, { t: 'Mission', d: 'test' }, { t: 'test', d: 'Our commitment to test' }, { t: 'test', d: 'Our dedication to test' }].map((p, i) => (
              <div key={i} className="p-6 rounded-lg text-center shadow-lg border-l-4" style={{ backgroundColor: '#ffffff', borderLeftColor: '#fca311' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{p.t}</h3>
                <p style={{ color: '#14213d' }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4" style={{ backgroundColor: '#00000008' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#000000' }}>Our Products & Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[{ n: 'tset', d: 'ets', i: 'https://placehold.co/400x300/e2e8f0/64748b?text=Product+1' }, { n: 'etse', d: 'dfsfs', i: 'https://placehold.co/400x300/e2e8f0/64748b?text=Product+2' }, { n: 'fsdf', d: 'fsdf', i: 'https://placehold.co/400x300/e2e8f0/64748b?text=Product+3' }, { n: 'fdsf', d: 'fdsf', i: 'https://placehold.co/400x300/e2e8f0/64748b?text=Product+4' }, { n: 'fds', d: 'dfds', i: 'https://placehold.co/400x300/e2e8f0/64748b?text=Product+5' }].map((p, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#ffffff' }}>
                <img src={p.i} alt={p.n} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold mb-2" style={{ color: '#000000' }}>{p.n}</h3>
                  <p className="text-sm" style={{ color: '#14213d' }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#000000' }}>Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold" style={{ color: '#000000' }}>Get in Touch</h3>
              <div className="flex items-start gap-4"><MapPin size={24} style={{ color: '#fca311' }} className="mt-1 flex-shrink-0" /><p style={{ color: '#14213d' }}>etest</p></div>
              <div className="flex items-center gap-4"><Mail size={24} style={{ color: '#fca311' }} /><a href={`mailto:info@stinablis.com`} style={{ color: '#14213d' }} className="hover:underline">info@stinablis.com</a></div>
              <div className="flex items-center gap-4"><Phone size={24} style={{ color: '#fca311' }} /><a href={`tel:+601117957335`} style={{ color: '#14213d' }} className="hover:underline">+601117957335</a></div>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <div><label className="block mb-2 font-medium" style={{ color: '#14213d' }}>Name</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50" style={{ borderColor: '#000000', backgroundColor: '#ffffff' }} /></div>
              <div><label className="block mb-2 font-medium" style={{ color: '#14213d' }}>Email</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50" style={{ borderColor: '#000000', backgroundColor: '#ffffff' }} /></div>
              <div><label className="block mb-2 font-medium" style={{ color: '#14213d' }}>Message</label><textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-opacity-50" style={{ borderColor: '#000000', backgroundColor: '#ffffff' }} /></div>
              <button type="submit" className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity" style={{ backgroundColor: '#fca311' }}><Send size={20} />Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white">&copy; {new Date().getFullYear()} Business Generator. All rights reserved.</p>
          <div className="flex gap-6">
            
            
            <a href={`https://wa.me/601117957335`} target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
