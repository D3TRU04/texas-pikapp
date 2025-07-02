import Image from 'next/image';
import Link from 'next/link';

export default function Officers() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-8 md:px-20 bg-transparent gap-8 md:gap-12 mb-20 md:mb-32">
      {/* Left: Text and Button */}
      <div className="md:w-1/3 w-full flex flex-col justify-center mb-8 md:mb-0">
        <h2 className="text-3xl mb-6">
          <span className="bg-black text-white px-4 py-2 rounded">Get to know us</span>
        </h2>
        <p className="text-lg text-black mb-8">
          Find out more about our organization, our officers, our philanthropy, our recruitment process, and our events.
        </p>
        <Link href="#officers" className="inline-flex items-center justify-center px-8 py-4 bg-[#005596] text-white text-lg rounded-lg transition-colors hover:bg-[#e0e7ef] space-x-2 w-64 mx-auto md:mx-0">
          <span>Meet our Officers</span>
        </Link>
      </div>
      {/* Center: Group Photo (even wider) */}
      <div className="md:w-3/5 w-full flex justify-center items-center mb-8 md:mb-0">
        <div className="w-full max-w-2xl h-80 md:h-96 relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/officers-pic.png"
            alt="Pi Kappa Phi Flag"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      {/* Right: Quote */}
      <div className="md:w-1/3 w-full flex flex-col justify-center items-center text-center md:text-left">
        <blockquote className="text-2xl md:text-3xl italic text-gray-600 mb-4 font-playfair">
          “You may all go to hell<br />and I will go to Texas.”
        </blockquote>
        <div className="text-gray-500 text-lg font-semibold">— DAVY CROCKETT</div>
      </div>
    </section>
  );
}
