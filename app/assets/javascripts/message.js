$(document).on('turbolinks:load', function() {
  $('.new_message').on('submit', function(){
    console.log("hoge");
  });
});

// １行目のコード記載することで、以下のネストの内容が動作するようになるらしい。
// form_forメソッドでイベント発火させたい場合は、new_messageをクラスに指定する。これは暗記。