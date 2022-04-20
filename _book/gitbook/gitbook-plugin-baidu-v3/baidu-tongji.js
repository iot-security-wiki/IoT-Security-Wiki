require(["gitbook"], function(gitbook) {

	gitbook.events.bind("start", function(e, pluginConfig) {

        var config = pluginConfig.baidu || {};
        if (!config.token) {
            throw "Need to option 'token' for Baidu Analytics plugin";
        }
        function loadScriptString(code) {
		    var script = document.createElement("script");
		    script.type = "text/javascript";
		    try {
		        script.appendChild(document.createTextNode(code));
		    } catch (ex) {
		        script.text = code;
		    }
		    document.body.appendChild(script);
		}
		loadScriptString("var _hmt = _hmt || []; (function() { var hm = document.createElement('script'); hm.src = '//hm.baidu.com/hm.js?" + config.token + "';var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(hm, s); })();");
    });

    gitbook.events.bind("page.change", function() {
        _hmt.push(['_trackEvent', location.pathname, 'page.change', '', '']);
    });

});