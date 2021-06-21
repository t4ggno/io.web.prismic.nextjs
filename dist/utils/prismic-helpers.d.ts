import { DefaultClient } from '@prismicio/client/types/client';
export default class PrismicHelper {
    private apiEndpoint;
    private hrefResolver;
    client: DefaultClient;
    private static instances;
    private constructor();
    static createInstance(instanceName: string, apiEndpoint: string, hrefResolver: (doc: any) => string, accessToken: string, request?: any): PrismicHelper;
    static getInstance(instanceName: string): any;
    getRepositoryName(): string;
    getHrefResolver(): (doc: any) => string;
    static manageLocal(Locales: Array<string>, locale: string): {
        mainLanguage: string;
        currentLang: string;
        isMyMainLanguage: boolean;
    };
    private static createClientOptions;
}
