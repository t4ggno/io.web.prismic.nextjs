import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export default class PrismicHelper {

    private apiEndpoint: string;
    private hrefResolver: (doc: any) => string;
    public client: DefaultClient;
    private static instance: PrismicHelper;

    private constructor() { };

    public static createInstance(apiEndpoint: string, hrefResolver: (doc: any) => string, accessToken: string, request = null): PrismicHelper {

        // Create new instance
        const newInstance = new PrismicHelper
        newInstance.apiEndpoint = apiEndpoint
        newInstance.hrefResolver = hrefResolver
        newInstance.client = Prismic.client(apiEndpoint, PrismicHelper.createClientOptions(request, accessToken))

        // Add instance to list
        PrismicHelper.instance = newInstance

        // Return new instance
        return newInstance;
    }

    public static getInstance() {
        return PrismicHelper.instance
    }

    public getRepositoryName(): string {
        return this.apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/)[1]
    }

    public getHrefResolver() {
        return this.hrefResolver;
    }

    static manageLocal(Locales: Array<string>, locale: string) {
        const mainLanguage = Locales[0];
        const currentLang = locale !== undefined ? locale : mainLanguage;
        const isMyMainLanguage = mainLanguage === currentLang;

        return { mainLanguage, currentLang, isMyMainLanguage }
    }

    private static createClientOptions(request = null, prismicAccessToken = null) {
        const reqOption = request ? { request } : {};
        const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
        return { ...reqOption, ...accessTokenOption, };
    };
}
