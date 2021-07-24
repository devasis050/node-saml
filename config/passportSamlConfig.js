

const passport = require('passport');
const PassportSaml = require('passport-saml');
const dotenv = require('dotenv');
dotenv.config();


console.log(process.env.SSO_ENTRYPOINT)

function strategyCallback(profile, done) {
    console.log('profile:', profile);
    console.log('done:', done);
}

const strategy = new PassportSaml.Strategy(
    {
        entryPoint: process.env.SSO_ENTRYPOINT,
        issuer: process.env.SSO_ISSUER,
        callbackUrl: process.env.SSO_CALLBACK_URL,
        cert: process.env.SSO_CERT
    },
    strategyCallback
);

passport.use(strategy);
module.exports = passport;