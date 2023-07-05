var { expressjwt: jwt } = require("express-jwt");
//if token is generated using our secret using algo..,then the token is valid
function authJwt() {
    const secret = process.env.secret;

const api = process.env.API_URL;
   // const api = process.env.API_URL;
    return jwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
}).unless({
    path: [
        {url: /\/public\/uploads(.*)/ , methods: ['GET', 'OPTIONS'] },
        {url: /\/api\/v1\/products(.*)/ , methods: ['GET', 'OPTIONS'] },
        {url: /\/api\/v1\/categories(.*)/ , methods: ['GET', 'OPTIONS'] },
        {url: /\/api\/v1\/orders(.*)/,methods: ['GET', 'OPTIONS', 'POST','PUT']},
        `${api}/users/login`,
        `${api}/users/register`,
    ]
})
    
}
//console.log(authJwt);

async function isRevoked(req, payload, done) {
    if(!payload.isAdmin) {
        done(null, true)
    }

    done();
}

module.exports = authJwt;       