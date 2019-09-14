$(document).on('turbolinks:load', function() {  
  function buildHTML(message){
    var AddImage = '';
    var MessageContent = message.content ? message.content : "";
    var AddImage = message.image ? `<img src=${message.image}>` : "";
    var html = `
      <div class="message" data-id = ${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">${message.user_name}</div>
          <div class="upper-message__date">${message.date}</div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${MessageContent}
          </p>
        </div>
        ${AddImage}
      </div>`
    return html;
  } 

  $('.new_message').on('submit', function(e){
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
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 5000);
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

  var reloadMessages = function() {
    last_message_id = $('.messages:last').data('id');
      $.ajax({
        url: 'api/messages',
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages){
        var insertHTML = '';
        messages.forEach(function (message) {
        var html = buildHTML(message);
        insertHTML = html; 
        $('.new_message').append(insertHTML);
        // $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight}, 5000);
        });
      })
      // .fail(function() {
      //   alert('通信に失敗しました');
      // })
  };
  setInterval(reloadMessages, 5000);
});