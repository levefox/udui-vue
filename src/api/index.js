import httpVue from './httpVue'

export default {
    getBannerList (obj) {
        var str = '/v1/navmenu/getBannerList';
        var data = {regionId:-1,type:2,appLinkId:obj.appLinkId}
        var url = httpVue.makeURL(str,data);
        var backData = null;
        return httpVue.getDataVue(url)
    },
    getNavMenu(data){
        var str = '/v1/navmenu/getNavMenu';
        var url = httpVue.makeURL(str,data);
        return httpVue.getDataVue(url);
    },
    getMaxAreaVersionTime(){
        var str = '/v1/area/getMaxAreaVersionTime';
        var url = httpVue.makeURL(str);
        return httpVue.getDataVue(url);
    }
}
