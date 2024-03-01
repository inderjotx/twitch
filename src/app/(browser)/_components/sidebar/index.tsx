import React, { Suspense } from 'react'
import { Wrapper } from './wrapper'
import { getRecommendations } from '@/lib/recommentation'
import { Reco } from './ShowRecommedations'
import { SkeletonSideBar } from './SideBarSkeleton'

export async function Sidebar() {

    const recomd = await getRecommendations()

    return (
        <Wrapper>
            <Reco data={recomd} />
        </Wrapper>
    )
}
