import React from 'react'
import { ArrowLeftRight, BarChart3, MenuSquare, Utensils } from 'lucide-react'
import { Item, SideBar } from '../Components'

function HomePage() {
    return (
        <div>
            <SideBar>
                <Item icon={<BarChart3 size={20} />} text="Dashboard" active />
                <Item icon={<Utensils size={20} />} text="Food" />
                <Item icon={<MenuSquare size={20} />} text="Menu" />
                <Item icon={<ArrowLeftRight size={20} />} text="Orders" />

            </SideBar>
        </div>
    )
}

export default HomePage
