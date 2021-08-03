import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import Link from 'next/link';
import Image from 'next/image'
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkToPage from '../../link-to-page'

import Slider from "react-slick";

enum CategoryType { url, external_url, none }

function parseTextAlign(textAlign: string): string {
    switch (textAlign) {
        case "LEFT": return "text-start"
        case "RIGHT": return "text-end"
        case "CENTER": return "text-center"
        default: return "text-start"
    }
}

const Links = ({ slice, element }) => {

    if (element.button_left_text == null && element.left_icon == null && element.button_right_text == null && element.button_right_icon == null) {
        return null;
    }

    let buttonLeftType: "text" | "outlined" | "contained";
    if (element.button_left_type?.toUpperCase() == "TEXT") {
        buttonLeftType = "text"
    }
    else if (element.button_left_type?.toUpperCase() == "OUTLINED") {
        buttonLeftType = "outlined"
    }
    else if (element.button_left_type?.toUpperCase() == "CONTAINED") {
        buttonLeftType = "contained"
    }

    let buttonRightType: "text" | "outlined" | "contained";
    if (element.button_right_type?.toUpperCase() == "TEXT") {
        buttonRightType = "text"
    }
    else if (element.button_right_type?.toUpperCase() == "OUTLINED") {
        buttonRightType = "outlined"
    }
    else if (element.button_right_type?.toUpperCase() == "CONTAINED") {
        buttonRightType = "contained"
    }

    let iconPackLeft: "fas" | "far" | "fab";
    if (element.button_left_icon_pack?.toUpperCase() == "SOLID") iconPackLeft = "fas";
    else if (element.button_left_icon_pack?.toUpperCase() == "REGULAR") iconPackLeft = "far";
    else if (element.button_left_icon_pack?.toUpperCase() == "BRANDT") iconPackLeft = "fab";

    let iconPackRight: "fas" | "far" | "fab";
    if (element.button_right_icon_pack?.toUpperCase() == "SOLID") iconPackRight = "fas";
    else if (element.button_right_icon_pack?.toUpperCase() == "REGULAR") iconPackRight = "far";
    else if (element.button_right_icon_pack?.toUpperCase() == "BRANDT") iconPackRight = "fab";

    let typeLeftButton: CategoryType = CategoryType.none;
    if (element.button_left_url_internal && element.button_left_url_internal.id) typeLeftButton = CategoryType.url;
    else if (element.button_left_url_external && element.button_left_url_external.url) typeLeftButton = CategoryType.external_url;

    let typeRightButton: CategoryType = CategoryType.none;
    if (element.button_right_url_internal && element.button_right_url_internal.id) typeRightButton = CategoryType.url;
    else if (element.button_right_url_external && element.button_right_url_external.url) typeRightButton = CategoryType.external_url;

    return (
        <div className={`slice__page__carousel__links-container-outer row mt-3 mb-3 ms-2 me-2`}>
            <div className={`slice__page__carousel__links-container-inner col-12 ${(element.button_right_text == null && element.button_right_icon == null) ? 'col-lg-12' : 'col-lg-6'}`}>
                {(element.button_left_text != null || element.button_left_icon != null) &&
                    <>
                        {typeLeftButton == CategoryType.url &&
                            <LinkToPage pageId={element.button_left_url_internal.id}>
                                <Button className={`slice__page__carousel__links-button`} variant={buttonLeftType ?? "text"} color={"primary"}>
                                    {iconPackLeft && element.button_left_icon &&
                                        <div className="slice__page__carousel__links-icon me-1 d-flex justify-content-center align-self-center">
                                            <FontAwesomeIcon icon={[iconPackLeft, element.button_left_icon]} />
                                        </div>
                                    }
                                    {element.button_left_text &&
                                        <div className="slice__page__carousel__links-name">
                                            {element.button_left_text}
                                        </div>
                                    }
                                </Button>
                            </LinkToPage>
                        }

                        {typeLeftButton == CategoryType.external_url &&
                            <Link href={element.button_left_url_external.url}>
                                <Button className={`slice__page__carousel__links-button`} variant={buttonLeftType ?? "text"} color={"primary"}>
                                    {iconPackLeft && element.button_left_icon &&
                                        <div className="slice__page__carousel__links-icon me-1 d-flex justify-content-center align-self-center">
                                            <FontAwesomeIcon icon={[iconPackLeft, element.button_left_icon]} />
                                        </div>
                                    }
                                    {element.button_left_text &&
                                        <div className="slice__page__carousel__links-name">
                                            {element.button_left_text}
                                        </div>
                                    }
                                </Button>
                            </Link>
                        }
                    </>
                }
            </div>
            <div className={`slice__page__carousel__links-container-inner col-12 ${(element.button_left_text == null && element.button_left_icon == null) ? 'col-lg-12' : 'col-lg-6'}`}>
                {(element.button_right_text != null || element.button_right_icon != null) &&
                    <>
                        {typeRightButton == CategoryType.url &&
                            <LinkToPage pageId={element.button_right_url_internal.id}>
                                <Button className={`slice__page__carousel__links-button`} variant={buttonRightType ?? "text"} color={"primary"}>
                                    {iconPackRight && element.button_right_icon &&
                                        <div className="slice__page__carousel__links-icon me-1 d-flex justify-content-center align-self-center">
                                            <FontAwesomeIcon icon={[iconPackRight, element.button_right_icon]} />
                                        </div>
                                    }
                                    {element.button_right_text &&
                                        <div className="slice__page__carousel__links-name">
                                            {element.button_right_text}
                                        </div>
                                    }
                                </Button>
                            </LinkToPage>
                        }

                        {typeRightButton == CategoryType.external_url &&
                            <Link href={element.button_right_url_external.url}>
                                <Button className={`slice__page__carousel__links-button`} variant={buttonRightType ?? "text"} color={"primary"}>
                                    {iconPackRight && element.button_right_icon &&
                                        <div className="slice__page__carousel__links-icon me-1 d-flex justify-content-center align-self-center">
                                            <FontAwesomeIcon icon={[iconPackRight, element.button_right_icon]} />
                                        </div>
                                    }
                                    {element.button_right_text &&
                                        <div className="slice__page__carousel__links-name">
                                            {element.button_right_text}
                                        </div>
                                    }
                                </Button>
                            </Link>
                        }
                    </>
                }
            </div>
        </div>
    );
}

