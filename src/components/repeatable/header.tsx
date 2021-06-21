import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { PrismicHelper } from '../../utils';
import LanguageSwitcher from '../language-switcher';

enum CategoryType { url, external_url, none }

interface SubMenuInterface { prismicHelper: PrismicHelper, categories: any }
const SubMenu = ({ prismicHelper, categories = [] }: SubMenuInterface) => {
    if (categories) {
        return <>
            {
                categories.map((category) => {

                    let type: CategoryType = CategoryType.none;
                    if (category.data.url && category.data.url.id) type = CategoryType.url;
                    else if (category.data.url_external && category.data.url_external.url) type = CategoryType.external_url;

                    return (
                        <>
                            <div className="col-12 col-lg-4" id={category.data.name} key={category.data.name}>
                                <div className="megamenu-title">
                                    {type == CategoryType.url &&
                                        <Link href={prismicHelper.getHrefResolver()(category.data.url)} passHref >{category.data.name}</Link>
                                    }
                                    {type == CategoryType.external_url &&
                                        <Link href={category.data.external_url} passHref >{category.data.name}</Link>
                                    }
                                    {type == CategoryType.none &&
                                        <span>{category.data.name}</span>
                                    }
                                </div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {
                                        category.sub_categories.map((category) => {
                                            return (
                                                <>
                                                    <li className="megamenu-link">
                                                        {type == CategoryType.url &&
                                                            <Link href={prismicHelper.getHrefResolver()(category.url)} passHref key={category.name} >
                                                                <a>{category.name}</a>
                                                            </Link>
                                                        }
                                                        {type == CategoryType.external_url &&
                                                            <Link href={category.external_url} passHref key={category.name} >
                                                                <a>{category.name}</a>
                                                            </Link>
                                                        }
                                                        {type == CategoryType.none &&
                                                            <Link href="#" key={category.name}>
                                                                <a>{category.name}</a>
                                                            </Link>
                                                        }
                                                    </li>
                                                </>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </>
                    );
                })
            }
        </>
    }
};

interface MenuLinksInterface { prismicHelper: PrismicHelper, categories: any, subcategories: any }
const MenuLinks = ({ prismicHelper, categories = [], subcategories = [] }: MenuLinksInterface) => {
    if (categories) {
        return <>
            {
                categories.map((category) => {

                    let type: CategoryType = CategoryType.none;
                    if (category.url && category.url.id) type = CategoryType.url;
                    else if (category.url_external && category.url_external.url) type = CategoryType.external_url;

                    const filteredSubcategories = subcategories.filter(element => element.data.foreign_id == category.key);
                    if (filteredSubcategories.length > 0) {
                        return (
                            <NavDropdown title={category.name} id={category.name} className="megamenu" key={category.name}>
                                <div className="row">
                                    <SubMenu prismicHelper={prismicHelper} categories={filteredSubcategories}></SubMenu>
                                </div>
                            </NavDropdown>
                        );
                    }
                    else {
                        if (type == CategoryType.url) {
                            return <Link href={prismicHelper.getHrefResolver()(category.url)} passHref key={category.name} >
                                <a>{category.name}</a>
                            </Link>
                        }
                        else if (type == CategoryType.external_url) {
                            return <Link href={category.external_url} passHref key={category.name} >
                                <a>{category.name}</a>
                            </Link>
                        }
                        else if (type == CategoryType.none) {
                            return <Link href="#" key={"category.name"}>
                                <a>{category.name}</a>
                            </Link>
                        }
                    }
                })
            }
        </>
    }
};

interface HeaderInterface { prismicHelper: PrismicHelper, headerData: any, elementsEnd: Array<Component> }
const Header = ({ prismicHelper, headerData, elementsEnd = [] }: HeaderInterface) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Link href={'/'} passHref>
                        <picture>
                            <source srcSet={headerData.logo.url} media="(min-width: 600px)" />
                            <img src={headerData.logo.small.url} height={50} alt={headerData.logo.alt} />
                        </picture>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto me-auto">
                        <MenuLinks prismicHelper={prismicHelper} categories={headerData.categories} subcategories={headerData.body.filter(element => element.slice_type == "category").map(elememt => { return { data: elememt.primary, sub_categories: elememt.items } })} />
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end flex-sm-grow-0">
                    <Nav>
                        <LanguageSwitcher />
                    </Nav>
                </Navbar.Collapse>
                {elementsEnd !== null && elementsEnd.length > 0 &&
                    <Navbar.Collapse className="justify-content-end flex-sm-grow-0">
                        <Nav>
                            {
                                elementsEnd.map((element: Component) => element)
                            }
                        </Nav>
                    </Navbar.Collapse>
                }
            </Navbar>
        </>
    )
};

export default Header;
