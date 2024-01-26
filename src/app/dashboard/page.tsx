    import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
    import {redirect} from "next/navigation"
    import React from 'react'

    const Page = () => {
        const {getUser} = getKindeServerSession()
        const user = getUser()
        console.log(user)

        if (!user || !user) redirect('/auth-callback?origin=dashboard')

        return <div></div>
    }


    
    export default Page
