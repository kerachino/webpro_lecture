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
    /*humberger calom調整*/if (el.matches('.reload')) {
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

$('header').delay(500).queue(function(){
$(function () {
  speak_font_delete();
  jQdm_flexGrid();
  when_check();
  lung_change();
});
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
			columnWidth: 1,	// 整列用基本カラム幅（ピクセル）        //要調整小さくすると重くなる
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
