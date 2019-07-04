/**
 * @flow
 */

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import router from './routes'
import { errorHandler } from './middleware'

const app = new Koa()
const cors = require('@koa/cors');

if (app.env === 'development') {
  app.proxy = true
}
// app.use(cors

var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
// app.use(cors());
app.use(errorHandler())
app.use(helmet())
app.use(bodyParser())
app.use(router)

export default app
