// ==UserScript==
// @name         perm-comparator copy-paste helpper 
// @namespace    https://perm-comparator.herokuapp.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://perm-comparator.herokuapp.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @grant        none
// ==/UserScript==
$(function(){
    $(document).on('dblclick', function(e){
        console.log(e.toElement);
        copyToClipboard(e.toElement);
    
    });
    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }
});
