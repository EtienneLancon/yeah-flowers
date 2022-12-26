import { BaseHttp } from "./http.js";

export class Genus extends BaseHttp
{
    constructor(){
        super();
    }

    async filter(filter = {})
    {
        return await super.filter('/v1/genus', filter);
    }
}