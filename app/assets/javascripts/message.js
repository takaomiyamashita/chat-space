function buildHTML(message){
  if ( message.image ) {
    var html =
     `<div class="message" data-message-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        <asset_path src=${message.image} >
      </div>`
    return html;
  } else {
    var html =
     `<div class="message" data-message-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
    return html;
  };
}
$(document).on('turbolinks:load', function() {
  $('.new_message').on('submit', function(e){
    console.log(ok);
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
<<<<<<< HEAD
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $(".form__submit").prop('disabled', faise);
    });
      return false;
=======
      .fail(function(){
        alert('error');
      });
      return false;
    });
>>>>>>> a8f77267fea3d26682f5a09859c535ce73376cb0
  });
});
// $(document).on('turbolinks:load', function() {
//   $('.new_message').on('submit', function(){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//    });
// });

<<<<<<< HEAD
=======
// $(document).on('turbolinks:load', function() {
//   $('.new_message').on('submit', function(){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//    });
// });

>>>>>>> a8f77267fea3d26682f5a09859c535ce73376cb0
// // １行目のコード記載することで、以下のネストの内容が動作するようになるらしい。
// // form_forメソッドでイベント発火させたい場合は、new_messageをクラスに指定する。これは暗記。