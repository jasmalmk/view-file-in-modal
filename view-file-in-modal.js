/*!
 * view-file v1.0.0 
 * Copyright 2018-2019 JMK.
 */

(function (m) {
    m.viewFileInModal = function (p) {
        defaults = {fileUrl: "" };
        var p = m.extend({}, defaults, p);
       
        var extension = p.fileUrl.substr((p.fileUrl.lastIndexOf('.') + 1));
        extension = extension.toLowerCase();
        //alert(extension);
        html = '<div id="FileViewModal" class="modal"> <span class="close" data-dismiss="modal">&times;</span>';
        if (extension == 'jpg' || extension == 'png' || extension == 'jpeg' || extension == 'bmp') {
            html += '<img id="FileViewModalImageTag" class="img-responsive center-block modal-content" src="' + p.fileUrl + '" />';
        }
        else {
            if (extension=="pdf"){
            html += '<object id="FileViewModalPdfTag" data="' + p.fileUrl + '" type="application/pdf" style="width:100%;height:100%" class="modal-content">';
            html += ' If you are unable to view file, you can download from <a id="FileViewModalATag" href="' + p.fileUrl + '">here</a>';
            html += ' or download <a target="_blank" href="http://get.adobe.com/reader/">Adobe PDF Reader</a> to view the file.';
                html += "</object>";
            }else {
                html += '<object controls autoplay data="' + p.fileUrl + '"  id="FileViewModalPdfTag"  style="width:100%;height:100%" class="modal-content">';
                html += ' If you are unable to view file, you can download from <a id="FileViewModalATag" href="' + p.fileUrl + '">here</a>';
                html += ' or download <a target="_blank" href="http://get.adobe.com/reader/">Adobe PDF Reader</a> to view the file.';
                html += "</object>";
            }
        }
        html += '</div>';
        m("body").prepend(html);
        m("#FileViewModal").modal().on("hidden.bs.modal", function () { m(this).remove() })
    }
})(jQuery);