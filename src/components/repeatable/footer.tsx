import React from 'react';
import { RichText } from 'prismic-reactjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faLinkedin, faSnapchat, faXing } from '@fortawesome/free-brands-svg-icons';

const AdditionalLinks = ({ additionalLinks }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 text-center text-sm-start slice footer-additional-links">
            <div className="mb-3">
                {RichText.render(additionalLinks.primary.title || [])}
            </div>
            <ul className="list-unstyled">
                {additionalLinks.items.map((additionalLink, index) => (
                    <li className={index > 0 ? "mt-1" : ""} key={additionalLink.name}>
                        <a className="mb-3" href={additionalLink.url}>
                            {additionalLink.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const SocialMedia = ({ socialMedia }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 text-center text-sm-start slice footer-social-media">
            <div className="mb-3">
                {RichText.render(socialMedia.primary.title || [])}
            </div>
            <span className="footer-social-media-icon-container d-flex justify-content-center justify-content-sm-start">
                {socialMedia.primary.linked_in && socialMedia.primary.linked_in.link_type != 'Any' ?
                    <a href={socialMedia.primary.linked_in.url} className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth={true} />
                    </a>
                    : <></>
                }
                {socialMedia.primary.facebook && socialMedia.primary.facebook.link_type != 'Any' ?
                    <a href={socialMedia.primary.facebook.url} className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faFacebook} fixedWidth={true} />
                    </a>
                    : <></>
                }
                {socialMedia.primary.instagram && socialMedia.primary.instagram.link_type != 'Any' ?
                    <a href={socialMedia.primary.instagram.url} className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faInstagram} fixedWidth={true} />
                    </a>
                    : <></>
                }
                {socialMedia.primary.snapchat && socialMedia.primary.snapchat.link_type != 'Any' ?
                    <a href={socialMedia.primary.snapchat.url} className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faSnapchat} fixedWidth={true} />
                    </a>
                    : <></>
                }
                {socialMedia.primary.xing && socialMedia.primary.xing.link_type != 'Any' ?
                    <a href={socialMedia.primary.xing.url} className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faXing} fixedWidth={true} />
                    </a>
                    : <></>
                }
                {socialMedia.primary.discord && socialMedia.primary.discord.link_type != 'Any' ?
                    <a href={socialMedia.primary.discord.url} className="footer-social-media-icon">
                        <FontAwesomeIcon icon={faDiscord} fixedWidth={true} />
                    </a>
                    : <></>
                }
            </span>
        </div>
    );
};

const OpeningHours = ({ openingHours }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 text-center text-sm-start slice footer-opening-hours">
            <div className="mb-3">
                {RichText.render(openingHours.primary.title || [])}
            </div>
            <span className="text-secondary small">
                {RichText.render(openingHours.primary.times || [])}
            </span>
        </div>
    );
};

const Slices = ({ slices }) => {
    return (
        <>
            {slices.map((slice, index) => {
                switch (slice.slice_type) {
                    case 'opening_hours':
                        return <OpeningHours openingHours={slice} key={`slice-${index}`} />;
                    case 'social_media':
                        return <SocialMedia socialMedia={slice} key={`slice-${index}`} />;
                    case 'additional_links':
                        return <AdditionalLinks additionalLinks={slice} key={`slice-${index}`} />;
                    default:
                        return null;
                }
            })}
        </>
    );
};

const Footer = ({ footer }) => {
    return (
        <footer className="container">
            <div className="row">
                <Slices slices={footer.data.body} />
                {   footer.data.copyright && typeof footer.data.copyright == "string" &&
                    <p className="text-center mt-5 text-secondary">
                        { String(footer.data.copyright).replace("<year>", new Date().getFullYear().toString()) }
                    </p>
                }
            </div>
        </footer >
    )
};

export default Footer;
