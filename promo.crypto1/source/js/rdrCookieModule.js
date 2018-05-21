var cryptoApp = cryptoApp || {};
cryptoApp.RdrCookie = (function () {

    var parseCookie = function (cook) {

        var iOf = cook.indexOf('?');
        var a = cook.substring(iOf, cook.length).substr(1).split('&');
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i){
          var p=a[ i ].split('=');
          if (p.length != 2) continue;
          b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;

     }

    var _getPartnerParams = function () {

       $.QueryString = parseCookie(document.cookie);  

        return {
          usertoken: $.QueryString.usertoken,
          affiliateId: $.QueryString.affiliateId
       }; 
    };

    return {
        getPartnerParams : _getPartnerParams
    };

}()); 