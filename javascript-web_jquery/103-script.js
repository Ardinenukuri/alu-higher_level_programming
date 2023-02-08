$('#btn_translate').click(()=> {
    const lang = $('#language_code').val();
    const path = `https://stefanbohacek.com/hellosalut/?lang=${lang}`
    $.get(path, (data) => {
        $('#hello').text(data.hello);
    });
});
$('#language_code').keydown((event) => {
    const lang = $('#language_code').val();
    const path = `https://stefanbohacek.com/hellosalut/?lang=${lang}`
    if (event.which === 13) {
        $.get(path, (data) => {
            $('#hello').text(data.hello);
        });   
    }
});
