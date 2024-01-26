import { AppRouter } from '@/trpc'
import {createTRPCReact} from '@trpc/react-query'


// defining the type of router TRPC is going to use
export const trpc = createTRPCReact<AppRouter>({})

