import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';
import Image from 'next/image'
import { Button } from '@material-ui/core';
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

            let direction;
            if (this.props.isDescription) {
                if (this.props.slice.primary["media-position"].toUpperCase() == "LEFT") {
                    direction = "right"
                }
                else if (this.props.slice.primary["media-position"].toUpperCase() == "RIGHT") {
                    direction = "left"
                }
                else {
                    direction = "down"
                }
            }
            else if (this.props.isMedia) {
                if (this.props.slice.primary["media-position"].toUpperCase() == "LEFT") {
                    direction = "left"
                }
                else if (this.props.slice.primary["media-position"].toUpperCase() == "RIGHT") {
                    direction = "right"
                }
                else {
                    direction = "down"
                }

            }
            else {
                direction = "down"
            }

            return (
                <Fade style={{ width: "100%" }} damping={0.2} cascade triggerOnce direction={direction} >
                    {this.props.children}
                </Fade>
            );
        }
    }
}

const Links = ({ slice }) => {
    let direction: string, align: string

    if (slice.primary["media-position"].toUpperCase() == "LEFT") {
        direction = "left"
        align = "justify-content-center justify-content-lg-start"
    }
    else if (slice.primary["media-position"].toUpperCase() == "RIGHT") {
        direction = "left"
        align = "justify-content-center justify-content-lg-start"
    }
    else if (slice.primary["media-position"].toUpperCase() == "BOTTOM") {
        direction = "bottom"
        align = "justify-content-center"
    }

    return (
        <div className={`slice__page__headline-description-media-background__links-container-outer d-flex flex-row ${align}`}>
            {
                slice.items.map((link) => {

                    let buttonType: "text" | "outlined" | "contained";
                    if (link.type?.toUpperCase() == "TEXT") {
                        buttonType = "text"
                    }
                    else if (link.type?.toUpperCase() == "OUTLINED") {
                        buttonType = "outlined"
                    }
                    else if (link.type?.toUpperCase() == "CONTAINED") {
                        buttonType = "contained"
                    }

                    let iconPack: "fas" | "far" | "fab";
                    if (link.icon_pack?.toUpperCase() == "SOLID") iconPack = "fas";
                    else if (link.icon_pack?.toUpperCase() == "REGULAR") iconPack = "far";
                    else if (link.icon_pack?.toUpperCase() == "BRANDT") iconPack = "fab";
                    console.log(iconPack, link.icon_name)

                    return <div className={`slice__page__headline-description-media-background__links-container-inner d-flex flex-column ${direction}`} key={link.name}>
                        <Link href={link.internal_link ? link.internal_link : link.external_link ? link.external_link : "#"}>
                            <Button className={`slice__page__headline-description-media-background__links-button`} variant={buttonType ?? "text"} color={"primary"}>
                                {iconPack && link.icon_name &&
                                    <div className="slice__page__headline-description-media-background__links-icon d-flex justify-content-center align-self-center">
                                        <FontAwesomeIcon className="" icon={[iconPack, link.icon_name]} />
                                    </div>
                                }
                                <div className="slice__page__headline-description-media-background__links-name d-flex align-items-center align-self-center">
                                    {link.name}
                                </div>
                            </Button>
                        </Link>
                    </div>
                })
            }
        </div>
    );
}

const Media = ({ slice }) => {
    if (!slice.primary.media.name) return null
    if (slice.primary.media.name.endsWith(".jpg") || slice.primary.media.name.endsWith(".png")) {
        let width = slice.primary.media.width;
        let height = slice.primary.media.height;
        if (width > 2000) {
            height = (2000 / width) * height
            width = 2000
        }
        if (height > 2000) {
            width = (2000 / height) * width
            height = 2000
        }
        console.log(`width: ${width}; height: ${height}`)
        return <>
            <div className="slice__page__headline-description-media-background__media">
                <Image src={slice.primary.media.url as string} layout="responsive" width={width} height={height} objectFit="cover" />
            </div>
        </>
    }
    else if (slice.primary.media.name.endsWith(".webm") || slice.primary.media.name.endsWith(".mp4")) {
        return <>
            <div className="slice__page__headline-description-media-background__media">
                <video src={slice.primary.media.url} autoPlay={true} loop={true} />
            </div>
        </>
    }
    else return null;
}

