import Image from 'next/image'
import Link from 'next/link'
import { Logo } from './components/Logo'
import { EnvelopeIcon, DevicesIcon, ComingSoonBadge } from './components/Icons'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  comingSoon?: boolean;
}

function FeatureCard({ icon, title, description, comingSoon = false }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div>{icon}</div>
        <h3 className="text-xl font-semibold text-black">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      {comingSoon && (
        <div className="flex justify-center">
          <ComingSoonBadge />
        </div>
      )}
    </div>
  )
}

interface TestimonialCardProps {
  quote: string;
  author: string;
}

function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-orange-100 p-6 rounded-lg">
      <p className="text-lg text-gray-800 mb-4">"{quote}"</p>
      <p className="text-gray-600 font-semibold">- {author}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Logo className="w-40 h-10" />
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="#get-started" className="text-gray-600 hover:text-gray-900">Get Started</Link>
          <Link href="/my-page" className="text-gray-600 hover:text-gray-900">My Page</Link>
        </nav>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Login / Sign Up
        </button>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Never miss an important email—get it delivered right where you need it
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            From Gmail to KakaoTalk, Slack, and SMS—instantly stay updated
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Get Started
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
              Connect Gmail
            </button>
          </div>
          <div className="mt-20">
            <Image src="/hero-illustration.svg" alt="Email connectivity" width={600} height={400} className="mx-auto" />
          </div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<EnvelopeIcon className="w-16 h-16 text-green-500" />}
                title="Gmail to KakaoTalk"
                description="Instantly receive your Gmail messages on KakaoTalk"
              />
              <FeatureCard
                icon={<EnvelopeIcon className="w-16 h-16 text-orange-500" />}
                title="Gmail to Slack"
                description="Get your emails directly in your Slack channels"
                comingSoon
              />
              <FeatureCard
                icon={<DevicesIcon className="w-16 h-16 text-blue-500" />}
                title="Multi-platform Support"
                description="Connect various email services to different messaging platforms"
                comingSoon
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="I can check my emails from anywhere, increasing my work efficiency!"
              author="Sarah K."
            />
            <TestimonialCard
              quote="No complicated setup, and notifications always arrive on time!"
              author="Mike T."
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo className="w-32 h-8" />
              <p className="text-sm text-gray-600 mt-2">© 2023 Email Service. All rights reserved.</p>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

