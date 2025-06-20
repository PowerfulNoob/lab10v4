export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}",
    ],
    safelist: [
        'text-primary',
        'text-2xl',
        'font-bold',
        'bg-blue-300',
        'p-4'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1E40AF',
            },
        },
    },
    plugins: [],
}