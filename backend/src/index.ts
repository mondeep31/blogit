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

// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMGZlM2EzNzUtNjhkOC00MTMzLWEwZjctNmRlNjFhZTk3Y2MzIiwidGVuYW50X2lkIjoiOGNiY2Y0MmU4NTg3MWM1YjQ1ZDcxYmVhOGI5NjFjYzQ5NGUxY2FmY2I0ZTcxNGUzODhjZWYzMTJhMmZjMDk0MyIsImludGVybmFsX3NlY3JldCI6IjczMzRmZDAyLTVlYTItNDllNC1iOWZhLWMzYjI1NmUxYWMzMCJ9.VXSwz9a5OzxLsROlc3EXAflEVLbnW0oM-HvaEoS_8tI"