/*sub
function readAloud(num) {
	// テキストを取得
	var text = document.getElementsByClassName("contry")[num].innerHTML
  // ブラウザにWeb Speech API Speech Synthesis機能があるか判定
  if ('speechSynthesis' in window) {
    // 発言を設定
    const uttr = new SpeechSynthesisUtterance()
		uttr.lang = 'en-US';
		uttr.pitch = '1.0';
    uttr.text = text
    // 発言を再生
    window.speechSynthesis.speak(uttr)

  } else {
    alert('ごめんね～。このブラウザには対応していないみたい♪')
  }
}*/

/*sub2
document.addEventListener('DOMContentLoaded',function(){
    var btns = document.querySelectorAll('.word_btn');
    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener('click',function(){
					// テキストを取得
					var text = this.innerHTML
					// ブラウザにWeb Speech API Speech Synthesis機能があるか判定
					if ('speechSynthesis' in window) {
						// 発言を設定
						const uttr = new SpeechSynthesisUtterance()
						uttr.lang = 'en-US';
						uttr.pitch = '1.0';
						uttr.text = text
						// 発言を再生
						window.speechSynthesis.speak(uttr)

					} else {
						alert('ごめんね～。このブラウザには対応していないみたい♪')
					}
        },false);
    }
},false);
*/

/*    voice*/
document.addEventListener('click', function (ev) {
    var el = ev.target;
    if (el.matches('.word_btn')) {
			// テキストを取得
			var text = el.innerHTML
			// ブラウザにWeb Speech API Speech Synthesis機能があるか判定
			if ('speechSynthesis' in window) {
				// 発言を設定
				const uttr = new SpeechSynthesisUtterance()
				uttr.lang = 'en-US';
				uttr.pitch = '1.0';
				uttr.text = text
				// 発言を再生
				window.speechSynthesis.speak(uttr)

			} else {
				alert('ごめんね～。このブラウザには対応していないみたい♪')
			}
    }/*humberger calom調整*/if (el.matches('.reload')) {
			jQdm_flexGrid();
		}/*voice button in the box*/if (el.matches('#speak_btn')) {
			// テキストを取得
			var text = document.getElementById('one_q').value;
			// ブラウザにWeb Speech API Speech Synthesis機能があるか判定
			if ('speechSynthesis' in window) {
				// 発言を設定
				const uttr = new SpeechSynthesisUtterance()
				uttr.lang = 'en-US';
				uttr.pitch = '1.0';
				uttr.text = text
				// 発言を再生
				window.speechSynthesis.speak(uttr)

			} else {
				alert('ごめんね～。このブラウザには対応していないみたい♪')
			}
    }
}, false);

$(function () {
    jQdm_flexGrid();
    when_check();
});

/*    available change size at inner box*/
jQdm_flexGrid = function(){
	// 初期設定
	var param = {
		masonryTargetContainer: $('#photoGalleryContainer'),
		itemSelector: '.column',
		loaderSymbolSelector: '.loaderSymbol' // ローダー用のCSSセレクタ
	};
	// タイル上にレイアウトする複数要素を格納した、
	// masonryプラグインを適用するコンテナ要素
	// 扱いやすいように初期設定の変数から$containerに代入
	var　$container = param.masonryTargetContainer;
	// masonryの基本設定を引数として、関数に渡し実行する
	$container.masonry({
			columnWidth: 270,	// 整列用基本カラム幅（ピクセル）
		  itemSelector: param.itemSelector	// カラムのCSSセレクタ
	});
	// ロード中に表示するアニメーション画像の処理
	var LoaderSymbol = {
		init: function(){
			var _sel = param.loaderSymbolSelector;
			if( $(_sel).length == 0 ) {
				$('<div>').prependTo('body').addClass(replaceString(_sel, '\\.')).hide().fadeIn();
			}
		},
		destroy: function(){
			$(param.loaderSymbolSelector).fadeOut(0,
				function(){
					$(this).remove();
					revealItems();
				});
		}
	};
	// 画像を全て読み込んだ後にmasonryを実行する
	LoaderSymbol.init();
	$container.imagesLoaded().done(function(){
		// 画像読み込み完了
		LoaderSymbol.destroy();
	});
	// 読み込んだ画像を表示する
	function revealItems(){
		var _elmes, _items;
		_elems = $container.masonry('getItemElements'),
		_items = $container.masonry( 'getItems', _elems );

		$container.children().css({
			visibility: 'visible'
			});
		/*$container.fadeIn().masonry('reveal', _items).masonry();*/
	}
	// 文字列置換処理
  function replaceString(_str, _bf, _af, _flg){
    var _reg = new RegExp(_bf, _flg || '');
    return _str.replace(_reg, _af || '');
  }
}
jQdm_flexGrid();


