import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)



export default app


// postgresql://neondb_owner:K0e9WDTftshI@ep-small-tree-a5k47uif.us-east-2.aws.neon.tech/neondb?sslmode=require

// DATABASE_URL=""