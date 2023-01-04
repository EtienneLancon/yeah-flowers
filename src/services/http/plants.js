import { BaseHttp } from "./http.js";

export class Plants extends BaseHttp
{
    constructor(alertService){
        super(alertService);
    }

    async filter(filter = {})
    {
        return await super.filter('/v1/plants', filter);
    }

    async get(id)
    {
        return await super.get('/v1/plants', id)
    }
}