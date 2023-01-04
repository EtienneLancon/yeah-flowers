import env from '../../../env';

export class BaseHttp
{
    constructor(alertService){
        this.alertService = alertService;
    }

    postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    queryParamToken()
    {
        return '?token='+env.token;
    }

    getStrFilter(filter)
    {
        let str = ''

        for(let key in filter)
        {
            str += '&filter['+key+']='+filter[key];
        }

        return str
    }

    async filter(url, filter)
    {
        const res =  await fetch(env.rooturl+url+this.queryParamToken()+this.getStrFilter(filter))
        .catch(e => {
            this.alertService.error(e, 'Error');
        })
        
        return res.json()
    }

    async get(url, id)
    {
        const res = await fetch(env.rooturl+url+'/'+id+this.queryParamToken())
        .catch(e => {
            this.alertService.error(e, 'Error');
        })

        return res.json()
    }
}