import { Component } from 'react';
import { PrismicHelper } from '../../utils';
interface HeaderInterface {
    prismicHelper: PrismicHelper;
    headerData: any;
    elementsEnd: Array<Component>;
}
declare const Header: ({ prismicHelper, headerData, elementsEnd }: HeaderInterface) => JSX.Element;
export default Header;
