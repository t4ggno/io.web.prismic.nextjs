import { DefaultClient } from '@prismicio/client/types/client';
export default class PrismicQueries {
    fetchDocs(client: DefaultClient, page?: number, routes?: any[]): Promise<any[]>;
    queryRepeatableDocuments(filter: (object: object) => boolean, client: DefaultClient): Promise<any[]>;
}
