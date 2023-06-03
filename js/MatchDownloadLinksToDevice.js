(function () {
    var e_Windows = document.querySelector('.true-WindowsDownloadLink');
    var e_MacOS = document.querySelector('.true-MacOSDownloadLink');
    var e_Linux = document.querySelector('.true-LinuxDownloadLink');
    var e_Unknown = document.querySelector('.true-UnknownDownloadLink');
    var uu = (navigator.userAgent||"(Windows)").toLowerCase();
    if(uu.includes("windows")) {
        e_Windows.style.display = '';
        e_Unknown.style.display = 'none';
    } else if(uu.includes("mac os")) {
        e_MacOS.style.display = '';
        e_Unknown.style.display = 'none';
    } else if(uu.includes('linux')) {
        e_Linux.style.display = '';
        e_Unknown.style.display = 'none';
    } else if(uu.includes('cros')) {
        e_Linux.style.display = '';
        e_Unknown.style.display = 'none';
    }
})();
