import React from 'react';
import { Camera, Heart, Star, Award, Users, Calendar } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Wedding Photography',
      description: 'Capturing the magic of your special day with timeless elegance, romantic storytelling, and artistic vision.',
      features: ['Full ceremony coverage', 'Reception photography', 'Bridal & groom portraits', 'Detail shots & decor'],
      price: 'Starting at $2,500',
      backgroundImage: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '8-10 hours'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Portrait Photography',
      description: 'Professional portraits that capture personality, emotion, and authentic moments with artistic excellence.',
      features: ['Family portraits', 'Senior photography', 'Professional headshots', 'Maternity & newborn'],
      price: 'Starting at $350',
      backgroundImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '1-2 hours'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Event Photography',
      description: 'Professional event coverage that captures every important moment, celebration, and milestone beautifully.',
      features: ['Corporate events', 'Birthday celebrations', 'Conferences & seminars', 'Award ceremonies'],
      price: 'Starting at $500',
      backgroundImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3-6 hours'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Lifestyle Photography',
      description: 'Authentic lifestyle photography that captures real moments, genuine emotions, and personal stories.',
      features: ['Urban photography', 'Fashion lifestyle', 'Adventure shoots', 'Travel documentation'],
      price: 'Starting at $400',
      backgroundImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '2-4 hours'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Corporate Photography',
      description: 'Professional corporate photography for businesses, teams, executive portraits, and company branding.',
      features: ['Team photography', 'Executive portraits', 'Office environments', 'Corporate events'],
      price: 'Starting at $600',
      backgroundImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '2-8 hours'
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Custom Packages',
      description: 'Tailored photography packages designed specifically for your unique needs and vision.',
      features: ['Free consultation', 'Custom pricing', 'Flexible scheduling', '24hr response time'],
      price: 'Free Consultation',
      backgroundImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      isBooking: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200 mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I offer a comprehensive range of visual services to help you tell your story, build your brand, and capture your most important moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.backgroundImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[500px]">
                <div>
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-4">{service.price}</div>
                  {service.duration && (
                    <div className="text-gray-400 mb-4 text-sm">
                      Duration: {service.duration}
                    </div>
                  )}
                  <button 
                    onClick={() => {
                      if (service.isBooking) {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
                  >
                    {service.isBooking ? 'Get Quote' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-400 mb-8">
            Ready to see my work? Explore my portfolio to see examples of each photography style.
          </p>
          <button 
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;