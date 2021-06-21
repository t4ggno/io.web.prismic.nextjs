/// <reference types="react" />
import { PrismicHelper } from '../utils';
interface PageInterface {
    prismicHelper: PrismicHelper;
    title: string;
    children: any;
    header?: any;
    footer?: any;
    headerElementsStart?: Array<any>;
    headerElementsEnd?: Array<any>;
}
declare const Page: ({ prismicHelper, title, children, header, footer, headerElementsStart, headerElementsEnd }: PageInterface) => JSX.Element;
export default Page;
