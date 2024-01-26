import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/dist/types/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
 
export const appRouter = router({
  authCallback: publicProcedure.query(() => {
    const {getUser} = getKindeServerSession()
    const user = getUser()

    if (!user)
      throw new TRPCError({code : 'UNAUTHORIZED'})

    return {success: true}
  })
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;