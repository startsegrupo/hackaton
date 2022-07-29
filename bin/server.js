import app from '../src/app.js';

const host = 'http://localhost';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in ${host}:${PORT}`);
});