import * as cors from 'cors';
//const whitelist = process.env.CORS_WHITELIST.split(',')
const options :cors.CorsOptions = {
    origin: '*',
    credentials: false,
    allowedHeaders: 'Authorization, Origin, X-Requested-With, Content-Type, Accept',
    methods: 'POST, GET, DELETE, PUT, OPTIONS',
    maxAge: 3600
}
export default cors(options)