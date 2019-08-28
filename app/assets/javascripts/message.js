$(document).on('turbolinks:load', function() {
  $('.new_message').on('submit', function(){
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
  });
});

// １行目のコード記載することで、以下のネストの内容が動作するようになるらしい。
// form_forメソッドでイベント発火させたい場合は、new_messageをクラスに指定する。これは暗記。