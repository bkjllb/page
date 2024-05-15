function gbl_signin (url) {
	var options;
	options = 'location=no,resizable=no,height=225,width=330,left=0,top=0,scrollbars=no,toolbar=no,menu=no';
	if (url.indexOf('deauth')!=-1)
		window.status = 'Signing you out....';
	else	
		window.status = 'Signing you in....';
	window.open(url, 'smi_gbl', options);
	window.focus();
}

function browser_sniffer(){var agt=navigator.userAgent.toLowerCase();	this.ie4=document.all&&!document.getElementById;this.ie5=document.all&&document.getElementById;this.ie6=document.all&&document.getElementById;	this.ns4=document.layers;this.ns6=document.getElementById&&!document.all;this.is_win=((agt.indexOf("win")!=-1)||(agt.indexOf("16bit")!=-1));this.is_mac=(agt.indexOf("mac")!=-1);}
var objB=new browser_sniffer();
function getElementById(id){if (objB.ie4){return document.all[id];}else if(objB.ns6||objB.ie5){return document.getElementById(id);}}

var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
	        || this.searchVersion(navigator.appVersion)
	        || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++)	{
	        var dataString = data[i].string;
	        var dataProp = data[i].prop;
	        this.versionSearchString = data[i].versionSearch || data[i].identity;
	        if (dataString) {
		        if (dataString.indexOf(data[i].subString) != -1)
			        return data[i].identity;
	        }
	        else if (dataProp)
		        return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
	        string: navigator.userAgent,
	        subString: "Chrome",
	        identity: "Chrome"
        },
        { 	string: navigator.userAgent,
	        subString: "OmniWeb",
	        versionSearch: "OmniWeb/",
	        identity: "OmniWeb"
        },
        {
	        string: navigator.vendor,
	        subString: "Apple",
	        identity: "Safari",
	        versionSearch: "Version"
        },
        {
	        prop: window.opera,
	        identity: "Opera"
        },
        {
	        string: navigator.vendor,
	        subString: "iCab",
	        identity: "iCab"
        },
        {
	        string: navigator.vendor,
	        subString: "KDE",
	        identity: "Konqueror"
        },
        {
	        string: navigator.userAgent,
	        subString: "Firefox",
	        identity: "Firefox"
        },
        {
	        string: navigator.vendor,
	        subString: "Camino",
	        identity: "Camino"
        },
        {		// for newer Netscapes (6+)
	        string: navigator.userAgent,
	        subString: "Netscape",
	        identity: "Netscape"
        },
        {
	        string: navigator.userAgent,
	        subString: "MSIE",
	        identity: "Explorer",
	        versionSearch: "MSIE"
        },
        {
	        string: navigator.userAgent,
	        subString: "Gecko",
	        identity: "Mozilla",
	        versionSearch: "rv"
        },
        { 		// for older Netscapes (4-)
	        string: navigator.userAgent,
	        subString: "Mozilla",
	        identity: "Netscape",
	        versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
	        string: navigator.platform,
	        subString: "Win",
	        identity: "Windows"
        },
        {
	        string: navigator.platform,
	        subString: "Mac",
	        identity: "Mac"
        },
        {
	           string: navigator.userAgent,
	           subString: "iPhone",
	           identity: "iPhone/iPod"
        },
        {
	        string: navigator.platform,
	        subString: "Linux",
	        identity: "Linux"
        }
    ]

};
BrowserDetect.init();
