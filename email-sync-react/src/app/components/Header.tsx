'use client';
import Link from 'next/link';
import { Logo } from './Logo';
import { useAtom } from 'jotai';
import { loginEmailAtom } from '../store/store';

export function Header() {
    const [loginEmail] = useAtom(loginEmailAtom);

    return (
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/">
                <Logo className="w-40 h-10" />
            </Link>
            {loginEmail === "" && (<Link href="/auth" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                로그인 / 회원가입
            </Link>)}
        </header>
    );
}