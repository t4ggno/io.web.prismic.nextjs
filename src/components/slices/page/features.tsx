import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface EffectProps {
    slice: any,
    isDescription: boolean,
    isMedia: boolean,
}
class Effect extends React.Component<EffectProps> {
    static defaultProps = {
        isDescription: false,
        isMedia: false,
    }

    render() {
        if (this.props.slice.primary["effect"].toUpperCase() == "NONE") {
            return (
                <>
                    {this.props.children}
                </>
            );
        }
        else if (this.props.slice.primary["effect"].toUpperCase() == "FADE") {
            return (
                <Fade cascade triggerOnce direction={this.props.isDescription ? "left" : this.props.isMedia ? "right" : "down"} >
                    {this.props.children}
                </Fade>
            );
        }
    }
}

const Simple = ({ slice }) => {
    console.log(slice);
    if (slice) {
        return <div className="slice__page__features__simple-container row">
            {
                slice.map((feature) => {
                    let iconPack;
                    if (feature.icon_pack.toUpperCase() == "SOLID") iconPack = "fas";
                    else if (feature.icon_pack.toUpperCase() == "REGULAR") iconPack = "far";
                    else if (feature.icon_pack.toUpperCase() == "BRANDT") iconPack = "fab";

                    return <div className="slice__page__features__simple-element-outer col-6 col-lg-4 col-xl-3 d-flex flex-column" key={feature.name}>
                        <div className="slice__page__features__simple-element-inner d-flex flex-column">
                            <div className="slice__page__features__simple-icon d-flex justify-content-center align-self-center">
                                <FontAwesomeIcon className="" icon={[iconPack, feature.icon_name]} />
                            </div>
                            <div className="slice__page__features__simple-name d-flex align-items-center align-self-center">
                                {feature.name}
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    }
};

const Features = ({ slice }) => {
    return (
        <section className="slice__page__features" style={{ backgroundImage: `url(${slice.primary.background?.url})` }}>
            <div className="container">
                {slice.primary.title && slice.primary.title.length > 0 &&
                    <div className="slice__page__features__title text-center">{RichText.render(slice.primary.title)}</div>
                }
                {slice.primary.type.toUpperCase() == "SIMPLE" &&
                    <Simple slice={slice.items} />
                }
            </div>
        </section>
    );
};

export default Features;
