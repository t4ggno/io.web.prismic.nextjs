import React, { Component } from 'react';
import Head from 'next/head';
import Header from './repeatable/header';
import Footer from './repeatable/footer';
import { PrismicHelper } from '../utils';

interface PageInterface { prismicHelper: PrismicHelper, title: string, children:any, header?: any, footer?: any, headerElementsStart?: Array<any>, headerElementsEnd?: Array<any> }
const Page = ({ prismicHelper, title, children, header, footer, headerElementsStart = [], headerElementsEnd = [] }: PageInterface) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.png" type="image/png" />
                <title>{title}</title>
            </Head>
            <Header prismicHelper={prismicHelper} headerData={header?.data} elementsEnd={headerElementsEnd} />
            <main>{children}</main>
            <Footer footer={footer} /> 
        </>
    )
};

export default Page;