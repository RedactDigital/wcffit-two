require('dotenv').config();

(async () => {
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};
const req = await fetch(`http://app:${process.env.PORT}/healthcheck`, options);

if (req.status === 200) {
    console.log('OK');
    process.exit(0);
}

if (req.status !== 200) {
    console.log('NOT OK');
    process.exit(1);
}
})();
