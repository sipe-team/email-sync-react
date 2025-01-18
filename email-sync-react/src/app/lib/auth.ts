import { env } from '../config/env';

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData {
    username: string;
    email: string;
    password: string;
}

export async function login(data: LoginData): Promise<boolean> {
    try {
        const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include', // 쿠키를 받기 위해 필요
        });

        return response.ok;
    } catch (error) {
        console.error('Login error:', error);
        return false;
    }
}

export async function register(data: RegisterData): Promise<boolean> {
    try {
        const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });

        return response.ok;
    } catch (error) {
        console.error('Register error:', error);
        return false;
    }
}