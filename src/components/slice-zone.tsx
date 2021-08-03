import React from 'react'
import { Carousel, Seperator, Features, HeadlineDescriptionImage } from './slices/page';

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
                    case 'carousel':
                        return <Carousel slice={slice} key={`slice-${index}`} />;
                    default:
                        console.log(`Slice-Type not found: ${slice.slice_type}`)
                        return null;
                }
            })}
        </div>
    );
};

export default SliceZone;
