import postgres from 'postgres'
import {} from 
import { env } from '../env'

export const pg = postgres(env.POSTGRES_URL)