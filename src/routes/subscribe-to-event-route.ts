import type { FastifyPluginAsyncZod} from 'fastify-type-provider-zod'
import { z } from "zod"

export const subscribToEventRoute: FastifyPluginAsyncZod = async (app) => {
    app.post(
      '/subscriptions',
      {
        schema: {
          summary: 'subscribes someone to event',
          tags: ['Subsscribtion'],
          body: z.object({
            name: z.string(),
            email: z.string().email(),
          }),
          response: {
            201: z.object({
              name: z.string(),
              email: z.string(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { name, email } = request.body

        return reply.status(201).send({
          name,
          email,
        })
      }
    )
    
}