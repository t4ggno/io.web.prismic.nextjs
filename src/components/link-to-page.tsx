//===========================================
//== Imports
//===========================================

import Link from "next/link";
import React, { Component } from "react";

import { PrismicHelper } from "../utils";

//===========================================
//== Enums
//===========================================

enum CurrentState {
    WaitForMount, CollectData, LoggedIn, LoggedOut
}

//===========================================
//== Variables
//===========================================

//===========================================
//== Interfaces
//===========================================

interface Props {
    pageId: string,
}

interface State {
    link?: string,
}

//===========================================
//== Classes
//===========================================

export default class LinkToPage extends Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getLink = async () => {
        try {
            let document = await PrismicHelper.getInstance().client.queryFirst([
                `[at(document.type,"page")]`,
                `[at(document.id,"${this.props.pageId}")]`,
            ], {});

            this.setState({
                link: document?.data?.path
            });
        }
        catch (e) {
            setTimeout(this.getLink, 500)
        }
    }

    componentDidMount() {
        this.getLink()
    }

    render() {
        return <Link href={this.state.link ?? "#"}>
            {this.props.children}
        </Link>
    }
}