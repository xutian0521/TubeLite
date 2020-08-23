
axios.defaults.baseURL = 'http://localhost/';
// const routes = []
// const router = new VueRouter({
//     routes // (缩写) 相当于 routes: routes
// });

function getQueryString (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
