var OS = {
    "WINDOWS": "win",
    "MACINTOSH": "mac",
    "LINUX": "linux",
    "IOS": "iOS",
    "ANDROID": "Android",
    "BLACKBERRY": "bb",
    "WINDOWS_PHONE": "winphone"
};

function getSO() { 

    var userAgent = navigator.userAgent;

    var rPlatform, aMatches;

    function getDesktopOS() {
        var sPlatform = navigator.platform;
        if (sPlatform.indexOf("Win") !== -1) {
            // userAgent in windows 7 contains: windows NT 6.1
            // userAgent in windows 8 contains: windows NT 6.2 or higher
            // userAgent since windows 10: Windows NT 10[...]
            var rVersion = /Windows NT (\d+).(\d)/i;
            var uaResult = userAgent.match(rVersion);
            var sVersionStr = "";
            if (uaResult[1] === "6") {
                if (uaResult[2] === 1) {
                    sVersionStr = "7";
                } else if (uaResult[2] > 1) {
                    sVersionStr = "8";
                }
            } else {
                sVersionStr = uaResult[1];
            }
            return {
                "name": OS.WINDOWS,
                "versionStr": sVersionStr,
                "isMobile": false,
            };
        } else if (sPlatform.indexOf("Mac") !== -1) {
            return {
                "name": OS.MACINTOSH,
                "versionStr": "",
                "isMobile": false,
            };
        } else if (sPlatform.indexOf("Linux") !== -1) {
            return {
                "name": OS.LINUX,
                "versionStr": "",
                "isMobile": false,
            };
        }
        console.error("Não foi possível detectar o Sistema Operacional");
        return null;
    }

    // Windows Phone. User agent includes other platforms and therefore must be checked first:
    rPlatform = /Windows Phone (?:OS )?([\d.]*)/;
    aMatches = userAgent.match(rPlatform);
    if (aMatches) {
        return ({
            "name": OS.WINDOWS_PHONE,
            "versionStr": aMatches[1],
            "isMobile": true,
        });
    }

    // BlackBerry 10:
    if (userAgent.indexOf("(BB10;") > 0) {
        rPlatform = /\sVersion\/([\d.]+)\s/;
        aMatches = userAgent.match(rPlatform);
        if (aMatches) {
            return {
                "name": OS.BLACKBERRY,
                "versionStr": aMatches[1],
                "isMobile": true,
            };
        } else {
            return {
                "name": OS.BLACKBERRY,
                "versionStr": '10',
                "isMobile": true,
            };
        }
    }

    // iOS, Android, BlackBerry 6.0+:
    // eslint-disable-next-line no-useless-escape
    rPlatform = /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
    aMatches = userAgent.match(rPlatform);
    if (aMatches) {
        var rAppleDevices = /iPhone|iPad|iPod/;
        var rBbDevices = /PlayBook|BlackBerry/;
        if (aMatches[0].match(rAppleDevices)) {
            aMatches[3] = aMatches[3].replace(/_/g, ".");
            //result[1] contains info of devices
            return ({
                "name": OS.IOS,
                "versionStr": aMatches[3],
                "isMobile": true,
            });
        } else if (aMatches[2].match(/Android/)) {
            aMatches[2] = aMatches[2].replace(/\s/g, "");
            return ({
                "name": OS.ANDROID,
                "versionStr": aMatches[3],
                "isMobile": true,
            });
        } else if (aMatches[0].match(rBbDevices)) {
            return ({
                "name": OS.BLACKBERRY,
                "versionStr": aMatches[4],
                "isMobile": true,
            });
        }
    }

    //Firefox on Android
    rPlatform = /\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;
    aMatches = userAgent.match(rPlatform);
    if (aMatches) {
        return ({
            "name": OS.ANDROID,
            "versionStr": aMatches.length === 3 ? aMatches[2] : "",
            "isMobile": true,
        });
    }

    // Desktop
    return getDesktopOS();
}

export default getSO;