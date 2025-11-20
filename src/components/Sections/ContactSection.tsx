import { useState, useRef, type ChangeEvent, type MouseEvent, type ReactNode } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface MousePosition {
  x: number;
  y: number;
}

export default function ContactForm(): ReactNode {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    const res = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_KEY}`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ formData })
    })

    if (res.status === 200) {
      setShowSuccess(true)
    }

  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = (): void => {
    setIsHovering(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovering(false);
  };

  const getCardTransform = (): string => {
    if (!isHovering || !cardRef.current) return 'perspective(1000px)';

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (mousePosition.y - centerY) / 30;
    const rotateY = (centerX - mousePosition.x) / 30;

    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const getGlowStyle = (): { opacity: number; background?: string } => {
    if (!isHovering) return { opacity: 0 };

    return {
      opacity: 1,
      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 244, 245, 0.1), transparent)`
    };
  };

  return (
    <div className=" text-zinc-100 min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Info */}
        <div className="flex flex-col justify-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-50">
              Get in touch
            </h1>
            <p className="text-lg text-zinc-400">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 group cursor-pointer transition-all hover:translate-x-1">
              <div className="mt-1 p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                <Mail className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-medium text-zinc-200">Email</h3>
                <p className="text-base text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  ayushawachar0989@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer transition-all hover:translate-x-1">
              <div className="mt-1 p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                <Phone className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-medium text-zinc-200">Phone</h3>
                <p className="text-base text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  +91 7798483419
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group cursor-pointer transition-all hover:translate-x-1">
              <div className="mt-1 p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                <MapPin className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-medium text-zinc-200">Office</h3>
                <p className="text-base text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  123 Business St, Suite 100<br />San Francisco, CA 94105
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full animate-fade-in-delay">
          <div
            ref={cardRef}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-transform duration-500 ease-out"
            style={{ transform: getCardTransform() }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={getGlowStyle()}
            />

            {showSuccess ? (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 rounded-2xl z-20 animate-scale-in">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-zinc-100">Message Sent!</h3>
                  <p className="text-base text-zinc-400">Recived Message Succesfully !</p>
                </div>
              </div>
            ) : null}

            <div className="space-y-6 relative z-10">
              <div className="form-field">
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all focus:scale-[1.02]"
                  placeholder="Your name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all focus:scale-[1.02]"
                  placeholder="example@email.com"
                />
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all focus:scale-[1.02]"
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-base text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:border-transparent transition-all resize-none focus:scale-[1.02]"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-medium text-base py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 group active:scale-95"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
