import { BaseHttp } from "./http.js";

export class Genus extends BaseHttp
{
    constructor(alertService){
        super(alertService);
    }

    async filter(filter = {})
    {
        return await super.filter('/v1/genus', filter);
    }

    async get(id)
    {
        return await super.get('/v1/genus', id)
    }
}