const Media = ({ slice, element }) => {
    if (!element.media.name) return null
    if (element.media.name.endsWith(".jpg") || element.media.name.endsWith(".png")) {
        let width = element.media.width;
        let height = element.media.height;
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
            <div className="slice__page__carousel__media">
                <Image src={element.media.url as string} layout="responsive" width={width} height={height} objectFit="cover" />
            </div>
        </>
    }
    else if (element.media.name.endsWith(".webm") || element.media.name.endsWith(".mp4")) {
        return <>
            <div className="slice__page__carousel__media">
                <video src={element.media.url} autoPlay={true} loop={true} />
            </div>
        </>
    }
    else return null;
}

const Description = ({ slice, element }) => {
    if (!element.description || (typeof element.description == "object" && element.description.length == 0)) return null;

    const textAlign = slice.primary?.text_align?.toUpperCase() ?? "LEFT"
    return (
        <div className={`slice__page__carousel__description mt-3 mb-2 ${parseTextAlign(textAlign)}`} style={{ color: slice.primary["description-color"] == "#000000" ? "white" : slice.primary["title-color"] }}>
            {RichText.render(element.description)}
        </div>
    );
}

const Title = ({ slice, element }) => {
    if (!element.name || (typeof element.name == "object" && element.name.length == 0)) return null;

    const textAlign = slice.primary?.text_align?.toUpperCase() ?? "LEFT"
    return (
        <div className={`slice__page__carousel__title mt-3 mb-2 ${parseTextAlign(textAlign)}`} style={{ color: slice.primary["title-color"] == "#000000" ? "white" : slice.primary["title-color"] }}>
            {RichText.render(element.name)}
        </div>
    );
}

const Carousel = ({ slice }) => {
    const settingsType1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        centerMode: true,

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    };
    const settingsType2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
    };
    return (
        <section className={`slice__page__carousel ${slice.primary.css_classes ?? ""}`} style={{ backgroundImage: `url(${slice.primary.background?.url ?? ''})`, backgroundColor: slice.primary.background_color ?? 'transparent' }}>
            {slice.primary.title && slice.primary.title.length > 0 &&
                <div className="slice__page__carousel__title text-center">{RichText.render(slice.primary.title)}</div>
            }
            <Slider {...settingsType2}>
                {
                    (slice?.items as Array<any>)?.map((element, index) => {
                        return <>
                            <div key={index} className={`slice__page__carousel__element d-flex flex-column`}>
                                <Media slice={slice} element={element} />
                                <Title slice={slice} element={element} />
                                <Description slice={slice} element={element} />
                                <Links slice={slice} element={element} />
                            </div>
                        </>
                    })
                }
            </Slider>
        </section>
    );
};

export default Carousel;
