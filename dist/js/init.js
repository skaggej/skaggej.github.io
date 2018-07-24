$(document).ready(function () {
    $.fn.jPicker.defaults.images.clientPath='dist/images/';
    var jPickerSettings = {
        window:
        {
            title: 'jPicker - http://www.digitalmagicpro.com/jPicker'
        },
        color:
        {
            active: new $.jPicker.Color({ hex: '#cc0033' })
        }
    };
    $('#colorPicker').jPicker(jPickerSettings);
    $('.accordion').accordion({
        active: false,
        collapsible: true,
        heightStyle: content,
    });
});
