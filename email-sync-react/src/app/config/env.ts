interface EnvVariables {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_ENV: 'development' | 'production';
}

function getEnvVariables(): EnvVariables {
    const env = process.env.NEXT_PUBLIC_ENV as 'development' | 'production';

    if (!process.env.NEXT_PUBLIC_API_URL) {
        throw new Error('NEXT_PUBLIC_API_URL is not defined');
    }

    return {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_ENV: env || 'development',
    };
}

export const env = getEnvVariables(); 