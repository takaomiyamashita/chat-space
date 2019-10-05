$(document).on('turbolinks:load', function() {  
  function buildHTML(message){
    var AddImage = message.image ? `<img src=${message.image}>`: "";
    var html = `
      <div class="message" data-id = ${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">${message.user_name}</div>
          <div class="upper-message__date">${message.date}</div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
          <p class="lower-message__image">
            ${AddImage}
          </p>
        </div>
        
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
      $('form').prop('disabled', false);    
      $('form')[0].reset();
      $('.chat').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })

    .fail(function(){
      alert('error');
    })
    return false;
  });

  
  if (window.location.href.match(/\/groups\/\d+\/messages/)){
      setInterval(update, '5000');
  }
    function update(){
      last_message_id = $('.message:last').data('id');
      $.ajax({
        url: 'api/messages',
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function update(messages){
        messages.forEach(function (message) {
          var insertHTML = "";
          insertHTML = buildHTML(message);
          $('.messages').append(insertHTML);
          $('.chat').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        });
      })
      // .fail(function update(){
      //   alert('通信に失敗しました');
      // })
      .always(function(){
        $(".form__submit").prop('disabled', false);
      })
      return false;
    }
});