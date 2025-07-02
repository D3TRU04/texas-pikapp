import React from 'react';
import { Header } from '../home/components/Header';
import { Footer } from '../home/components/Footer';
import { ArrowRight, Users, Heart, Award, GraduationCap, Handshake, Star } from 'lucide-react';

const lookFor = [
  {
    icon: <Award className="w-7 h-7 text-[#005596]" />,
    title: 'Good Moral Compass',
    desc: 'We value men who do the right thing, even when no one is watching.'
  },
  {
    icon: <Handshake className="w-7 h-7 text-[#005596]" />,
    title: 'Chivalrous Gentlemen',
    desc: 'Respectful, kind, and supportive to all.'
  },
  {
    icon: <Heart className="w-7 h-7 text-[#005596]" />,
    title: 'Strong Work Ethic',
    desc: 'Driven to succeed and always give your best.'
  },
  {
    icon: <ArrowRight className="w-7 h-7 text-[#005596]" />,
    title: 'Drive for Success',
    desc: 'Ambitious for both personal and organizational growth.'
  },
  {
    icon: <Users className="w-7 h-7 text-[#005596]" />,
    title: 'Pleasant Disposition',
    desc: 'Positive, friendly, and easy to get along with.'
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-[#005596]" />,
    title: 'Academic Integrity',
    desc: 'Committed to honesty and excellence in academics.'
  },
];

const offer = [
  {
    icon: <Users className="w-7 h-7 text-[#E7A614]" />,
    title: 'Brotherhood',
    desc: 'A tight-knit family with bonds that last a lifetime.'
  },
  {
    icon: <Heart className="w-7 h-7 text-[#E7A614]" />,
    title: 'Philanthropy',
    desc: 'The Ability Experience, our own national service initiative.'
  },
  {
    icon: <Award className="w-7 h-7 text-[#E7A614]" />,
    title: 'Leadership',
    desc: 'Opportunities to lead within the chapter and on campus.'
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-[#E7A614]" />,
    title: 'Academic Benefits',
    desc: 'Support from brothers in a wide range of majors and career paths.'
  },
  {
    icon: <ArrowRight className="w-7 h-7 text-[#E7A614]" />,
    title: 'Social Benefits',
    desc: 'Mixers, formals, and networking events with other organizations.'
  },
];

const whyPiKapp = [
  {
    icon: <Heart className="w-8 h-8 text-[#E7A614]" />, title: 'Brotherhood',
    desc: 'More than friends—family for life, supporting each other through everything.'
  },
  {
    icon: <Award className="w-8 h-8 text-[#E7A614]" />, title: 'Philanthropy',
    desc: 'The Ability Experience sets us apart, with hands-on service and fundraising for people with disabilities.'
  },
  {
    icon: <Users className="w-8 h-8 text-[#E7A614]" />, title: 'Leadership',
    desc: 'Shape the chapter, lead on campus, and hold top IFC positions.'
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-[#E7A614]" />, title: 'Academic Benefits',
    desc: 'Brothers in every major, with a strong network for academic and career support.'
  },
  {
    icon: <ArrowRight className="w-8 h-8 text-[#E7A614]" />, title: 'Social Benefits',
    desc: 'Mixers, formals, Texas-OU Weekend, and more—plus a strong network for life after college.'
  },
];

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with blue gradient background */}
        <header className="relative bg-gradient-to-r from-blue-600 to-sky-500 text-white py-20 mt-[90px] rounded-b-3xl shadow-lg overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10 animate-pulse z-0" style={{backgroundImage: `url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'#fff\' fill-opacity=\'0.2\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`, backgroundSize: '60px 60px'}}></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl mb-6 text-[#E7A614] font-normal">Interested in Joining?</h1>
            <p className="text-lg mb-4 font-normal text-white/90">
              Welcome to The University of Texas at Austin, where the next four years will be the most exciting years of your life. You have already taken the first step to enhancing your collegiate career by looking into Greek life here at Texas. We are the Zeta Theta chapter of Pi Kappa Phi or Pi Kapp, we rechartered at UT in 2007, and we have been growing steadily ever since! Expanding our brotherhood relies heavily on those whom we choose to be a part of our family. Pi Kappa Phi concentrates our efforts on recruiting to those who wish to be placed in a position of leadership and brotherhood within our organization of men with similar ideals, goals, and motives but who also possess many different abilities. We are building on the long standing tradition of being and recruiting men of CLASS. If you have any interest in joining, please <a href="#contact" className="text-[#ffd34d] underline hover:text-white">click here</a>.
            </p>
          </div>
          {/* Floating CTA Button */}
          <a href="#contact" className="hidden md:flex animate-bounce items-center gap-2 px-8 py-4 bg-[#E7A614] text-[#005596] rounded-full shadow-lg absolute left-1/2 -bottom-8 -translate-x-1/2 z-20 text-lg font-normal hover:bg-[#ffd34d] transition-colors">
            <Star className="w-5 h-5" />
            <span>Contact Us About Rush</span>
            <ArrowRight size={20} />
          </a>
        </header>
        <section className="max-w-4xl mx-auto px-4 py-16">
          {/* What We Look For - Marketable Card Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-[#005596] mb-8 text-center font-normal">What We Look For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {lookFor.map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-shadow">
                  <div>{item.icon}</div>
                  <div className="text-lg text-gray-700 font-normal">{item.title}</div>
                  <div className="text-gray-500 text-sm font-normal">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          {/* What We Offer - Marketable Card Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-[#E7A614] mb-8 text-center font-normal">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {offer.map((item, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg transition-shadow">
                  <div>{item.icon}</div>
                  <div className="text-lg text-gray-700 font-normal">{item.title}</div>
                  <div className="text-gray-500 text-sm font-normal">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Pi Kappa Phi - Animated Card Grid */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl text-[#005596] mb-8 text-center font-normal">Why Pi Kappa Phi?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {whyPiKapp.map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-[#e6f0fa] to-[#cce0f6] rounded-xl shadow p-7 flex flex-col items-center text-center gap-3 hover:scale-105 hover:shadow-xl transition-transform duration-200">
                  <div className="animate-spin-slow">{item.icon}</div>
                  <div className="text-lg text-[#005596] font-normal">{item.title}</div>
                  <div className="text-gray-600 text-sm font-normal">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial/Quote */}
          <div className="bg-white border-l-4 border-[#E7A614] p-6 mb-8 shadow rounded-xl">
            <p className="italic text-gray-700 text-lg mb-2">“Pi Kapp gave me a family away from home, leadership opportunities, and memories I'll never forget.”</p>
            <div className="text-gray-500">— Recent New Member</div>
          </div>
          <div className="bg-white border-l-4 border-[#005596] p-6 mb-12 shadow rounded-xl">
            <p className="italic text-gray-700 text-lg mb-2">“I joined for the brotherhood, but I stayed for the growth and the lifelong friends.”</p>
            <div className="text-gray-500">— Active Member</div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="mb-12">
            <h3 className="text-xl mb-4 text-[#005596] font-normal">Contact Our Rush Team</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700 font-normal">
              <div>
                <div className="mb-4">
                  <div className="font-normal">Vice Archon/Head of Recruitment</div>
                  <div>Austin Hartis</div>
                  <div>Montgomery, Texas</div>
                  <div><a href="mailto:vicepresident.txpikapp@gmail.com" className="text-[#005596] underline">vicepresident.txpikapp@gmail.com</a></div>
                  <div><a href="tel:19367185136" className="text-[#005596] underline">(936) 718-5136</a></div>
                </div>
                <div className="mb-4">
                  <div className="font-normal">Rush Chairman</div>
                  <div>Ian Golliher</div>
                  <div>Austin, Texas</div>
                  <div><a href="tel:15123505490" className="text-[#005596] underline">(512) 350-5490</a></div>
                </div>
                <div className="mb-4">
                  <div className="font-normal">Austin Rush Captains</div>
                  <div>Matthew Jernigan <a href="tel:15129256561" className="text-[#005596] underline">(512) 925-6561</a></div>
                  <div>Jeff Cai <a href="tel:15129653886" className="text-[#005596] underline">(512) 965-3886</a></div>
                  <div>Rohan Gupta <a href="tel:15125659880" className="text-[#005596] underline">(512) 565-9880</a></div>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <div className="font-normal">Dallas Rush Captain</div>
                  <div>Maguire Kilpatrick <a href="tel:15033606726" className="text-[#005596] underline">(503) 360-6726</a></div>
                </div>
                <div className="mb-4">
                  <div className="font-normal">Houston Rush Captains</div>
                  <div>Luke Murray <a href="tel:18324745594" className="text-[#005596] underline">(832) 474-5594</a></div>
                  <div>Jack Killelea <a href="tel:17138269299" className="text-[#005596] underline">(713) 826-9299</a></div>
                </div>
                <div className="mb-4">
                  <div className="font-normal">Rio Grande Valley Rush Captain</div>
                  <div>Jonathon Danielson <a href="tel:19562951762" className="text-[#005596] underline">(956) 295-1762</a></div>
                </div>
                <div className="mb-4">
                  <div className="font-normal">San Antonio Rush Captain</div>
                  <div>Jake Sanchez <a href="tel:18306246719" className="text-[#005596] underline">(830) 624-6719</a></div>
                </div>
              </div>
            </div>
          </div>

          {/* Big CTA Section */}
          <div className="rounded-xl bg-gradient-to-br from-[#005596] to-[#4fa3e3] p-10 text-center shadow flex flex-col items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-2 font-normal">Ready to Start Your Journey?</h2>
            <p className="text-lg text-white/80 mb-4 font-normal">Take the first step toward brotherhood, leadership, and lifelong memories. Click below to get in touch with our rush team or learn more about Pi Kapp at UT Austin.</p>
            <a href="#contact" className="inline-flex items-center px-10 py-4 bg-[#E7A614] text-[#005596] rounded-lg transition-colors hover:bg-[#ffd34d] text-lg font-normal shadow-lg">
              <span>Contact Us About Rush</span>
              <ArrowRight size={22} className="ml-2" />
            </a>
          </div>

          <div className="text-gray-700 text-sm mt-8 font-normal text-center">
            <p>If you have any questions, comments, or concerns about recruitment or wish to inquire about joining Pi Kappa Phi, feel free to contact any one of our rush chairs above or provide us with your info on the document provided below.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 