$('#add_item').click(function() {
    $('.my_list').append('<li>Item</li>');
});
$('#remove_item').click(function() {
    let list = $('.my_list li');
    if (list.length > 0) {
	list[list.length - 1].remove();
    }
});
$('#clear_list').click(function() {
    $('.my_list').empty();
});
