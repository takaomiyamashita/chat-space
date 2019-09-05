$(document).on('turbolinks:load', function() {  
  function buildHTML(message){
    var AddImage = '';
    var MessageContent = message.content ? message.content : "";
    var AddImage = message.image ? `<img src=${message.image}>` : "";
    var html = `
      <div class="message" data-message-id = ${message.id}>
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

<<<<<<< HEAD
=======
  var reloadMessages = function() {
    last_message_id = message.id
    $.ajax({
      url: location.href,
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('success');
      var insertHTML = '';
      messages.forEach(function(message){
      insertHTML = buildHTML(message);         
      $('.main__message').append(insertHTML)
    })
    .fail(function() {
      console.log('error');
    });
  };
  function ScrollToNewMessage(){
    $('.main__message').animate({scrollTop: $('.main__message')[0].scrollHeight}, 'fast');
  }

>>>>>>> 716770fa4b385d854348ec9a22f96bf55ec579d2
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
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 1500);
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
          last_message_id = $('.message:last').data('id');
          console.log(location.href)
            $.ajax({
              url: 'api/messages',
              type: 'get',
              dataType: 'json',
              data: {id: last_message_id}
            })
            .done(function(messages){
              var insertHTML = '';
              var html = buildHTML(messages);
              messages.forEach(function () {
              insertHTML = html; 
              $('.new_message').append(insertHTML);
              $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight}, 5000);
              });
              
            });
        };
        setInterval(reloadMessages, 5000);
});