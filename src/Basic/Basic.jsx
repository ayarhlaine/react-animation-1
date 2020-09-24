import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import FadeIn from './FadeIn/FadeIn';
function Basic() {
    return (
        <div className="Basic">
           <h2>Basic</h2>
           <SectionTitle  title="Fade In / Fade Out"/>
           <FadeIn />
        </div>
    )
}

export default Basic;
