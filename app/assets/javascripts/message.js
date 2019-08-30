function buildHTML(message){
  var addImage = '';
  var html = `
      <div class="chat__contents__content" data-message-id="${message.id}">
        <div class="chat__contents__content-top" data-message-id="${message.id}">
          <div class="chat__contents__content-top__user">${message.name}</div>
          <div class="chat__contents__content-top__timestamp">${message.date}</div>
        </div>
        <div class="chat__contents__content__text">
          <p class="chat__contents__content__text">
            ${message.content}
          </p>
          ${addImage}
        </div>
      </div>`;
  return html;
}

$(document).on('turbolinks:load', function() {
  $('.new_message').on('submit', function(e){
    console.log('ok');
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);      
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $(".form__submit").prop('disabled', false);
    })
    return false;
  });
});