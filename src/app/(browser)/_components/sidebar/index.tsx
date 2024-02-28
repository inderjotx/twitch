import React from 'react'
import { Wrapper } from './wrapper'
import { getRecommendations } from '@/lib/recommentation'
import { Reco } from './ShowRecommedations'

export async function Sidebar() {

    const recomd = await getRecommendations()

    return (
        <Wrapper>
            <Reco data={recomd} />
        </Wrapper>
    )
}
