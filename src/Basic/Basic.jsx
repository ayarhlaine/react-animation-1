import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FadeIn from './FadeIn/FadeIn';
import NumberCounter from './NumberCounter/NumberCounter';
function Basic() {
    return (
        <div className="Basic">
           <h2>Basic</h2>
           <SectionTitle  title="Fade In / Fade Out"/>
           <FadeIn />
           <SectionTitle  title="Number Counter"/>
           <NumberCounter />
        </div>
    )
}

export default Basic;
