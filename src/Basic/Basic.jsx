import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FadeIn from './FadeIn/FadeIn';
import NumberCounter from './NumberCounter/NumberCounter';
import WaterTank from './WaterTank/WaterTank';
import './Basic.css'
function Basic() {
    return (
        <div className="Basic">
           <SectionTitle  title="Fade In / Fade Out"/>
           <FadeIn />
           <SectionTitle  title="Number Counter"/>
           <NumberCounter />
           <SectionTitle  title="Water Tank"/>
           <WaterTank />
        </div>
    )
}

export default Basic;
