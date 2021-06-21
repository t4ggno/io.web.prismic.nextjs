import { DefaultClient } from '@prismicio/client/types/client';

export default class PrismicQueries {

    async fetchDocs(client: DefaultClient, page = 1, routes = []): Promise<any[]> {
        const response = await client.query('', { pageSize: 100, lang: '*', page });
        const allRoutes = routes.concat(response.results);
        if (response.results_size + routes.length < response.total_results_size) {
            return this.fetchDocs(client, page + 1, allRoutes);
        }
        return [...new Set(allRoutes)];
    }

    async queryRepeatableDocuments(filter: (object:object) => boolean, client: DefaultClient) {
        const allRoutes = await this.fetchDocs(client);
        return allRoutes.filter(filter);
    }
}