const Description = ({ slice }) => {
    return (
        <div className={`slice__page__headline-description-media-background__description ${slice.primary["media-position"].toUpperCase() == "BOTTOM" ? "text-center" : "text-center text-lg-start"}`} style={{ color: slice.primary["description-color"] == "#000000" ? "white" : slice.primary["title-color"], "textAlign": slice.primary["media-position"].toUpperCase() == "BOTTOM" ? "center" : "left" }}>
            {RichText.render(slice.primary.description)}
        </div>
    );
}

const Title = ({ slice }) => {
    return (
        <div className={`slice__page__headline-description-media-background__title ${slice.primary["media-position"].toUpperCase() == "BOTTOM" ? "text-center" : "text-center text-lg-start"}`} style={{ color: slice.primary["title-color"] == "#000000" ? "white" : slice.primary["title-color"] }}>
            {RichText.render(slice.primary.title)}
        </div>
    );
}

const HeadlineDescriptionImage = ({ slice }) => {
    if (slice.primary["media-position"].toUpperCase() == "BOTTOM") {
        return (
            <section className={`slice__page__headline-description-media-background ${slice.primary.css_classes ?? ""}`} style={{ backgroundImage: `url(${slice.primary.background?.url ?? ''})`, backgroundColor: slice.primary.background_color ?? 'transparent' }}>
                <div className="container">
                    <div className="col-12 mb-5 ps-2 pe-2">
                        <Effect slice={slice} isDescription>
                            <>
                                {slice.primary.title &&
                                    <Title slice={slice} />
                                }
                            </>
                            <>
                                {slice.primary.description &&
                                    <Description slice={slice} />
                                }
                            </>
                            <>
                                {slice.items && slice.items.length > 0 &&
                                    <Links slice={slice} />
                                }
                            </>
                        </Effect>
                    </div>
                    <Effect slice={slice} isMedia>
                        <>
                            {slice.primary.media &&
                                <div>
                                    <Media slice={slice} />
                                </div>
                            }
                        </>
                    </Effect>
                </div>
            </section>
        );
    }
    else if (slice.primary["media-position"].toUpperCase() == "LEFT") {
        return (
            <section className={`slice__page__headline-description-media-background ${slice.primary.css_classes ?? ""}`} style={{ backgroundImage: `url(${slice.primary.background?.url ?? ''})`, backgroundColor: slice.primary.background_color ?? 'transparent' }}>
                <div className="container row">
                    <div className="col-12 col-lg-6 ps-2 pe-2 d-none d-lg-flex">
                        {slice.primary.media &&
                            <Effect slice={slice} isMedia>
                                <div style={{ width: "100%" }}>
                                    <Media slice={slice} />
                                </div>
                            </Effect>
                        }
                    </div>
                    <div className="col-12 col-lg-6 ps-4 pe-4 align-self-center">
                        <Effect slice={slice} isDescription>
                            <>
                                {slice.primary.title &&
                                    <Title slice={slice} />
                                }
                            </>
                            <>
                                {slice.primary.description &&
                                    <Description slice={slice} />
                                }
                            </>
                            <>
                                {slice.items && slice.items.length > 0 &&
                                    <Links slice={slice} />
                                }
                            </>
                        </Effect>
                    </div>
                    <div className="col-12 col-lg-6 ps-2 pe-2 mt-5 mt-lg-0 d-flex d-lg-none">
                        {slice.primary.media &&
                            <Effect slice={slice} isMedia>
                                <Media slice={slice} />
                            </Effect>
                        }
                    </div>
                </div>
            </section>
        );
    }
    else if (slice.primary["media-position"].toUpperCase() == "RIGHT") {
        return (
            <section className={`slice__page__headline-description-media-background ${slice.primary.css_classes ?? ""}`} style={{ backgroundImage: `url(${slice.primary.background?.url ?? ''})`, backgroundColor: slice.primary.background_color ?? 'transparent' }}>
                <div className="container row">
                    <div className="col-12 col-lg-6 ps-4 pe-4 align-self-center">
                        <Effect slice={slice} isDescription>
                            <>
                                {slice.primary.title &&
                                    <Title slice={slice} />
                                }
                            </>
                            <>
                                {slice.primary.description &&
                                    <Description slice={slice} />
                                }
                            </>
                            <>
                                {slice.items && slice.items.length > 0 &&
                                    <Links slice={slice} />
                                }
                            </>
                        </Effect>
                    </div>
                    <div className="col-12 col-lg-6 ps-2 pe-2 mt-5 mt-lg-0">
                        {slice.primary.media &&
                            <Effect slice={slice} isMedia>
                                <Media slice={slice} />
                            </Effect>
                        }
                    </div>
                </div>
            </section>
        );
    }
};

export default HeadlineDescriptionImage;
