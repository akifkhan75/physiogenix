import React from "react";
import { MapPin, Clock, Phone, MessageSquare, Navigation, Building2 } from "lucide-react";
import { clinicData } from "@/data/clinicData";

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#e2ede8]" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Details & Schedule (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location &amp; Hours</span>
            </div>

            <h2 className="editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#0d211e]">
              Visit Our F-7 Markaz Clinic
            </h2>

            <p className="text-sm text-[#4a635f] font-light leading-relaxed">
              Centrally situated in the heart of Islamabad at Sector F-7 Markaz. Easy vehicular access, dedicated parking, and full elevator service to the 2nd floor.
            </p>

            {/* Address Box */}
            <div className="p-5 rounded-2xl bg-[#fafdfc] border border-[#e2ede8] space-y-3">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#10a880] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#102421] uppercase tracking-wider">
                    Physical Address
                  </h4>
                  <p className="text-xs text-[#445e59] mt-1 leading-relaxed">
                    {clinicData.contact.address.line1} <br />
                    <strong className="text-[#102421]">{clinicData.contact.address.landmark}</strong> <br />
                    {clinicData.contact.address.sector}, {clinicData.contact.address.city}, {clinicData.contact.address.postalCode}
                  </p>
                </div>
              </div>

              {/* Parking Note */}
              <div className="pt-2 border-t border-[#ebf3f0] text-[11px] text-[#6d847f]">
                <strong>Parking Notice:</strong> {clinicData.contact.directionsNote}
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="p-5 rounded-2xl bg-[#fafdfc] border border-[#e2ede8]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#10a880]" />
                <h4 className="text-xs font-semibold uppercase text-[#102421] tracking-wider">
                  Weekly Clinical Timings
                </h4>
              </div>

              <div className="space-y-2 text-xs">
                {clinicData.contact.timings.map((t, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-[#f2f7f4] last:border-0">
                    <span className="text-[#556e69]">{t.days}</span>
                    <span className={`font-semibold ${t.hours === "Closed" ? "text-red-500" : "text-[#102421]"}`}>
                      {t.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone & WhatsApp Quick Connect */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${clinicData.contact.primaryPhone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#102421] text-white text-xs font-medium hover:bg-[#10a880] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#20c997]" />
                <span>Call {clinicData.contact.primaryPhone}</span>
              </a>

              <a
                href={clinicData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#e6f6f1] text-[#0c7a5d] text-xs font-semibold hover:bg-[#cbeae0] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#d6ebe2] shadow-xl aspect-4/3 sm:aspect-16/10 w-full bg-[#eef5f2]">
              <iframe
                title="Physiogenix Location Map F-7 Markaz Islamabad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.826019688329!2d73.0537!3d33.7206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9d8f95c805%3A0x67dbb184281313bf!2sF-7%20Markaz%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e2ede8] shadow-lg flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#10a880] text-white flex items-center justify-center shrink-0">
                  <Navigation className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-[#102421]">
                    Physiogenix • Sector F-7 Markaz
                  </h5>
                  <p className="text-[11px] text-[#556e69]">
                    Chaudhary Plaza (Above Medicsi Hospital)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

