import { useState } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinicName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct email body
      const emailBody = `
Nuevo contacto desde Kinetic Ops Landing Page:

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Nombre de Clínica: ${formData.clinicName}

---
Este mensaje fue enviado desde el formulario de contacto de la landing page.
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:kineticopss@gmail.com?subject=Nueva%20consulta%20Kinetic%20Ops&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      setSubmitStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', clinicName: '' });
        setSubmitStatus('idle');
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] rounded-2xl p-8 max-w-md w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#636366] hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="text-3xl font-bold mb-2">
          Agendar llamada
        </h2>
        <p className="text-[#b0b0b5] mb-6">
          15 minutos. Sin compromiso. Conversación estratégica sobre su clínica.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#b0b0b5] mb-2">Nombre completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[rgba(255,255,255,0.07)] rounded-lg text-white placeholder-[#636366] focus:border-[#e82127] focus:outline-none transition-colors"
              placeholder="Dr. Juan García"
            />
          </div>

          <div>
            <label className="block text-sm text-[#b0b0b5] mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[rgba(255,255,255,0.07)] rounded-lg text-white placeholder-[#636366] focus:border-[#e82127] focus:outline-none transition-colors"
              placeholder="juan@clinica.com"
            />
          </div>

          <div>
            <label className="block text-sm text-[#b0b0b5] mb-2">Teléfono</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[rgba(255,255,255,0.07)] rounded-lg text-white placeholder-[#636366] focus:border-[#e82127] focus:outline-none transition-colors"
              placeholder="+34 612 345 678"
            />
          </div>

          <div>
            <label className="block text-sm text-[#b0b0b5] mb-2">Nombre de la clínica</label>
            <input
              type="text"
              name="clinicName"
              value={formData.clinicName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[rgba(255,255,255,0.07)] rounded-lg text-white placeholder-[#636366] focus:border-[#e82127] focus:outline-none transition-colors"
              placeholder="Clínica Dental García"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full cta-button text-base font-semibold py-3 mt-6"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            {isSubmitting ? 'Enviando...' : 'Agendar llamada'}
          </button>

          {/* Status messages */}
          {submitStatus === 'success' && (
            <p className="text-center text-[#34c759] text-sm mt-4">
              ✓ Formulario enviado. Te contactaremos pronto.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="text-center text-[#e82127] text-sm mt-4">
              Error al enviar. Intenta de nuevo.
            </p>
          )}
        </form>

        {/* Footer text */}
        <p className="text-xs text-[#636366] text-center mt-6">
          Sin coste · Sin compromiso · Respuesta en 24h
        </p>
      </div>
    </div>
  );
}
