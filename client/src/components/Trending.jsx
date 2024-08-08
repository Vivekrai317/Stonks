import React from 'react'
import TradingviewWidget from './TradingviewWidget'
import TradingViewTimelineWidget from './TradingViewTimelineWidget'
import TradingViewHotlistsWidget from './TradingViewHotlistsWidget'
import Heatmap from './Heatmap'
import TradingViewMarketOverviewWidget from './TradingViewMarketOverviewWidget'
import { Footer } from './Footer'

export function Trending(props) {
    

    return (
        <>
            <h1 className='text-4xl font-bold text-[#babde2] mt-24 p-5 text-center mb-5'>Top Market Trends: What Investors Need to Know This Week</h1>
            <div className='px-28'>
            <TradingviewWidget/>
            <div className='flex gap-6 mt-10'>
            <TradingViewTimelineWidget/>
            <TradingViewHotlistsWidget/>
            <TradingViewMarketOverviewWidget/>
            </div>
            <div className='mt-10'>
                <h1 className='text-4xl font-bold text-black mb-5'>Sensex Heatmap</h1>
            <Heatmap/>
            </div>
            </div>
            <Footer/>
        </>
    )
}
