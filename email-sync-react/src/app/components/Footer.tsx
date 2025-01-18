import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Logo className="w-32 h-8" />
                        <p className="text-sm text-gray-600 mt-2">© 2023 이메일싱크. All rights reserved.</p>
                    </div>
                    <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
                        <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">이용약관</Link>
                        <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">개인정보처리방침</Link>
                        <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">문의하기</Link>
                        <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">자주 묻는 질문</Link>
                        <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">블로그</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
} 