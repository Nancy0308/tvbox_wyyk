var rule = {
    title: '绉嶅瓙鐭墽',
    host: 'http://zzdj.cc',
    homeUrl: '/api.php/provide/vod?ac=detail', 
    searchUrl: '/api.php/provide/vod?ac=detail&wd=**&pg=fypage',
    detailUrl: '/api.php/provide/vod?ac=detail&ids=fyid',
    url: '/api.php/provide/vod?ac=detail&t=fyclass&pg=fypage&f=',
    class_name: '鐭墽&KS&DY&閮藉競&鍙よ&閲嶇敓&閫嗚&铏愭亱&钀屽疂&瑷€鎯 &绌胯秺&鎴樼&绁炲尰&璧樺┛&鐢滃疇&鍏朵粬',
    class_url: '1&2&3&4&5&6&7&8&9&10&11&12&13&14&15&16',
    tab_rename:{'zzdj':'鍏紬鍙凤細鑲ョ尗瀹濊礉'}, 
    鎺ㄨ崘: 'json:list;vod_name;vod_pic;vod_remarks;vod_id',
    涓€绾 : 'json:list;vod_name;vod_pic;vod_remarks;vod_id',
    浜岀骇: `js:
        let html = request(input);
        let list = JSON.parse(html).list;
        if(list.length===1){
           VOD = list[0];
            VOD.vod_blurb = VOD.vod_blurb.replace(/銆€/g, '').replace(/<[^>]*>/g, '');
            VOD.vod_content = VOD.vod_content.replace(/銆€/g, '').replace(/<[^>]*>/g, '');
        }
    `,
    鎼滅储: 'json:list;vod_name;vod_pic;vod_remarks;vod_id',
}