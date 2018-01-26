chrome.extension.onRequest.addListener (
    function(request, sender, sendResponse) {
			if(location.hostname == 'www.google.co.jp') {
        var elms = document.querySelectorAll("span");
      } else {
        var elms = document.querySelectorAll("p");
      }
        var complete = [];
        $.each(elms,function(){
            var elm = this;
            var raw = elm.textContent;
						var data = {
				        text: raw
				    };
				    var status;
				    var url;
				    if(complete.includes(raw) == false){
	            $.ajax({
				        type:"post",                // method = "POST"
				        url:"https://localhost:3000/emos.json",        // POST送信先のURL
				        data:JSON.stringify(data),  // JSONデータ本体
				        contentType: 'application/json', // リクエストの Content-Type
				        dataType: "json",           // レスポンスをJSONとしてパースする
				        success: function(response){
				        	status = response['emo'];
				        	url = response['url'];
				        },
				        error: function() {         // HTTPエラー時
				        },
				        complete: function() {      // 成功・失敗に関わらず通信が終了した際の処理
				            if (status == 1) {
	           						elm.innerHTML = raw + '<a href="' + url.replace( /.json/g , "") + '" class="atemo-positive">' + '　' +'</a>';
				           	} else {
				           			elm.innerHTML = raw + '<a href="' + url.replace( /.json/g , "") + '" class="atemo-negative">' + '　' +'</a>';
				           	}
				   					complete.push(raw);
				        }
	   				 	});
          	}
        });
    }
)

$(function(){
			if(location.hostname == 'www.google.co.jp') {
        var elms = document.querySelectorAll("span");
      } else {
        var elms = document.querySelectorAll("p");
      }
        var complete = [];
        $.each(elms,function(){
            var elm = this;
            var raw = elm.textContent;
						var data = {
				        text: raw
				    };
				    var status;
				    var url;
				    if(complete.includes(raw) == false){
	            $.ajax({
				        type:"post",                // method = "POST"
				        url:"https://localhost:3000/emos.json",        // POST送信先のURL
				        data:JSON.stringify(data),  // JSONデータ本体
				        contentType: 'application/json', // リクエストの Content-Type
				        dataType: "json",           // レスポンスをJSONとしてパースする
				        success: function(response){
				        	status = response['emo'];
				        	url = response['url'];
				        },
				        error: function() {         // HTTPエラー時
				        },
				        complete: function() {      // 成功・失敗に関わらず通信が終了した際の処理
				            if (status == 1) {
	           						elm.innerHTML = raw + '<a href="' + url.replace( /.json/g , "") + '" class="atemo-positive">' + '　' +'</a>';
				           	} else {
				           			elm.innerHTML = raw + '<a href="' + url.replace( /.json/g , "") + '" class="atemo-negative">' + '　' +'</a>';
				           	}
				   					complete.push(raw);
				        }
	   				 	});
          	}
        });
    });
