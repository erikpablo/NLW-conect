import { z } from 'zod'

const evnSchema = z.object({
    PORT: z.coerce.number().default(3333)
})

export const env = evnSchema.parse(process.env)