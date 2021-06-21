import React from 'react'
import HeadlineDescriptionImage from './slices/page/headline-description-image';
import Features from './slices/page/features';
import Seperator from './slices/page/seperator';

const SliceZone = ({ sliceZone }) => {
    return (
        <div className="row">
            {sliceZone.map((slice, index) => {
                switch (slice.slice_type) {
                    case 'headline___description___image':
                        return <HeadlineDescriptionImage slice={slice} key={`slice-${index}`} />;
                    case 'features':
                        return <Features slice={slice} key={`slice-${index}`} />;
                    case 'separator':
                        return <Seperator slice={slice} key={`slice-${index}`} />;
                    default:
                        console.log(`Slice-Type not found: ${slice.slice_type}`)
                        return null;
                }
            })}
        </div>
    );
};

export default SliceZone;
