import httpVue from './httpVue'

export default {
    getBannerList(data) {
        let url = httpVue.makeURL('/'+data.type+'/bannerList.json');
        return httpVue.getDataVue(url,{
            credentials: true
        });
    },
    getShopInfos(data){
        let url = httpVue.makeURL('/shopInfo/'+data.type+'/'+data.id+'.json');
        return httpVue.getDataVue(url,{
            credentials: true
        });
    }
}
