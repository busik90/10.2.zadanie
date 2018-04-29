var span = $('span');

span.each(function(index, element) {
  /* if(index % 2 == 0) {
    $(element).css('color', 'red');
  }; */

  // To samo co wyżej
  $('span:even').css('color', 'red');
});