import { BaseHttp } from "./http.js";

export class Plants extends BaseHttp
{
    constructor(){
        super();
    }

    async filter(filter = {})
    {
        return await super.filter('/v1/plants', filter);
    }
}