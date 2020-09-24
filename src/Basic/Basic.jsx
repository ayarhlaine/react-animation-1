import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FadeIn from './FadeIn/FadeIn';
import NumberCounter from './NumberCounter/NumberCounter';
import WaterTank from './WaterTank/WaterTank';
function Basic() {
    return (
        <div className="Basic">
           <h2>Basic</h2>
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
