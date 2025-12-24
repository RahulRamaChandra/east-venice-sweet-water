import { useState } from 'react';
import {
  Droplets,
  Building2,
  Wrench,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import logo from './assets/logo.jpeg';

// --- Easy-to-edit business details (update these once) ---
const BUSINESS_NAME = 'East Venice Sweet Water';
const DISPLAY_PHONE = '+973 36616810';
const PHONE_TEL = '+97336616810'; // Use full international format, no spaces
const EMAIL = 'eastvenice07@gmail.com';

// --- Formspree endpoint ---
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqezopwn';

function App() {
  // --- Contact form state (kept for same implementation + inline success/error) ---
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    service_type: 'Swimming Pool Filling',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Submit via fetch() to Formspree so user stays on your page (no redirect)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = {
        ...formData,
        _subject: `New Website Inquiry — ${BUSINESS_NAME}`,
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          company: '',
          service_type: 'Swimming Pool Filling',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Formspree submit error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt={`${BUSINESS_NAME} logo`}
              className="h-20 w-20 object-contain rounded-md bg-white p-1"
              loading="eager"
            />
            <h1 className="text-2xl font-extrabold leading-tight bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent whitespace-nowrap">
              {BUSINESS_NAME}
            </h1>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-cyan-600 transition"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-gray-700 hover:text-cyan-600 transition"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-cyan-600 transition"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition"
          >
            Get Quote
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Premium Sweet Water Supply Across Bahrain
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Reliable tanker water delivery for swimming pools, hotels, and construction sites. Fast, clean, and professional service you can trust.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition font-semibold text-lg shadow-lg"
                >
                  Request Service
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg shadow-lg border-2 border-cyan-600"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-lg">Clean & Safe Water</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-lg">24/7 Availability</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-lg">Fast Delivery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-lg">Competitive Pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive water supply solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Swimming Pool Filling
              </h3>
              <p className="text-gray-600 mb-6">
                Fast and efficient filling services for residential and commercial swimming pools. We ensure clean, quality water for your perfect pool experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2" />
                  Residential Pools
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2" />
                  Commercial Pools
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2" />
                  Quick Turnaround
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hotel Supply
              </h3>
              <p className="text-gray-600 mb-6">
                Reliable water supply services for hotels and resorts. We understand hospitality needs and deliver on schedule, every time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                  Regular Supply Contracts
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                  Emergency Service
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                  Flexible Scheduling
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition">
              <div className="bg-cyan-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Construction Sites
              </h3>
              <p className="text-gray-600 mb-6">
                Support your construction projects with dependable water supply. From mixing to dust control, we've got you covered.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-700 mr-2" />
                  Bulk Water Supply
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-700 mr-2" />
                  Regular Deliveries
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-700 mr-2" />
                  Site Assessments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eastvenice Sweetwater?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted water supply partner in Bahrain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                Clean, tested sweet water that meets all standards
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Modern Fleet
              </h3>
              <p className="text-gray-600">
                Well-maintained tankers for safe and clean delivery
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Service
              </h3>
              <p className="text-gray-600">
                Available round the clock for your water needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Bahrain-Wide
              </h3>
              <p className="text-gray-600">
                Serving all areas across the Kingdom of Bahrain
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-10 pb-16 sm:pt-12 sm:pb-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to order? Have questions? Fill out the form and we'll get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">Call us anytime for immediate service</p>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-cyan-600 hover:text-cyan-700 font-medium"
                    >
                      {DISPLAY_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">Send us your requirements</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-cyan-600 hover:text-cyan-700 font-medium"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">Serving all of Bahrain</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl -mt-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="full_name"
                      type="text"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Company Name <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Service Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service_type"
                      required
                      value={formData.service_type}
                      onChange={handleChange}
                      className="w-full rounded-lg border-2 border-cyan-600 bg-white px-4 py-3 focus:ring-2 focus:ring-cyan-200"
                    >
                      <option value="Swimming Pool Filling">Swimming Pool Filling</option>
                      <option value="Hotel Supply">Hotel Supply</option>
                      <option value="Construction Site">Construction Site</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-800">
                      Message <span className="text-slate-500">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <p className="text-center font-semibold text-green-700">
                      ✅ Thank you! Your inquiry has been sent.
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-center font-semibold text-red-600">
                      ❌ Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logo}
                  alt={`${BUSINESS_NAME} logo`}
                  className="h-10 w-10 object-contain rounded-md bg-white p-1"
                  loading="lazy"
                />
                <h3 className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  {BUSINESS_NAME}
                </h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner for sweet water supply across Bahrain. Quality service, every time.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Swimming Pool Filling</li>
                <li>Hotel Water Supply</li>
                <li>Construction Site Supply</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Phone: {DISPLAY_PHONE}</li>
                <li>Email: {EMAIL}</li>
                <li>Serving all of Bahrain</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
