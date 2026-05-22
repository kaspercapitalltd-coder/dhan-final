"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arjun S.",
      city: "Mumbai",
      quote:
        "Made my entire month's salary in one week following their BankNifty calls. The accuracy is genuinely shocking.",
      rating: 5,
    },
    {
      name: "Priya M.",
      city: "Delhi",
      quote:
        "I used to overtrade and blow my account. The Capital Guru calls come with exact SL which saved my capital. I'm finally profitable.",
      rating: 5,
    },
    {
      name: "Rahul K.",
      city: "Ahmedabad",
      quote:
        "Joined the 6-month plan last week. Best ROI on any investment I've made. The community is focused and the signals are lightning fast.",
      rating: 5,
    },
    {
      name: "Vikram T.",
      city: "Bangalore",
      quote:
        "Quality over quantity. They don't spam 20 trades a day. 2-3 precise setups per day that hit targets. Exactly what a working professional needs.",
      rating: 5,
    },
    {
      name: "Neha R.",
      city: "Pune",
      quote:
        "The risk management guidance is what makes this platform elite. First platform that actually cares about keeping your account green.",
      rating: 5,
    },
    {
      name: "Sanjay P.",
      city: "Hyderabad",
      quote:
        "Recovered my previous losses within 15 days of joining. The WhatsApp support is very responsive to queries. Highly recommended.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl sm:text-5xl tracking-widest text-white mb-4">
            WHAT OUR MEMBERS SAY
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto" />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="bg-bg-card border border-border p-8 rounded-lg hover:border-accent-gold/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 italic">
                &quot;{test.quote}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-border/50 pt-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center font-bold text-white border border-border">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">
                    {test.name}
                  </h4>
                  <p className="text-text-muted text-xs">{test.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            className="w-full"
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index}>
                <div className="bg-bg-card border border-border p-8 rounded-lg h-full max-w-sm mx-auto">
                  <div className="flex gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent-gold text-accent-gold"
                      />
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 italic min-h-[100px]">
                    &quot;{test.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                    <div className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center font-bold text-white border border-border">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">
                        {test.name}
                      </h4>
                      <p className="text-text-muted text-xs">{test.city}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom flex justify-center mt-6 gap-2" />
        </div>
      </div>
    </section>
  );
}
