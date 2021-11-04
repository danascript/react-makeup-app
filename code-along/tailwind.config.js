module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                base: 'Poppins, sans-serif',
                krona: '"Krona One", sans-serif',
            },
            colors: {
                dark: '#0C080B',
                green: '#1E3329',
                yellow: '#ffc94b',
                pink: '#fed2d1',
                'dark-grey': '#B8B8B8',
                'light-grey': '#ECECEC',
                light: '#FAFAFA',
            },
            zIndex: {
                '-1': -1,
            },
            container: {
                padding: '1rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
