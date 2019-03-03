import { ACCENT_COLORS, MUTED_COLOR, TEXT_COLOR } from '../styles/globals';
//https://placeholdit.imgix.net/~text?txtsize=24&bg=8e8786&txtclr=e5dbda&&w=350&h=350&txttrack=0&txt=Placeholder+Image+2
const placeholderImage = 'https://placeholdit.imgix.net/' +
    '~text?txtsize=24' +
    `&bg=${MUTED_COLOR.replace('#', '')}` +
    `&txtclr=${TEXT_COLOR.replace('#', '')}` +
    '&w=350&h=350&txttrack=0&txt=Placeholder+Image+';
const content = [
    'Welcome to Douban!',
    'With this app, you can learn all about the TOP250 movies!',
    'And you get to experiment with React Native!',
    'And aren\'t animations fun?!'
];
export default content.map((message, i) => ({
    message,
    color: '#fff',
    backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length],
    uri: `${placeholderImage}${i + 1}`
}));
//# sourceMappingURL=onboarding.js.map