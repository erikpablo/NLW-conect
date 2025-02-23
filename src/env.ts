import { z } from 'zod'

const evnSchema = z.object({
    PORT: z.coerce.number().default(3333),
    POSTGRES_URL: z.string().url(),
    REDIS_URL: z.string().url(),
})

export const env = evnSchema.parse(process.env)