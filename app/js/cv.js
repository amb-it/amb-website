$(window).load(function() {
	$('#short').click(function() {
		$('i:not(.fa)').hide(1000);
		$('.top_text div').hide(1000);
		$('.top_text h3').hide(1000);
		$(this).removeClass('btn-info').addClass('btn-default').attr({'disabled':'disabled'});
		$('#full').removeClass('btn-default').addClass('btn-info').removeAttr('disabled');
        $('#short').tooltip('hide');
	});

	$('#full').click(function() {
		$('i').show(1000).css('display', 'inline');
		$('.top_text div').show(1000);
		$('.top_text h3').show(1000);
		$(this).removeClass('btn-info').addClass('btn-default').attr({'disabled':'disabled'});
		$('#short').removeClass('btn-default').addClass('btn-info').removeAttr('disabled');
        $('#full').tooltip('hide');
	});

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });

    setTimeout(function() {$('#btn_download').tooltip('show');}, 1000);
    setTimeout(function() {$('#btn_download').tooltip('hide');}, 3000);
});


window.downloadFile = function (sUrl) {
    //iOS devices do not support downloading. We have to inform user about this.
    if (/(iP)/g.test(navigator.userAgent)) {
        alert('Your device does not support files downloading. Please try again in desktop browser.');
        return false;
    }
    //If in Chrome or Safari - download via virtual link click
    if (window.downloadFile.isChrome || window.downloadFile.isSafari) {
        //Creating new link node.
        var link = document.createElement('a');
        link.href = sUrl;

        if (link.download !== undefined) {
            //Set HTML5 download attribute. This will prevent file from opening if supported.
            var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
            link.download = fileName;
        }
        //Dispatching click event.
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    // Force file download (whether supported by server).
    if (sUrl.indexOf('?') === -1) {
        sUrl += '?download';
    }
    window.open(sUrl, '_self');
    return true;
}

window.downloadFile.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
window.downloadFile.isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;