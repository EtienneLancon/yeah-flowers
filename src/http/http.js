import env from '../../env';

export class BaseHttp
{
    constructor(){}

    postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    };

    // getToken()
    // {
    //     fetch(env.rooturl+'/auth/claim?token='+env.token+'&origin='+env.origin, this.postOptions)
    //         .then((response) => {this.token = response?.json()})
    //         .then(console.log(this.token));
    // }

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
        const res =  await fetch(env.rooturl+url+this.queryParamToken()+this.getStrFilter(filter));
        
        return res.json()
    }
}