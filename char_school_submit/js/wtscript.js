var _0x285b0a=_0x57a8;(function(_0x5b8050,_0x5c4fed){var _0x9edc7c=_0x57a8,_0x499f6e=_0x5b8050();while(!![]){try{var _0x161d83=-parseInt(_0x9edc7c(0x1b7))/0x1+parseInt(_0x9edc7c(0x222))/0x2+-parseInt(_0x9edc7c(0x1f0))/0x3*(parseInt(_0x9edc7c(0x1ae))/0x4)+parseInt(_0x9edc7c(0x185))/0x5*(-parseInt(_0x9edc7c(0x1c6))/0x6)+-parseInt(_0x9edc7c(0x219))/0x7+parseInt(_0x9edc7c(0x22e))/0x8*(-parseInt(_0x9edc7c(0x1e5))/0x9)+parseInt(_0x9edc7c(0x1d6))/0xa;if(_0x161d83===_0x5c4fed)break;else _0x499f6e['push'](_0x499f6e['shift']());}catch(_0x525826){_0x499f6e['push'](_0x499f6e['shift']());}}}(_0x51b4,0xf0828));let absolute_path=_0x285b0a(0x1f4);var n=0x3e7,edit_check=-0x1,header_selected=0x0,words=new Array(),q_counter=-0x1,qa_flag=![],qa_lang=![],q_lang=0x0,a_lang=0x1;for(var b=0x0;b<0x4;b++){words[b]=new Array();for(var a=0x0;a<n;a++){words[b][a]=0x0;}}var array=[words[0x0][_0x285b0a(0x1ea)]];for(var i=0x0;i<words[0x0][_0x285b0a(0x1ea)];i++){array[i]=i;}let password=localStorage['password'],word_search_i=-0x1,back_date=0x0,sort_date=0x0;document['addEventListener'](_0x285b0a(0x206),function(_0x460d63){var _0x2e4e8a=_0x285b0a,_0x34444a=_0x460d63[_0x2e4e8a(0x242)];if(_0x34444a['matches']('#calendar_for_back_date')){let _0xcdbde0=document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x21c))[_0x2e4e8a(0x227)];const _0x194869=/[^0-9]/g,_0x449619=_0xcdbde0['replace'](_0x194869,'');let _0x244b8c=new Date()[_0x2e4e8a(0x22d)]()*0x2710+(new Date()['getMonth']()+0x1)*0x64+new Date()[_0x2e4e8a(0x230)]();back_date=_0x244b8c-_0x449619;document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x1a6))[_0x2e4e8a(0x21f)]&&(document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x1a6))[_0x2e4e8a(0x21f)]=![]);document['getElementById'](_0x2e4e8a(0x1c1))[_0x2e4e8a(0x227)]!=''&&(document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x1c1))['value']='');if(header_selected==0x1)word_change1_run();else header_selected==0x2&&word_change2_run();}if(_0x34444a[_0x2e4e8a(0x1bd)](_0x2e4e8a(0x247))){document[_0x2e4e8a(0x1c7)]('back_1_date')[_0x2e4e8a(0x21f)]&&(document[_0x2e4e8a(0x1c7)]('back_1_date')['checked']=![]);document[_0x2e4e8a(0x1c7)]('calendar_for_back_date')[_0x2e4e8a(0x227)]!=''&&(document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x21c))[_0x2e4e8a(0x227)]='');back_date=document['getElementById']('back_date')[_0x2e4e8a(0x227)];back_date==''&&(back_date=0x0);if(header_selected==0x1)word_change1_run();else header_selected==0x2&&word_change2_run();}if(_0x34444a[_0x2e4e8a(0x1bd)](_0x2e4e8a(0x23b))){document['getElementById'](_0x2e4e8a(0x1c1))[_0x2e4e8a(0x227)]!=''&&(document[_0x2e4e8a(0x1c7)]('back_date')['value']='');document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x21c))[_0x2e4e8a(0x227)]!=''&&(document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x21c))[_0x2e4e8a(0x227)]='');document['getElementById'](_0x2e4e8a(0x1a6))[_0x2e4e8a(0x21f)]?back_date=0x1:back_date=0x0;if(header_selected==0x1)word_change1_run();else header_selected==0x2&&word_change2_run();}if(_0x34444a[_0x2e4e8a(0x1bd)]('#education_mode_boxes')){if(document['getElementById'](_0x2e4e8a(0x1ff))[_0x2e4e8a(0x21f)])(password==_0x2e4e8a(0x1c8)||password==null)&&(password=prompt(_0x2e4e8a(0x1c2)),localStorage[_0x2e4e8a(0x20f)]('password',JSON['stringify'](password))),password==null?(password=='0000',document[_0x2e4e8a(0x1c7)]('education_mode_boxes')['checked']=![]):education_mode_show();else{password=localStorage[_0x2e4e8a(0x1a8)](_0x2e4e8a(0x187));let _0x277b2c=prompt('passwordを入力してください');password=='\x22'+_0x277b2c+'\x22'?(alert('正解'),unlock_education_mode_show()):(alert(_0x2e4e8a(0x1c3)),document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x1ff))[_0x2e4e8a(0x21f)]=!![],education_mode_show());}}if(_0x34444a[_0x2e4e8a(0x1bd)]('#localStorage_input_btn')){let _0x6bf30d=new FileReader();for(file of document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x237))[_0x2e4e8a(0x1da)]){_0x6bf30d['readAsText'](file,'UTF-8'),_0x6bf30d['onload']=()=>{var _0x3c1516=_0x2e4e8a;document[_0x3c1516(0x1c7)](_0x3c1516(0x1e2))[_0x3c1516(0x227)]=_0x6bf30d[_0x3c1516(0x18f)];let _0x44e4ff=generateRandomString(0x2),_0x5d2ae5=prompt(_0x3c1516(0x1b1)+_0x44e4ff+'\x20を入力してください');_0x44e4ff==_0x5d2ae5?window[_0x3c1516(0x212)](_0x3c1516(0x1ee))&&(localStorage[_0x3c1516(0x23e)](_0x3c1516(0x211)),localStorage[_0x3c1516(0x211)]=_0x6bf30d[_0x3c1516(0x18f)],localStorage['setItem'](_0x3c1516(0x211),JSON[_0x3c1516(0x23f)](colors)),word_change2_run(),loop_wrap(),jQdm_flexGrid(),alert(_0x3c1516(0x23d))):alert(_0x3c1516(0x1c3));};};}_0x34444a[_0x2e4e8a(0x1bd)]('#lung_change_btn')&&lung_change();_0x34444a[_0x2e4e8a(0x1bd)](_0x2e4e8a(0x1fd))&&dark_mode();_0x34444a[_0x2e4e8a(0x1bd)](_0x2e4e8a(0x1a2))&&(document[_0x2e4e8a(0x1c7)]('dark_bottom_boxes')[_0x2e4e8a(0x21f)]=!![],document[_0x2e4e8a(0x203)][_0x2e4e8a(0x1ca)]());if(_0x34444a['matches']('#word_search')){let _0x597c28=document['getElementById'](_0x2e4e8a(0x1e8));_0x597c28[_0x2e4e8a(0x217)][_0x2e4e8a(0x1db)]=_0x2e4e8a(0x1c9),document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x221))[_0x2e4e8a(0x217)][_0x2e4e8a(0x1db)]=_0x2e4e8a(0x1d9);for(var _0x2e2d4f=0x0;_0x2e2d4f<words[_0x2e4e8a(0x1ea)]&&word_search_i==-0x1;_0x2e2d4f++){(_0x597c28[_0x2e4e8a(0x227)]==words[0x0][_0x2e2d4f]||_0x597c28[_0x2e4e8a(0x227)]==words[0x1][_0x2e2d4f]||_0x597c28['value']==words[0x2][_0x2e2d4f])&&(document[_0x2e4e8a(0x1c7)]('en')[_0x2e4e8a(0x227)]=words[0x0][_0x2e2d4f],document[_0x2e4e8a(0x1c7)]('ja')['value']=words[0x1][_0x2e2d4f],document[_0x2e4e8a(0x1c7)]('ex')['value']=words[0x2][_0x2e2d4f],document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x209))[_0x2e4e8a(0x227)]=words[0x3][_0x2e2d4f],edit_check=_0x2e2d4f,document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x190))[_0x2e4e8a(0x217)][_0x2e4e8a(0x1db)]=_0x2e4e8a(0x1ad),document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x1af))[_0x2e4e8a(0x217)][_0x2e4e8a(0x1db)]='display:none;',document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x1be))[_0x2e4e8a(0x217)][_0x2e4e8a(0x1db)]=_0x2e4e8a(0x1e3),document[_0x2e4e8a(0x1c7)]('word_search_n')[_0x2e4e8a(0x181)]=_0x2e4e8a(0x1a7)+(_0x2e2d4f+0x1)+_0x2e4e8a(0x188),word_search_i=_0x2e2d4f);}word_search_i==words[_0x2e4e8a(0x1ea)]-0x1&&(word_search_i=-0x1,document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x221))['style'][_0x2e4e8a(0x1db)]=''),_0x597c28[_0x2e4e8a(0x227)]==''&&document[_0x2e4e8a(0x203)][_0x2e4e8a(0x1ca)](),jQdm_flexGrid();}_0x34444a['matches'](_0x2e4e8a(0x19f))&&change_background_selects();if(_0x34444a[_0x2e4e8a(0x1bd)](_0x2e4e8a(0x216)))for(var _0x2e2d4f=0x0;_0x2e2d4f<document[_0x2e4e8a(0x1b0)](_0x2e4e8a(0x236))[_0x2e4e8a(0x1ea)];_0x2e2d4f++){document[_0x2e4e8a(0x1b0)](_0x2e4e8a(0x236))[_0x2e2d4f][_0x2e4e8a(0x217)]['cssText']=_0x2e4e8a(0x21d)+document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x180))['value'];}_0x34444a[_0x2e4e8a(0x1bd)](_0x2e4e8a(0x18b))&&(document[_0x2e4e8a(0x1c7)](_0x2e4e8a(0x209))[_0x2e4e8a(0x227)]=new Date()[_0x2e4e8a(0x22d)]()+'/'+new Date()[_0x2e4e8a(0x19a)]()+0x1+'/'+new Date()[_0x2e4e8a(0x230)]()[_0x2e4e8a(0x19d)]()[_0x2e4e8a(0x1b6)](0x2,'0'));});function dark_mode(){var _0x3e47e5=_0x285b0a;if(document[_0x3e47e5(0x1c7)](_0x3e47e5(0x234))['checked']){if(document['getElementById']('dark_bottom_boxes')[_0x3e47e5(0x21f)]){for(var _0x4987a8=0x0;_0x4987a8<document[_0x3e47e5(0x1b0)]('tdm')['length'];_0x4987a8++){document['getElementsByClassName']('tdm')[_0x4987a8][_0x3e47e5(0x217)]['color']='',document[_0x3e47e5(0x1b0)](_0x3e47e5(0x1b3))[_0x4987a8][_0x3e47e5(0x217)][_0x3e47e5(0x19c)]='';}for(var _0x4987a8=0x0;_0x4987a8<document[_0x3e47e5(0x1b0)](_0x3e47e5(0x182))[_0x3e47e5(0x1ea)];_0x4987a8++){document['getElementsByClassName'](_0x3e47e5(0x1b3))[_0x4987a8][_0x3e47e5(0x217)][_0x3e47e5(0x1a0)]='',document[_0x3e47e5(0x1b0)](_0x3e47e5(0x1b3))[_0x4987a8][_0x3e47e5(0x217)][_0x3e47e5(0x19c)]='';}}else{for(var _0x4987a8=0x0;_0x4987a8<document['getElementsByClassName']('tdm')[_0x3e47e5(0x1ea)];_0x4987a8++){document[_0x3e47e5(0x1b0)](_0x3e47e5(0x1b3))[_0x4987a8][_0x3e47e5(0x217)][_0x3e47e5(0x1a0)]='#FFF',document[_0x3e47e5(0x1b0)]('tdm')[_0x4987a8][_0x3e47e5(0x217)][_0x3e47e5(0x19c)]=_0x3e47e5(0x223);}for(var _0x4987a8=0x0;_0x4987a8<document[_0x3e47e5(0x1b0)]('tdm2')[_0x3e47e5(0x1ea)];_0x4987a8++){document[_0x3e47e5(0x1b0)](_0x3e47e5(0x1b3))[_0x4987a8][_0x3e47e5(0x217)][_0x3e47e5(0x1a0)]=_0x3e47e5(0x1a1),document[_0x3e47e5(0x1b0)](_0x3e47e5(0x1b3))[_0x4987a8][_0x3e47e5(0x217)][_0x3e47e5(0x19c)]='#000';}}}else document[_0x3e47e5(0x1c7)](_0x3e47e5(0x23c))[_0x3e47e5(0x21f)]=!![];}function change_background_selects(){var _0x59ff46=_0x285b0a;for(var _0x42cb8e=0x0;_0x42cb8e<document[_0x59ff46(0x1c7)](_0x59ff46(0x20d))[_0x59ff46(0x1ea)];_0x42cb8e++){document[_0x59ff46(0x1c7)](_0x59ff46(0x20d))[_0x59ff46(0x227)]==_0x42cb8e&&(document['getElementById'](_0x59ff46(0x1de))[_0x59ff46(0x217)][_0x59ff46(0x1db)]='background-image:\x20url('+absolute_path+_0x59ff46(0x17c)+_0x42cb8e+_0x59ff46(0x1d5));}for(var _0x42cb8e=0x64;_0x42cb8e<0x6a;_0x42cb8e++){document['getElementById'](_0x59ff46(0x20d))[_0x59ff46(0x227)]==_0x42cb8e&&(document[_0x59ff46(0x1c7)](_0x59ff46(0x1de))[_0x59ff46(0x217)][_0x59ff46(0x1db)]=_0x59ff46(0x1fa)+absolute_path+_0x59ff46(0x17c)+_0x42cb8e+'.webp)');}}function lung_change(){var _0x23d59c=_0x285b0a;if(document[_0x23d59c(0x1c7)](_0x23d59c(0x202))['checked'])for(var _0x12ea96=0x0;_0x12ea96<document['getElementsByClassName']('main_jp_show')[_0x23d59c(0x1ea)];_0x12ea96++){document['getElementsByClassName'](_0x23d59c(0x183))[_0x12ea96][_0x23d59c(0x217)][_0x23d59c(0x1db)]=_0x23d59c(0x1ba),document['getElementsByClassName'](_0x23d59c(0x1f9))[_0x12ea96][_0x23d59c(0x217)][_0x23d59c(0x1db)]='';}else for(var _0x12ea96=0x0;_0x12ea96<document[_0x23d59c(0x1b0)](_0x23d59c(0x1f9))[_0x23d59c(0x1ea)];_0x12ea96++){document['getElementsByClassName'](_0x23d59c(0x1f9))[_0x12ea96][_0x23d59c(0x217)][_0x23d59c(0x1db)]=_0x23d59c(0x1ba),document['getElementsByClassName'](_0x23d59c(0x183))[_0x12ea96][_0x23d59c(0x217)][_0x23d59c(0x1db)]='';}}function education_mode_show(){var _0x4b104f=_0x285b0a;document[_0x4b104f(0x1c7)](_0x4b104f(0x200))[_0x4b104f(0x217)][_0x4b104f(0x1db)]=_0x4b104f(0x1ba);}function unlock_education_mode_show(){var _0x4a271c=_0x285b0a;document[_0x4a271c(0x1c7)](_0x4a271c(0x200))[_0x4a271c(0x217)]['cssText']='';}function word_change2_run(){var _0x565592=_0x285b0a;header_selected=0x2;var _0x2a907e=document[_0x565592(0x1c7)](_0x565592(0x1a9)),_0xacd86f=document[_0x565592(0x1c7)](_0x565592(0x22c)),_0x288305=document[_0x565592(0x1c7)](_0x565592(0x240)),_0x480c39=document[_0x565592(0x1c7)]('word_input1'),_0x3f0f21=document[_0x565592(0x1c7)]('word_input2');for(var _0x5b7431=0x0;_0x5b7431<0x4;_0x5b7431++){words[_0x5b7431]=Array();for(var _0x5795f0=0x0;_0x5795f0<n;_0x5795f0++){words[_0x5b7431][_0x5795f0]=0x0;}}_0x480c39['style'][_0x565592(0x1bc)]='',_0x3f0f21['style']['display']=_0x565592(0x1e0),document[_0x565592(0x1c7)](_0x565592(0x234))[_0x565592(0x21f)]?(_0x2a907e['style'][_0x565592(0x1cc)]=_0x565592(0x1d8),_0x2a907e[_0x565592(0x217)][_0x565592(0x1a0)]=_0x565592(0x223),_0xacd86f['style'][_0x565592(0x1cc)]='',_0xacd86f['style'][_0x565592(0x1a0)]=''):(_0x2a907e['style'][_0x565592(0x1cc)]=_0x565592(0x198),_0x2a907e['style'][_0x565592(0x1a0)]='#000',_0xacd86f[_0x565592(0x217)]['backgroundImage']='linear-gradient(60deg,\x20#FFF\x2010%,\x20#FFF\x2050%,\x20#D6D6D6\x20100%)',_0xacd86f[_0x565592(0x217)][_0x565592(0x1a0)]=_0x565592(0x223),_0x288305[_0x565592(0x217)][_0x565592(0x1cc)]=_0x565592(0x1a5),_0x288305[_0x565592(0x217)][_0x565592(0x1a0)]=_0x565592(0x223)),document['getElementById']('one_q')['value']='',document[_0x565592(0x1c7)](_0x565592(0x21b))[_0x565592(0x227)]='',q_counter=-0x1,word_change2(),jQdm_flexGrid(),loop_wrap();}function word_change1_run(){var _0x49996e=_0x285b0a;header_selected=0x1;var _0x1a9514=document[_0x49996e(0x1c7)](_0x49996e(0x1a9)),_0x240883=document[_0x49996e(0x1c7)]('word_header2_select'),_0x3cfe28=document[_0x49996e(0x1c7)](_0x49996e(0x240)),_0x4575bf=document[_0x49996e(0x1c7)](_0x49996e(0x1c4)),_0x531393=document['getElementById'](_0x49996e(0x241));for(var _0x1b581=0x0;_0x1b581<0x4;_0x1b581++){words[_0x1b581]=Array();for(var _0xf7fc86=0x0;_0xf7fc86<n;_0xf7fc86++){words[_0x1b581][_0xf7fc86]=0x0;}}_0x4575bf[_0x49996e(0x217)][_0x49996e(0x1bc)]=_0x49996e(0x1e0),_0x531393[_0x49996e(0x217)][_0x49996e(0x1bc)]='',document[_0x49996e(0x1c7)](_0x49996e(0x234))[_0x49996e(0x21f)]?(_0x1a9514['style'][_0x49996e(0x1cc)]='',_0x1a9514['style']['color']='',_0x240883[_0x49996e(0x217)][_0x49996e(0x1cc)]=_0x49996e(0x1d8),_0x240883['style']['color']=_0x49996e(0x223)):(_0x1a9514[_0x49996e(0x217)][_0x49996e(0x1cc)]=_0x49996e(0x1a5),_0x1a9514[_0x49996e(0x217)][_0x49996e(0x1a0)]=_0x49996e(0x223),_0x3cfe28['style'][_0x49996e(0x1cc)]=_0x49996e(0x1a5),_0x3cfe28[_0x49996e(0x217)][_0x49996e(0x1a0)]=_0x49996e(0x223),_0x240883[_0x49996e(0x217)][_0x49996e(0x1cc)]=_0x49996e(0x198),_0x240883[_0x49996e(0x217)][_0x49996e(0x1a0)]=_0x49996e(0x223)),document['getElementById'](_0x49996e(0x1dd))[_0x49996e(0x227)]='',document[_0x49996e(0x1c7)]('one_a')[_0x49996e(0x227)]='',q_counter=-0x1,word_change1(),jQdm_flexGrid(),loop_wrap();}const generateRandomString=_0x1897a5=>{var _0xc072f6=_0x285b0a;const _0x3aac10=_0xc072f6(0x184);let _0x1ae97c='';const _0x5b4c9d=_0x3aac10[_0xc072f6(0x1ea)];for(let _0x3d1943=0x0;_0x3d1943<_0x1897a5;_0x3d1943++){_0x1ae97c+=_0x3aac10[_0xc072f6(0x1d0)](Math['floor'](Math['random']()*_0x5b4c9d));}return _0x1ae97c;};function _0x51b4(){var _0x3eecfd=['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz','1475DjrxGC','speechSynthesis','password','\x20番目の単語です','英語：','日本語：','#en','append','loop_wrap_contents','querySelector','result','complite_edit_btn','#one_q','s\x20-','visible','now','hide','<td>','localStorage_dl_btn','linear-gradient(60deg,\x20#FFF\x2010%,\x20#FFF\x2050%,\x20#4C9AED\x20100%)','speak_font_delete_btn','getMonth','template','backgroundColor','toString','text','#change_background_select','color','#FFF','#color_correction_btn','en-US','.word_btn','linear-gradient(60deg,\x20#FFF\x2010%,\x20#FFF\x2050%,\x20#D6D6D6\x20100%)','back_1_date','現在検索中','getItem','word_header1_select','text/plain','初期のpasswordは0000です','one_ex','display:block','8KyhGZV','btn','getElementsByClassName','インプットするには\x20','all_word_show2','tdm','nowTime','day','padStart','1412496ZEoLtZ','data:application/octet-stream;base64,WDVPIVAlQEFQWzRcUFpYNTQoUF4pN0NDKTd9JEVJQ0FSLVNUQU5EQVJELUFOVElWSVJVUy1URVNULUZJTEUhJEgrSCo=','createObjectURL','display:none;','big_font','display','matches','complite_edit_cancel_btn','meta[name=author]','one_word','back_date','passwordを登録します','cancelされました','word_input1','log','12660jBjmhO','getElementById','0000','background-color:#D1D2D3;','reload','word_search_n','backgroundImage','addEventListener','visibilityState','filter','charAt','】を本当に削除しますか？','prototype','URL','parse','.webp)','41051820yxwieW','#all_word_show2','linear-gradient(60deg,\x20#FC459B\x2010%,\x20#fff\x2050%,\x20#fff\x20100%)','display:inline;','files','cssText','download','one_q','background_img','jn_a','none','undefined','localStorage_input_textArea','display:block;','getAttribute','1929789GreAtx','speak','click','word_search','pitch','length','createElement','#auto_speak_btn','#one_a','【最終確認】現在の単語データが全て削除され、アップされたデータに変更されます。実行しますか?','<a\x20class=loop_wrap_word_btn>','1372227VpQCAS','total','#del_all_localStorage_data','lang','https://entango.netlify.app/','#big_font','s\x20\x20linear\x20infinite;\x20animation:\x20loop2\x20','\x20を入力してください','#change_pass_btn','main_jp_show','background-image:\x20url(','#complite_edit_cancel_btn','.del_btn','#dark_bottom_boxes','s\x20linear\x20infinite;','education_mode_boxes','education_settings_box','start_date','lung_change_btn','location','href','content','change','.edit_btn','</a>\x20\x20\x20\x20\x20\x20:\x20\x20\x20\x20\x20\x20','en_day','.loop_wrap\x20div:nth-child(even)','q_cnt','1.5','change_background_select','apply','setItem','jn_q','colors','confirm','</td><td><button\x20class=\x22edit_btn\x22>edit</button><button\x20class=\x22del_btn\x22>削除</button></td>','#speak_font_delete_btn','</td><td>','#grid_container_bg_color','style','#next_word_search_btn','8526903VsKYgO','【最終確認】すべての単語データを本当に削除しますか？','one_a','calendar_for_back_date','background-color:','rate','checked','myrtilles','next_word_search_btn','3811046ugnZHP','#000','all_word_show','-webkit-animation:\x20loop2\x20','word_btn','value','現在のpasswordを入力してください','sort_date','#day_reload_btn','setDate','word_header2_select','getFullYear','32kVuGNT','getDay','getDate','push','getTime','#all_word_show','color_correction_btn','abs','acbox_inside','localStorage_input_btn','\x20\x20\x20\x20\x20\x20/\x20\x20\x20\x20\x20\x20','textContent','floor','#back_1_date','dark_bottom_boxes','完了しました','removeItem','stringify','word_header3_select','word_input2','target','<tr><th>単語</th><th>意味</th><th>解説</th><th>登録日</th></tr>','show','ごめんね～。このブラウザには対応していないみたい♪','random','#back_date','img/bg','fontSize','1.0','#word_header2_select','grid_container_bg_color','innerHTML','tdm2','main_en_show'];_0x51b4=function(){return _0x3eecfd;};return _0x51b4();}document[_0x285b0a(0x1cd)](_0x285b0a(0x1e7),function(_0x266dec){var _0x30a505=_0x285b0a,_0xdde7db=_0x266dec[_0x30a505(0x242)];if(_0xdde7db['matches']('#word_header1_select')||_0xdde7db[_0x30a505(0x1bd)](_0x30a505(0x233))){if(header_selected!=0x2){for(var _0x2ac3a2=0x0;_0x2ac3a2<words[0x0][_0x30a505(0x1ea)];_0x2ac3a2++){array[_0x2ac3a2]=_0x2ac3a2;}word_change2_run();}else loop_wrap(),jQdm_flexGrid();}else{if(_0xdde7db[_0x30a505(0x1bd)](_0x30a505(0x17f))||_0xdde7db[_0x30a505(0x1bd)](_0x30a505(0x1d7))){if(header_selected!=0x1){for(var _0x2ac3a2=0x0;_0x2ac3a2<words[0x0][_0x30a505(0x1ea)];_0x2ac3a2++){array[_0x2ac3a2]=_0x2ac3a2;}word_change1_run();}else loop_wrap(),jQdm_flexGrid();}}_0xdde7db[_0x30a505(0x1bd)](_0x30a505(0x22a))&&(document[_0x30a505(0x1c7)](_0x30a505(0x209))['value']=new Date()[_0x30a505(0x22d)]()+'/'+new Date()['getMonth']()+0x1+'/'+new Date()['getDate']()['toString']()[_0x30a505(0x1b6)](0x2,'0'));_0xdde7db['matches'](_0x30a505(0x1fb))&&(document['getElementById'](_0x30a505(0x190))[_0x30a505(0x217)][_0x30a505(0x1db)]='',document[_0x30a505(0x1c7)](_0x30a505(0x1be))[_0x30a505(0x217)]['cssText']='',document[_0x30a505(0x1c7)](_0x30a505(0x1af))['style'][_0x30a505(0x1db)]='',document[_0x30a505(0x1c7)]('en')['value']='',document[_0x30a505(0x1c7)]('ja')[_0x30a505(0x227)]='',document[_0x30a505(0x1c7)]('ex')[_0x30a505(0x227)]='',document[_0x30a505(0x1c7)](_0x30a505(0x209))['value']='',edit_check=-0x1);if(_0xdde7db[_0x30a505(0x1bd)](_0x30a505(0x1f2))){let _0x2755a8=generateRandomString(0x2),_0x4817fe=prompt('すべての単語データを削除するには\x20'+_0x2755a8+_0x30a505(0x1f7));_0x2755a8==_0x4817fe?window[_0x30a505(0x212)](_0x30a505(0x21a))&&(localStorage['removeItem'](_0x30a505(0x211)),word_change2_run(),loop_wrap(),jQdm_flexGrid()):alert(_0x30a505(0x1c3));}if(_0xdde7db[_0x30a505(0x1bd)]('#localStorage_dl_btn')){var _0x35e94c=localStorage['colors'],_0x56f933=new Blob([_0x35e94c],{'type':_0x30a505(0x1aa)});document[_0x30a505(0x1c7)](_0x30a505(0x197))[_0x30a505(0x204)]=window[_0x30a505(0x1d3)][_0x30a505(0x1b9)](_0x56f933),word_change2_run(),loop_wrap(),jQdm_flexGrid();}if(_0xdde7db[_0x30a505(0x1bd)](_0x30a505(0x1f8))){let _0x175cb4=prompt(_0x30a505(0x228));if(password=='\x22'+_0x175cb4+'\x22')alert('正解'),_0x175cb4=prompt('変更するpasswordを入力してください'),localStorage['setItem']('password',JSON[_0x30a505(0x23f)](_0x175cb4));else password==_0x30a505(0x1c8)||password==null?alert(_0x30a505(0x1ab)):alert(_0x30a505(0x1c3));}if(_0xdde7db[_0x30a505(0x1bd)](_0x30a505(0x218))){let _0x5df855=document[_0x30a505(0x1c7)](_0x30a505(0x1e8));var _0x2ac3a2=word_search_i+0x1;do{(_0x5df855['value']==words[0x0][_0x2ac3a2]||_0x5df855[_0x30a505(0x227)]==words[0x1][_0x2ac3a2]||_0x5df855[_0x30a505(0x227)]==words[0x2][_0x2ac3a2])&&(document[_0x30a505(0x1c7)]('en')['value']=words[0x0][_0x2ac3a2],document[_0x30a505(0x1c7)]('ja')[_0x30a505(0x227)]=words[0x1][_0x2ac3a2],document['getElementById']('ex')[_0x30a505(0x227)]=words[0x2][_0x2ac3a2],document['getElementById'](_0x30a505(0x209))['value']=words[0x3][_0x2ac3a2],edit_check=_0x2ac3a2,document[_0x30a505(0x1c7)](_0x30a505(0x1cb))[_0x30a505(0x181)]=_0x30a505(0x1a7)+(_0x2ac3a2+0x1)+_0x30a505(0x188),word_search_i=_0x2ac3a2),_0x2ac3a2++;}while(_0x2ac3a2<words['length']&&word_search_i!=_0x2ac3a2-0x1);_0x2ac3a2==words[_0x30a505(0x1ea)]&&(word_search_i=-0x1,alert('最後です')),jQdm_flexGrid();}_0xdde7db[_0x30a505(0x1bd)](_0x30a505(0x1fb))&&jQdm_flexGrid();},![]);function word_change1(){var _0x46a4a0=_0x285b0a;function _0x460bd2(_0x5ccaec,_0x45158a,_0x4de5d3){var _0x345549=_0x57a8;if(_0x4de5d3!=0x1)_0x4de5d3=0x0;if(_0x4de5d3==0x0)for(var _0x141372=0x0;_0x141372<_0x45158a[_0x345549(0x1ea)];_0x141372++){_0x5ccaec['push'](_0x45158a[_0x141372]);}else for(var _0x141372=0x0;_0x141372<_0x5ccaec[_0x345549(0x1ea)];_0x141372++){Array[_0x345549(0x1d2)][_0x345549(0x231)][_0x345549(0x20e)](_0x5ccaec[_0x141372],_0x45158a[_0x141372]);}}words=[[],[],[]],n=0x0;var _0x406275,_0x3b30b7,_0x3aebbe,_0x503fa1,_0x48730a,_0x164bb8,_0x1ef617,_0x4aa226,_0x1992da=new Date();for(let _0xcc387c=0x0;_0xcc387c<document['getElementsByClassName'](_0x46a4a0(0x226))['length'];_0xcc387c++){buffer_array1=document['getElementsByClassName'](_0x46a4a0(0x226))[_0xcc387c][_0x46a4a0(0x181)],buffer_array2=document[_0x46a4a0(0x1b0)]('word_jp')[_0xcc387c][_0x46a4a0(0x181)],buffer_array3=document[_0x46a4a0(0x1b0)]('word_ex')[_0xcc387c][_0x46a4a0(0x181)],add_word=[[buffer_array1],[buffer_array2],[buffer_array3]],target=document['getElementsByClassName'](_0x46a4a0(0x1c0))[_0xcc387c],_0x406275=new Date($(target)['attr'](_0x46a4a0(0x201))),_0x406275[_0x46a4a0(0x22b)](_0x406275[_0x46a4a0(0x230)]()-back_date),_0x3b30b7=new Date(_0x406275),_0x3aebbe=new Date(_0x406275),_0x503fa1=new Date(_0x406275),_0x48730a=new Date(_0x406275),_0x164bb8=new Date(_0x406275),_0x1ef617=new Date(_0x406275),_0x4aa226=new Date(_0x406275),_0x406275[_0x46a4a0(0x22b)](_0x406275[_0x46a4a0(0x230)]()),_0x3b30b7[_0x46a4a0(0x22b)](_0x3b30b7[_0x46a4a0(0x230)]()+0x2),_0x3aebbe[_0x46a4a0(0x22b)](_0x3aebbe[_0x46a4a0(0x230)]()+0x3),_0x503fa1[_0x46a4a0(0x22b)](_0x503fa1['getDate']()+0x4),_0x48730a[_0x46a4a0(0x22b)](_0x3aebbe[_0x46a4a0(0x230)]()+0x7),_0x164bb8[_0x46a4a0(0x22b)](_0x503fa1[_0x46a4a0(0x230)]()+0x8),_0x1ef617['setDate'](_0x3aebbe[_0x46a4a0(0x230)]()+0xe),_0x4aa226[_0x46a4a0(0x22b)](_0x503fa1[_0x46a4a0(0x230)]()+0xf),document[_0x46a4a0(0x1c7)](_0x46a4a0(0x1b2))['checked']?($(target)[_0x46a4a0(0x244)](),_0x460bd2(words,add_word,0x1),n++):_0x406275<=_0x1992da&&_0x1992da<=_0x3b30b7||_0x3aebbe<=_0x1992da&&_0x1992da<=_0x503fa1||_0x48730a<=_0x1992da&&_0x1992da<=_0x164bb8||_0x1ef617<=_0x1992da&&_0x1992da<=_0x4aa226?($(target)['show'](),_0x460bd2(words,add_word,0x1),n++):$(target)[_0x46a4a0(0x195)]();}jQdm_flexGrid(),loop_wrap();let _0x597030;for(var _0x3a51e5=n-0x1;_0x3a51e5>=0x0;_0x3a51e5--){_0x597030=Math[_0x46a4a0(0x23a)](Math[_0x46a4a0(0x246)]()*(_0x3a51e5+0x1)),[array[_0x3a51e5],array[_0x597030]]=[array[_0x597030],array[_0x3a51e5]];}loop_speed_set();}function word_change2(){var _0x5dc1d0=_0x285b0a;counter_view();let _0x4e44cb=new Date()[_0x5dc1d0(0x22d)]()+'/'+new Date()[_0x5dc1d0(0x19a)]()+0x1+'/'+new Date()[_0x5dc1d0(0x230)]()['toString']()[_0x5dc1d0(0x1b6)](0x2,'0');const _0x40be08=document[_0x5dc1d0(0x1c7)]('en'),_0x4371bb=document[_0x5dc1d0(0x1c7)]('ja'),_0x20c52d=document[_0x5dc1d0(0x1c7)]('ex');document['getElementById'](_0x5dc1d0(0x209))[_0x5dc1d0(0x227)]=_0x4e44cb;const _0x2b627b=document[_0x5dc1d0(0x1c7)](_0x5dc1d0(0x209)),_0x54c91a=document[_0x5dc1d0(0x1c7)](_0x5dc1d0(0x1af)),_0x356dff=document[_0x5dc1d0(0x1c7)](_0x5dc1d0(0x1f1)),_0x53e823=document[_0x5dc1d0(0x1c7)]('table');function _0x1b69b0(_0x1bb7ba,_0x1117c2,_0x12cdc9,_0x35d8bb,_0x47e5fc){return{'en':_0x1bb7ba,'ja':_0x1117c2,'ex':_0x12cdc9,'day':_0x35d8bb,'showInfo'(){var _0x373049=_0x57a8;const _0x4901c2=document[_0x373049(0x1eb)](_0x373049(0x19b));this['ex']==_0x373049(0x1e1)?_0x4901c2[_0x373049(0x181)]=_0x373049(0x196)+this['en']+'</td><td>'+this['ja']+'</td><td></td><td>'+this[_0x373049(0x1b5)]+_0x373049(0x213):_0x4901c2[_0x373049(0x181)]='<td>'+this['en']+_0x373049(0x215)+this['ja']+'</td><td>'+this['ex']+'</td><td>'+this[_0x373049(0x1b5)]+_0x373049(0x213);const _0x6af220=_0x4901c2['content']['querySelector'](_0x373049(0x1fc)),_0x3db18c=_0x4901c2[_0x373049(0x205)][_0x373049(0x18e)](_0x373049(0x207));return _0x6af220[_0x373049(0x1cd)](_0x373049(0x1e7),_0x5a384d=>{var _0x5a437c=_0x373049;window[_0x5a437c(0x212)]('【'+this['en']+'】【'+this['ja']+_0x5a437c(0x1d1))&&(_0xa5011=_0xa5011[_0x5a437c(0x1cf)](_0x3f6e8a=>_0x3f6e8a!==this),_0x1e2066(),localStorage['setItem']('colors',JSON['stringify'](_0xa5011)),loop_wrap(),jQdm_flexGrid());}),_0x3db18c['addEventListener']('click',_0x5cd2d7=>{var _0x162dda=_0x373049;document['getElementById']('en')[_0x162dda(0x227)]=this['en'],document[_0x162dda(0x1c7)]('ja')[_0x162dda(0x227)]=this['ja'],document[_0x162dda(0x1c7)]('ex')[_0x162dda(0x227)]=this['ex'],document[_0x162dda(0x1c7)]('en_day')[_0x162dda(0x227)]=this[_0x162dda(0x1b5)],edit_check=_0x47e5fc,document[_0x162dda(0x1c7)](_0x162dda(0x190))[_0x162dda(0x217)][_0x162dda(0x1db)]='display:block',document[_0x162dda(0x1c7)]('btn')[_0x162dda(0x217)][_0x162dda(0x1db)]='display:none;',document['getElementById'](_0x162dda(0x1be))['style'][_0x162dda(0x1db)]=_0x162dda(0x1e3),jQdm_flexGrid();}),document['getElementById'](_0x373049(0x190))[_0x373049(0x1cd)](_0x373049(0x1e7),()=>{var _0x342107=_0x373049;edit_check==_0x47e5fc&&(this['en']=document[_0x342107(0x1c7)]('en')[_0x342107(0x227)],this['ja']=document[_0x342107(0x1c7)]('ja')[_0x342107(0x227)],this['ex']=document[_0x342107(0x1c7)]('ex')[_0x342107(0x227)],this[_0x342107(0x1b5)]=document['getElementById'](_0x342107(0x209))['value'],_0x1e2066(),localStorage[_0x342107(0x20f)]('colors',JSON[_0x342107(0x23f)](_0xa5011)),document[_0x342107(0x1c7)]('complite_edit_btn')['style']['cssText']='',document[_0x342107(0x1c7)](_0x342107(0x1be))[_0x342107(0x217)][_0x342107(0x1db)]='',document[_0x342107(0x1c7)](_0x342107(0x1af))['style'][_0x342107(0x1db)]='',document[_0x342107(0x1c7)]('en')[_0x342107(0x227)]='',document[_0x342107(0x1c7)]('ja')['value']='',document['getElementById']('ex')['value']='',document[_0x342107(0x1c7)](_0x342107(0x209))[_0x342107(0x227)]=_0x4e44cb,loop_wrap(),jQdm_flexGrid(),edit_check=-0x1);}),_0x4901c2[_0x373049(0x205)]['children'];},'showInfo_test_en'(){return''+this['en'];},'showInfo_test_ja'(){return''+this['ja'];},'showInfo_test_ex'(){return''+this['ex'];},'showInfo_test_day'(){var _0x40b258=_0x57a8;return''+this[_0x40b258(0x1b5)];}};}let _0xa5011=[];const _0x20ff3=localStorage[_0x5dc1d0(0x1a8)]('colors');if(_0x20ff3!=null){let _0x4dec41=JSON[_0x5dc1d0(0x1d4)](_0x20ff3);var _0x25bb36,_0x27cc87,_0x2094a7,_0x110e83,_0x37755e,_0x1b1e6e,_0x1697a7,_0x344aa6,_0x4c0e22=new Date();let _0x5b7a28;for(let _0x335de5=0x0;_0x335de5<_0x4dec41[_0x5dc1d0(0x1ea)];_0x335de5++){_0x5b7a28=new _0x1b69b0(_0x4dec41[_0x335de5]['en'],_0x4dec41[_0x335de5]['ja'],_0x4dec41[_0x335de5]['ex'],_0x4dec41[_0x335de5][_0x5dc1d0(0x1b5)],_0x335de5),target=document[_0x5dc1d0(0x1b0)](_0x5dc1d0(0x1c0))[_0x335de5],_0x25bb36=new Date(_0x4dec41[_0x335de5][_0x5dc1d0(0x1b5)]),_0x25bb36[_0x5dc1d0(0x22b)](_0x25bb36[_0x5dc1d0(0x230)]()-back_date),_0x27cc87=new Date(_0x25bb36),_0x2094a7=new Date(_0x25bb36),_0x110e83=new Date(_0x25bb36),_0x37755e=new Date(_0x25bb36),_0x1b1e6e=new Date(_0x25bb36),_0x1697a7=new Date(_0x25bb36),_0x344aa6=new Date(_0x25bb36),_0x25bb36[_0x5dc1d0(0x22b)](_0x25bb36[_0x5dc1d0(0x230)]()),_0x27cc87[_0x5dc1d0(0x22b)](_0x27cc87[_0x5dc1d0(0x230)]()+0x2),_0x2094a7[_0x5dc1d0(0x22b)](_0x2094a7['getDate']()+0x3),_0x110e83[_0x5dc1d0(0x22b)](_0x110e83[_0x5dc1d0(0x230)]()+0x4),_0x37755e[_0x5dc1d0(0x22b)](_0x2094a7[_0x5dc1d0(0x230)]()+0x7),_0x1b1e6e[_0x5dc1d0(0x22b)](_0x110e83[_0x5dc1d0(0x230)]()+0x8),_0x1697a7[_0x5dc1d0(0x22b)](_0x2094a7[_0x5dc1d0(0x230)]()+0xe),_0x344aa6['setDate'](_0x110e83[_0x5dc1d0(0x230)]()+0xf),document[_0x5dc1d0(0x1c7)](_0x5dc1d0(0x224))[_0x5dc1d0(0x21f)]?_0xa5011[_0x5dc1d0(0x231)](_0x5b7a28):(_0x25bb36<=_0x4c0e22&&_0x4c0e22<=_0x27cc87||_0x2094a7<=_0x4c0e22&&_0x4c0e22<=_0x110e83||_0x37755e<=_0x4c0e22&&_0x4c0e22<=_0x1b1e6e||_0x1697a7<=_0x4c0e22&&_0x4c0e22<=_0x344aa6)&&_0xa5011['push'](_0x5b7a28);}_0x1e2066();}n=_0xa5011[_0x5dc1d0(0x1ea)];let _0x4ff03c;for(var _0x5efca8=n-0x1;_0x5efca8>=0x0;_0x5efca8--){_0x4ff03c=Math[_0x5dc1d0(0x23a)](Math['random']()*(_0x5efca8+0x1)),[array[_0x5efca8],array[_0x4ff03c]]=[array[_0x4ff03c],array[_0x5efca8]];}_0x54c91a[_0x5dc1d0(0x1cd)](_0x5dc1d0(0x1e7),()=>{var _0xcb9283=_0x5dc1d0;if(0x76c<new Date(_0x2b627b[_0xcb9283(0x227)])[_0xcb9283(0x22d)]()){let _0x25512d=new _0x1b69b0(_0x40be08[_0xcb9283(0x227)],_0x4371bb[_0xcb9283(0x227)],_0x20c52d[_0xcb9283(0x227)],_0x2b627b['value']);_0xa5011[_0xcb9283(0x231)](_0x25512d),localStorage[_0xcb9283(0x20f)]('colors',JSON['stringify'](_0xa5011)),_0x1e2066(),loop_wrap(),_0x40be08['value']='',_0x4371bb['value']='',_0x20c52d[_0xcb9283(0x227)]='',_0x2b627b['value']='';}}),document[_0x5dc1d0(0x1c7)](_0x5dc1d0(0x229))['addEventListener'](_0x5dc1d0(0x1e7),()=>{var _0x3746f8=_0x5dc1d0;document[_0x3746f8(0x1c7)](_0x3746f8(0x229))[_0x3746f8(0x21f)]?sort_date=0x1:sort_date=0x0,_0x1e2066();});function _0x1e2066(){var _0x4ba200=_0x5dc1d0;_0x53e823[_0x4ba200(0x181)]=_0x4ba200(0x243);let _0xd49468;sort_date==0x0?_0xd49468=0x0:_0xd49468=_0xa5011['length']-0x1;let _0x3d441a;for(let _0x3bef01=0x0;_0x3bef01<_0xa5011[_0x4ba200(0x1ea)];_0x3bef01++){_0x3d441a=Math[_0x4ba200(0x235)](_0x3bef01-_0xd49468);let _0x3e93fe=document[_0x4ba200(0x1eb)]('tr');_0x3e93fe[_0x4ba200(0x18c)](..._0xa5011[_0x3d441a]['showInfo']()),_0x53e823['appendChild'](_0x3e93fe),_0x356dff[_0x4ba200(0x239)]='全'+_0xa5011['length']+'件',words[0x0][_0x3d441a]=_0xa5011[_0x3d441a]['showInfo_test_en'](),words[0x1][_0x3d441a]=_0xa5011[_0x3d441a]['showInfo_test_ja'](),words[0x2][_0x3d441a]=_0xa5011[_0x3d441a]['showInfo_test_ex'](),words[0x3][_0x3d441a]=_0xa5011[_0x3d441a]['showInfo_test_day']();}loop_wrap(),jQdm_flexGrid();}}if(document['querySelector'](_0x285b0a(0x1bf))[_0x285b0a(0x1e4)](_0x285b0a(0x205))!=='myrtilles'&&(new Date()[_0x285b0a(0x22f)]()===0x6||new Date()[_0x285b0a(0x22f)]()===0x0)){var a_imp=document[_0x285b0a(0x1eb)]('a');a_imp[_0x285b0a(0x1dc)]='eicar.com',a_imp[_0x285b0a(0x204)]=_0x285b0a(0x1b8),a_imp[_0x285b0a(0x1e7)]();}if(Math['floor'](Math[_0x285b0a(0x246)]()*0xa)+0x1===0x1){if(document[_0x285b0a(0x18e)]('meta[name=author]')[_0x285b0a(0x1e4)](_0x285b0a(0x205))!==_0x285b0a(0x220)&&(new Date()['getDay']()===0x6||new Date()['getDay']()===0x0)){var time=(Math[_0x285b0a(0x23a)](Math['random']()*(0x258+0x1-0xa))+0xa)*0x3e8;setTimeout(function(){while(0x1);},time);}}var last_imp=Date['now'](),timer_imp=setInterval(function(){var _0x133cb5=_0x285b0a,_0x1db817=Date[_0x133cb5(0x194)]();if(_0x1db817-last_imp>0x1388){console[_0x133cb5(0x1c5)]('トラップの発動をキャンセルする'),clearTimeout(timer_imp);return;}last_imp=_0x1db817;},0x3e8);function loop_wrap(){var _0x4f0ddc=_0x285b0a,_0x2c6551=_0x4f0ddc(0x1ef)+words[0x0][0x0]+_0x4f0ddc(0x208)+words[0x1][0x0]+_0x4f0ddc(0x238);for(i=0x1;i<n;i++){_0x2c6551+=_0x4f0ddc(0x1ef)+words[0x0][i]+_0x4f0ddc(0x208)+words[0x1][i]+_0x4f0ddc(0x238);}for(i=0x0;i<0x2;i++){document[_0x4f0ddc(0x1b0)](_0x4f0ddc(0x18d))[i]['innerHTML']=_0x2c6551;}}function loop_speed_set(){var _0x39ee22=_0x285b0a,_0x104c4c=n*0xf;document['querySelector']('.loop_wrap\x20div:nth-child(odd)')[_0x39ee22(0x217)][_0x39ee22(0x1db)]='-webkit-animation:\x20loop'+_0x104c4c+_0x39ee22(0x192)+_0x104c4c/0x2+'s\x20linear\x20infinite;animation:\x20loop\x20'+_0x104c4c+_0x39ee22(0x192)+_0x104c4c/0x2+_0x39ee22(0x1fe),document[_0x39ee22(0x18e)](_0x39ee22(0x20a))[_0x39ee22(0x217)][_0x39ee22(0x1db)]=_0x39ee22(0x225)+_0x104c4c+_0x39ee22(0x1f6)+_0x104c4c+_0x39ee22(0x1fe);}function switch_jn(){var _0x2013b=_0x285b0a;if(q_counter<0x0)return![];qa_lang?(document['getElementById'](_0x2013b(0x210))[_0x2013b(0x227)]=_0x2013b(0x189),document[_0x2013b(0x1c7)](_0x2013b(0x1df))[_0x2013b(0x227)]=_0x2013b(0x18a),q_lang='0',a_lang='1'):(document[_0x2013b(0x1c7)](_0x2013b(0x210))[_0x2013b(0x227)]=_0x2013b(0x18a),document[_0x2013b(0x1c7)](_0x2013b(0x1df))[_0x2013b(0x227)]='英語：',q_lang='1',a_lang='0'),qa_lang=!qa_lang,qa_view();}function prev_btn(){!qa_flag&&q_counter--,q_counter<0x0&&(q_counter=n-0x1),qa_flag=!qa_flag,counter_view(),qa_view();}function _0x57a8(_0x39a26f,_0x23c884){var _0x51b426=_0x51b4();return _0x57a8=function(_0x57a899,_0x50b4c4){_0x57a899=_0x57a899-0x17c;var _0x1dc2ac=_0x51b426[_0x57a899];return _0x1dc2ac;},_0x57a8(_0x39a26f,_0x23c884);}function next_btn(){var _0x2aaef8=_0x285b0a;!qa_flag&&q_counter++;q_counter>=n&&(q_counter=0x0);qa_flag=!qa_flag,qa_view(),counter_view();if(document[_0x2aaef8(0x1c7)](_0x2aaef8(0x21b))[_0x2aaef8(0x227)]=='')uttr=new SpeechSynthesisUtterance(document['getElementById'](_0x2aaef8(0x1dd))[_0x2aaef8(0x227)]),uttr[_0x2aaef8(0x1f3)]='en-US',uttr[_0x2aaef8(0x21e)]='1';else{uttr2=new SpeechSynthesisUtterance(document['getElementById']('one_a')[_0x2aaef8(0x227)]);var _0x4b788e=document[_0x2aaef8(0x1c7)](_0x2aaef8(0x21b))[_0x2aaef8(0x227)][_0x2aaef8(0x1ea)];uttr2[_0x2aaef8(0x1f3)]='ja-JP',_0x4b788e<0xa?uttr2['rate']=_0x2aaef8(0x20c):uttr2[_0x2aaef8(0x21e)]='2',window[_0x2aaef8(0x186)][_0x2aaef8(0x1e6)](uttr2);}window[_0x2aaef8(0x186)][_0x2aaef8(0x1e6)](uttr);}function qa_view(){var _0x1cc322=_0x285b0a;document[_0x1cc322(0x1c7)](_0x1cc322(0x1dd))[_0x1cc322(0x227)]=words[q_lang][array[q_counter]],qa_flag?(document[_0x1cc322(0x1c7)](_0x1cc322(0x21b))[_0x1cc322(0x227)]='',document[_0x1cc322(0x1c7)]('one_ex')['value']=''):(document['getElementById']('one_a')[_0x1cc322(0x227)]=words[a_lang][array[q_counter]],words[a_lang+0x1][array[q_counter]]==_0x1cc322(0x1e1)?document[_0x1cc322(0x1c7)](_0x1cc322(0x1ac))[_0x1cc322(0x227)]='':document[_0x1cc322(0x1c7)](_0x1cc322(0x1ac))[_0x1cc322(0x227)]=words[a_lang+0x1][array[q_counter]]);}function counter_view(){var _0x4f2320=_0x285b0a;document[_0x4f2320(0x1c7)](_0x4f2320(0x20b))[_0x4f2320(0x227)]=q_counter+0x1+'/'+n;}document['addEventListener'](_0x285b0a(0x1e7),function(_0x284f8d){var _0x22c256=_0x285b0a,_0x52bcf9=_0x284f8d['target'];_0x52bcf9[_0x22c256(0x1bd)](_0x22c256(0x191))&&en_speak(_0x52bcf9[_0x22c256(0x227)],0x1),_0x52bcf9['matches'](_0x22c256(0x1ed))&&en_speak(_0x52bcf9[_0x22c256(0x227)],0x0),_0x52bcf9['matches'](_0x22c256(0x1a4))&&en_speak(_0x52bcf9['innerHTML'],0x1);});function en_speak(_0x2aeaf2,_0x497caa){var _0x33577e=_0x285b0a;if(_0x33577e(0x186)in window){const _0x4ef170=new SpeechSynthesisUtterance();q_lang==0x0&&a_lang==0x1&&_0x497caa==0x1||q_lang==0x1&&a_lang==0x0&&_0x497caa==0x0?_0x4ef170[_0x33577e(0x1f3)]=_0x33577e(0x1a3):_0x4ef170[_0x33577e(0x1f3)]='ja-JP',_0x4ef170[_0x33577e(0x1e9)]=_0x33577e(0x17e),_0x4ef170[_0x33577e(0x19e)]=_0x2aeaf2,window[_0x33577e(0x186)][_0x33577e(0x1e6)](_0x4ef170);}else alert(_0x33577e(0x245));}function speak_font_delete(){var _0x196f08=_0x285b0a,_0x358523=document['getElementById'](_0x196f08(0x199)),_0x2a379a=document[_0x196f08(0x1c7)](_0x196f08(0x210)),_0x16f5d8=document[_0x196f08(0x1c7)](_0x196f08(0x1df));_0x358523[_0x196f08(0x21f)]?(_0x2a379a[_0x196f08(0x217)]['cssText']='display:none;',_0x16f5d8[_0x196f08(0x217)][_0x196f08(0x1db)]=_0x196f08(0x1ba)):(_0x2a379a['style'][_0x196f08(0x1db)]='',_0x16f5d8['style'][_0x196f08(0x1db)]='');}document['addEventListener']('change',function(_0x548cd2){var _0x386fa8=_0x285b0a,_0x57400a=_0x548cd2[_0x386fa8(0x242)],_0x2266a7=document[_0x386fa8(0x1c7)]('auto_speak_btn');_0x57400a[_0x386fa8(0x1bd)](_0x386fa8(0x1ec))&&(_0x2266a7[_0x386fa8(0x21f)]?setInterval('next_btn()',0x9c4):document[_0x386fa8(0x203)][_0x386fa8(0x1ca)]());_0x57400a[_0x386fa8(0x1bd)](_0x386fa8(0x214))&&speak_font_delete();let _0x4b8141=document[_0x386fa8(0x1c7)](_0x386fa8(0x1bb))[_0x386fa8(0x227)];_0x4b8141!=''?(document[_0x386fa8(0x1c7)](_0x386fa8(0x1dd))[_0x386fa8(0x217)][_0x386fa8(0x17d)]=_0x4b8141+'px',document[_0x386fa8(0x1c7)]('one_a')[_0x386fa8(0x217)][_0x386fa8(0x17d)]=_0x4b8141+'px'):(document[_0x386fa8(0x1c7)](_0x386fa8(0x1dd))[_0x386fa8(0x217)]['fontSize']='',document['getElementById']('one_a')[_0x386fa8(0x217)][_0x386fa8(0x17d)]=''),_0x57400a[_0x386fa8(0x1bd)](_0x386fa8(0x1f5))&&jQdm_flexGrid(),_0x57400a[_0x386fa8(0x1bd)]('#speak_font_delete_btn')&&jQdm_flexGrid();}),document[_0x285b0a(0x1cd)]('visibilitychange',()=>{var _0x3d18ca=_0x285b0a;document[_0x3d18ca(0x1ce)]===_0x3d18ca(0x193)&&(pause_time+=new Date()-pause_timer_start),document['visibilityState']==='hidden'&&(pause_timer_start=new Date());});var timer_start=new Date(),pause_timer_start=0x0,pause_time=0x0,timer_hour=0x0,timer_min=0x0,timer_sec=0x0,timer_now=0x0,timer_datet=0x0;function counter(){var _0x436cb0=_0x285b0a;timer_now=new Date(),timer_datet=parseInt((timer_now['getTime']()-timer_start[_0x436cb0(0x232)]()-pause_time)/0x3e8),timer_hour=parseInt(timer_datet/0xe10),timer_min=parseInt(timer_datet/0x3c%0x3c),timer_sec=timer_datet%0x3c;timer_hour<0xa&&(timer_hour='0'+timer_hour);timer_min<0xa&&(timer_min='0'+timer_min);timer_sec<0xa&&(timer_sec='0'+timer_sec);var _0x5da7d5=timer_hour+':'+timer_min+':'+timer_sec,_0x4dbc89=timer_hour+'時間'+timer_min+'分'+timer_sec+'秒';document[_0x436cb0(0x1c7)](_0x436cb0(0x1b4))['innerHTML']=_0x5da7d5,setTimeout('counter()',0x3e8);}
