import httpVue from './httpVue'

export default {
    getArticles(data) {
        let url = httpVue.makeURL('/zone/'+data.type+'/'+data.id+'.json');
        return httpVue.getDataVue(url,{
            credentials: true
        });
    }
}
