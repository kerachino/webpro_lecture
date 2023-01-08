//timerID
function sekaiTokei()
{
  setInterval("timeSet()",1000);
}

function timeSet()
{

  //optionタグのvalue値に設定した時差を取得する
  var num = document.wrdClock.city.selectedIndex;
  var jisa = parseInt(document.wrdClock.city.options[num].value);

  //アクセスしたPCの日付データを求め数値にする
  var here= (new Date()).getTime();

  //グリニッジ標準時を求める
  var gmt = here + (new Date()).getTimezoneOffset()*60*1000;

  //時差を加減して、日付データに戻す
  var jikan=new Date(gmt+jisa*60*60*1000);

  //日付と時刻を求める
  var year = jikan.getFullYear();
  var month= jikan.getMonth()+1;
  var day  = jikan.getDate();
  var hour = jikan.getHours();
  var minu = jikan.getMinutes();
  var sec  = jikan.getSeconds();

  //時間表示の修正（10未満は前に0を付ける）
  if (hour < 10) hour="0"+hour;
  if (minu < 10) minu="0"+minu;
  if (sec  < 10) sec ="0"+sec;

  //日付と時刻を表示する
  var wDate = month+"/"+day+"/"+year;
  var wTime = hour+":"+minu+":"+sec;
  document.wrdClock.wrdTime.value = wDate+" "+wTime;

}


/**/
var $section = $('.js-section'); // 各スライド
var $pager = $('#js-pager'); // ページャー枠

// scrollifyのオプション設定
var option = {
  section : '.js-section',
  easing: "swing",
  scrollSpeed: 600,
  scrollbars: true,
  before:function(index) {
    pagerCurrent(index); // ページャーに対応する順番にクラス名を付与
  },
  afterRender:function() {
    createPager(); // ページャーの作成
  }
};

$(function() {
  $.scrollify(option); // scrollifyの実行
});




// ページャーに対応する順番にクラス名を付与
function pagerCurrent(index = 0) {
  var $li = $pager.find('li');
  $li.removeClass('is-current');
  $li.eq(index).addClass('is-current');
}

// ページャーの作成
function createPager() {
  $section.each(function(i, e){
    // ページ内リンク先の作成
    var sectionName = $(e).attr('data-section-name');
    // 最初のliにはクラスを付与
    var addClass = '';
    if (i === 0) {
        addClass = 'is-current';
    }
    // liのHTML作成
    var html = '';
    html += '<li class="' + addClass + '">';
    html += '<a href="#' + sectionName + '"></a>';
    html += '</li>';
    $pager.append(html);
  });

  pagerLink();
}

// ページャーでaタグをクリックされたらスクロールする
function pagerLink () {
  $pager.find('a').on('click', function() {
    $.scrollify.move($(this).attr("href"));
  });
}


/*humberger close*/
function humChecked() {
  var target = document.getElementsByClassName('outer_menu')[0];
  if(checkbox_toggle.checked) {
    target.style.cssText = 'animation: outer_menu_anim 1s forwards;';
    /*target.style.top = '33%';
    target.style.right = '30%';*/
  }else{
    target.style.cssText = 'animation: outer_menu_anim_end 1s forwards;';
    /*target.style.top = '';
    target.style.right = '';*/
  }
  /*jquery
  var $target = $('.outer_menu');
  $target.css('top','10%');*/
}
function humaChecked(){
  var target = document.getElementsByClassName('outer_menu')[0];
  target.style.cssText = 'animation: outer_menu_anim_end 1s forwards;';
  document.getElementById('checkbox_toggle').checked = false;/*checkbox_toggle無効*/
}
function hum_scloll_Checked(){
  var target = document.getElementsByClassName('outer_menu')[0];
  if(checkbox_toggle.checked) {
    target.style.cssText = 'animation: outer_menu_anim_end 1s forwards;';
    document.getElementById('checkbox_toggle').checked = false;/*checkbox_toggle無効*/
  }
}

//スムーズにスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


//一括移動
function nextPage(){
　　　pwd=document.form1.pass.value;
　　　location.href=pwd+".html";
　　}
//open
jQuery(function($){
  $('.hid_box').hide();
  $('.card_title').click(function () {
    //$(this).next('.hid_box').slideToggle();
    $(this).next('.hid_box').stop(true).animate( { width: 'toggle' }, 'slow' );
    //jQuery('.hid_box').stop(true).animate( { width: 'toggle' }, 'slow' );
    $(this).toggleClass('open');
  });
});


/*wtscript.js
$(function(){
  $('.text').delay(100).queue(function(){
    del_char_checked();
    del_bottom_boxes_checked();
    change_word_box_checked();
  });
});*/
document.addEventListener('change', function (ev) {
  var el = ev.target;
  if (el.matches('.del_char')) {
    del_char_checked();
  }if (el.matches('.del_bottom_boxes')) {
    del_bottom_boxes_checked();
  }if (el.matches('.change_word_box')) {
    change_word_box_checked();
  }
}, false);

/*app*/
function del_char_checked() {
  var target = document.getElementsByClassName('del_char')[0];
  var target2 = document.getElementsByClassName('char_img')[0];
  var target3 = document.getElementsByClassName('char_talk_box')[0];
  var target4 = document.getElementById('app_boxes');
  if(target.checked) {
    target2.style.cssText = 'display:none;';
    target3.style.cssText = 'display:none;';
    target4.style.cssText = 'width:100%;';
  }else{
    target2.style.cssText = '';
    target3.style.cssText = '';
    target4.style.cssText = '';
  }
}

function del_bottom_boxes_checked() {
  var target = document.getElementsByClassName('del_bottom_boxes')[0];
  var target2 = document.getElementById('san_boxes');
  var target3 = document.getElementsByClassName('loop_wrap')[0];
  if(target.checked) {
    target2.style.cssText = '';
    target3.style.cssText = '';
  }else{
    target2.style.cssText = 'display:none;';
    target3.style.cssText = 'top:160px;';
  }
}

function change_word_box_checked() {
  var target = document.getElementsByClassName('change_word_box')[0];
  var target2 = document.getElementById('word_input1');
  var target3 = document.getElementById('word_input2');
  if(target.checked) {
    target2.style.cssText = 'display:none;';
    target3.style.cssText = '';
  }else{
    target2.style.cssText = '';
    target3.style.cssText = 'display:none;';
  }
}





/*change_background_img*/
function OutputImage(target){
    // 2. ファイル読み込みクラス
    var reader = new FileReader();

    // 3. 読み込みクラスの準備が終わった後、画像の情報を設定
    reader.onload = function () {
        $sample2 = $("#background_img");

        // 4. Imageクラスを使ってdiv要素に画像のheightとwidthのサイズを設定
        img = new Image();
        img.src = this.result;
        img.onload = function() {
            $sample2.css("width", img.naturalWidth);
            $sample2.css("height", img.naturalHeight);
        }
        // 5. backgroundスタイルを設定
        $sample2.css("background", "url(" + this.result + ") center center / contain no-repeat");
    }
    // 6. 読み込んだ画像ファイルをURLに変換
    reader.readAsDataURL(target.files[0]);
}

window.onload = function() {
  const spinner = document.getElementById('loading');

  // Add .loaded to .loading
  spinner.classList.add('loaded');

  if(document.getElementById('education_mode_boxes').checked){
    education_mode_show();
  }
}