/*    en test*/
/*要素追加func*/
function pushTwoDimensionalArray(array1, array2, axis){
  if(axis != 1) axis = 0;
  if(axis == 0){  //　縦方向の追加
    for(var i = 0; i < array2.length; i++){
      array1.push(array2[i]);
    }
  }
  else{  //　横方向の追加
    for(var i = 0; i < array1.length; i++){
      Array.prototype.push.apply(array1[i], array2[i]);
    }
  }
}

var words = [[''],['']];
/*    要素追加*/
var i = 0;
  while(document.getElementsByClassName('word_btn')[i].innerHTML != ''){
    buffer_array1 = document.getElementsByClassName('word_btn')[i].innerHTML;
    buffer_array2 = document.getElementsByClassName('word_jp')[i].innerHTML;
    add_word = [[buffer_array1], [buffer_array2]];

    pushTwoDimensionalArray(words, add_word, 1);
    i++;
  }

  var array = [words[0].length];
  for(var i = 0; i<words[0].length; i++){
    array[i] = i;
  }
  for (var i = array.length - 1; i >= 0; i--){
  	var rand = Math.floor( Math.random() * ( i + 1 ) );
  	[array[i], array[rand]] = [array[rand], array[i]]
  }

  var q_counter = -1;
  var qa_flag = false;
  var qa_lang = false;
  var q_lang = 0;
  var a_lang = 1;

  window.onload = function () {
  	counter_view();
  };

  function switch_jn(){
  	if ( q_counter < 0 ) { return false; }
  	if ( qa_lang ) {
  		document.getElementById('jn_q').value = '英語：';
  		document.getElementById('jn_a').value = '日本語：';
  		q_lang = "0";
  		a_lang = "1";
  	} else {
  		document.getElementById('jn_q').value = '日本語：';
  		document.getElementById('jn_a').value = '英語：';
  		q_lang = "1";
  		a_lang = "0";
  	}
  	qa_lang = !(qa_lang);
  	qa_view();
  }

  function prev_btn(){
  	if (!(qa_flag)) { q_counter--; }
  	if ( q_counter < 0 ) { q_counter = words[0].length - 1; }
  	qa_flag = !(qa_flag);
  	counter_view();
  	qa_view();
  }

  function next_btn(){
  	if ( !(qa_flag) ) { q_counter++; }
  	if ( q_counter >= words[0].length ) { q_counter = 0; }
  	qa_flag = !(qa_flag);
  	counter_view();
  	qa_view();
  }

  function qa_view(){
  	document.getElementById('one_q').value = words[q_lang][array[q_counter]];
  	if ( qa_flag ) {
  		document.getElementById('one_a').value = '';
  	} else {
  		document.getElementById('one_a').value = words[a_lang][array[q_counter]];
  	}
  }

  function counter_view(){
  	document.getElementById('q_cnt').value = q_counter + 1 + '/' + words[0].length;
  }

/*when check*/
document.addEventListener('change', function (ev) {
    var el = ev.target;
    if (el.matches('.confirm_btn')) {
      when_check();
		}
}, false);

when_check();
function when_check(){
  var i=0;
  while(i < document.querySelectorAll('.confirm_btn[type="checkbox"]').length){
    if(document.querySelectorAll('.confirm_btn')[i].checked){
       document.querySelectorAll('.acbox_switch')[i].style.cssText = 'background:#669036;';
     }else{
       document.querySelectorAll('.acbox_switch')[i].style.cssText = '';
     }
     i++;
   }
}
