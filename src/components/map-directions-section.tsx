import data from '@/content/contact.json';

export function MapDirectionsSection() {
    const { map } = data;
    return (
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-96 lg:h-full w-full rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.27466799078!2d80.2252119751911!3d26.512684876888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c33b0a2e7f8e1%3A0x83f0f7f81881b212!2sHall%20of%20Residence%20XII!5e0!3m2!1sen!2sin!4v1720528629513!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[1] contrast-[1.2] opacity-80"
              ></iframe>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <h3 className="text-3xl font-serif font-bold text-primary mb-4">{map.title}</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                {map.description}
              </p>
              <div className="space-y-2">
                <p className="font-bold text-white">Address:</p>
                {map.address.map((line, index) => (
                    <p key={index} className="text-white/70">{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
