'use client';
import Image from 'next/image'
import { EnvelopeIcon, DevicesIcon, ComingSoonBadge } from './components/Icons'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useAtomValue, useAtom } from 'jotai';
import { loginEmailAtom, gmailOAuthSuccessAtom, kakaoOAuthSuccessAtom } from './store/store';
import { useEffect } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  comingSoon?: boolean;
}

function FeatureCard({ icon, title, description, comingSoon = false }: FeatureCardProps) {
  const loginEmail = useAtomValue(loginEmailAtom);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col transform hover-lift slide-in">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="animate-float">{icon}</div>
        <h3 className="text-xl font-semibold text-black title-font">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      {comingSoon && (
        <div className="flex justify-center animate-pulse-slow">
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
    <div className="bg-indigo-50 p-6 rounded-lg">
      <p className="text-lg text-gray-800 mb-4">"{quote}"</p>
      <p className="text-gray-600 font-semibold">- {author}</p>
    </div>
  )
}

export default function Home() {
  const [loginEmail, setLoginEmail] = useAtom(loginEmailAtom);
  const [gmailOAuthSuccess, setGmailOAuthSuccess] = useAtom(gmailOAuthSuccessAtom);
  const [kakaoOAuthSuccess, setKakaoOAuthSuccess] = useAtom(kakaoOAuthSuccessAtom);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-indigo-50">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 slide-in">
            중요한 이메일을 놓치지 마세요
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 text-transparent bg-clip-text animate-pulse-slow">
              원하는 곳에서 바로 확인하세요
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 slide-in" style={{ animationDelay: '0.2s' }}>
            Gmail부터 카카오톡, 슬랙, SMS까지 - 실시간으로 전달해드립니다
          </p>
          {loginEmail !== "" && (
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 slide-in" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => {
                  if (!gmailOAuthSuccess) {
                    window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=1022594952161-lqftcnu13ogko5as20c3ljnomi80c9sh.apps.googleusercontent.com&redirect_uri=https://sipethonapi.nowgnas.site/oauth2&response_type=code&scope=https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/userinfo.email&access_type=offline&state=${loginEmail}';
                  }
                }}
                className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover-lift ${gmailOAuthSuccess ? 'cursor-not-allowed' : ''}`}
                disabled={gmailOAuthSuccess}
              >
                {gmailOAuthSuccess ? 'Gmail 연동완료' : 'Gmail 연동하기'}
              </button>
              <button
                onClick={() => {
                  if (!kakaoOAuthSuccess) {
                    window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=5e3b6128d7ee4e2e43fadcc3a56200bc&r[…]ode&redirect_uri=https://sipethonapi.nowgnas.site/oauth2/kakao&state=idd&state=${loginEmail}';
                  }
                }}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover-lift"
                disabled={kakaoOAuthSuccess}
              >
                {gmailOAuthSuccess ? 'KakaoTalk 연동완료' : 'KakaoTalk 연동하기'}
              </button>
            </div>
          )}
          <div className="mt-20 animate-float">
            <Image src="/hero-illustration.svg" alt="이메일 연동 서비스" width={600} height={400} className="mx-auto" />
          </div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">특별한 기능</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<EnvelopeIcon className="w-16 h-16 text-indigo-400" />}
                title="Gmail To 카카오톡"
                description="Gmail 메시지를 카카오톡으로 바로 받아보세요"
              />
              <FeatureCard
                icon={<svg className="w-16 h-16 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>}
                title="Gmail To 슬랙"
                description="이메일을 슬랙 채널에서 바로 확인하세요"
                comingSoon
              />
              <FeatureCard
                icon={<DevicesIcon className="w-16 h-16 text-indigo-500" />}
                title="다양한 플랫폼 지원"
                description="여러 이메일 서비스를 원하는 메신저와 연결해보세요"
                comingSoon
              />
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">사용자 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <p className="text-lg text-white mb-6 italic">
                "이메일을 카톡으로 받아볼 수 있다니! 업무 효율이 두 배로 올랐어요"
              </p>
              <div className="flex items-center">
                <Image
                  src="/image/junhwan.png"
                  alt="장준환님 프로필"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />                <span className="ml-4 font-medium text-white">장준환님</span>
              </div>
            </div>
            <div className="bg-purple-400 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <p className="text-lg text-white mb-6 italic">
                "설정도 쉽고, 알림도 딱 필요할 때 와서 너무 좋아요!"
              </p>
              <div className="flex items-center">
                <Image
                  src="/image/jiya.png"
                  alt="유지예 프로필"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <span className="ml-4 font-medium text-white">유지예님</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

