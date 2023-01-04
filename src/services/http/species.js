import { BaseHttp } from "./http";

export class Species extends BaseHttp
{
    constructor(alertService){
        super(alertService);
    }

    async filter(filter = {})
    {
        return await super.filter('/v1/species', filter);
    }

    async get(id)
    {
        return await super.get('/v1/species', id)
    }
}