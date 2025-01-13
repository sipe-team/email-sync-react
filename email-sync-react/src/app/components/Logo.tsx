export function Logo({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 25C10 16.7157 16.7157 10 25 10H40C48.2843 10 55 16.7157 55 25C55 33.2843 48.2843 40 40 40H25C16.7157 40 10 33.2843 10 25Z" fill="#F97316" />
            <path d="M45 25C45 16.7157 51.7157 10 60 10H75C83.2843 10 90 16.7157 90 25C90 33.2843 83.2843 40 75 40H60C51.7157 40 45 33.2843 45 25Z" fill="#22C55E" />
            <text x="100" y="35" fontFamily="Arial" fontSize="24" fill="#4B5563">EmailSync</text>
        </svg>
    )
}

