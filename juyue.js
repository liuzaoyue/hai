js:
function dtfl() {
    var dt = `
    const empty = 'hiker://empty'
    addListener('onClose', $.toString((host) => {log('addListener');
        clearMyVar(host+'url');
        clearMyVar(host+'t');
    },host));
    try {
        var categories = pdfa(html, 大类定位).concat(pdfa(html, 拼接分类));
    } catch (e) {
        var categories = pdfa(html, 大类定位);
    }
    let init_cate = [];
    for (let i = 0; i < 20; i++) {
        init_cate.push('0');
    }
    const fold = getMyVar('fold', '1');
    const cate_temp_json = getMyVar(host+'t', JSON.stringify(init_cate));
    const cate_temp = JSON.parse(cate_temp_json);
    if (parseInt(MY_PAGE) === 1) {
        d.push({
            title: fold === '1' ? strong('∨', 'FF0000') : strong('∧', '1aad19'),
            url: $('#noLoading#').lazyRule((fold) => {
                putMyVar('fold', fold === '1' ? '0' : '1');
                refreshPage(false);
                return 'hiker://empty'
            }, fold),
            col_type: 'scroll_button',
        });
        d.push({
            title: '🗑️',
            url: $('#noLoading#').lazyRule((fold,host) => {
                clearMyVar(host+'url');
                clearMyVar(host+'t');
                refreshPage();
                return 'hiker://empty';
            },fold,host ),
            col_type: 'scroll_button',
        });
        categories.forEach((category, index) => {
            if (index === 0) {
                if (typeof(小类定位_主) != 'undefined') {
                    var sub_categories = pdfa(category, 小类定位_主);
                } else {
                    var sub_categories = pdfa(category, 小类定位);
                }
            } else {
                var sub_categories = pdfa(category, 小类定位);
            }
            if (index === 0) {
                sub_categories.forEach((item, key) => {
                    let title = pdfh(item, 分类标题);
                    d.push({
                        title: key.toString() == cate_temp[index] ? strong(title, 分类颜色) : title,
                        url: $(pd(item, 分类链接) + '#noLoading#').lazyRule((params,host) => {
                            let new_cate = [];
                            params.cate_temp.forEach((cate, index) => {
                                new_cate.push(index === 0 ? params.key.toString() : '0');
                            })
                            putMyVar(host+'t', JSON.stringify(new_cate));
                            putMyVar(host+'url', input);
                            refreshPage(true);
                            return 'hiker://empty';
                        }, {
                            cate_temp: cate_temp,
                            key: key,
                            page: MY_PAGE,
                        },host),
                        col_type: 'scroll_button',
                    });
                });
                d.push({
                    col_type: 'blank_block'
                });
            } else if (fold === '1') {
                sub_categories.forEach((item, key) => {
                    let title = pdfh(item, 分类标题);
                    d.push({
                        title: key.toString() == cate_temp[index] ? strong(title, 分类颜色) : title,
                        url: $(pd(item, 分类链接) + '#noLoading#').lazyRule((params,host) => {
                            params.cate_temp[params.index] = params.key.toString();
                            putMyVar(host+'t', JSON.stringify(params.cate_temp));
                            putMyVar(host+'url', input);
                            refreshPage(true);
                            return 'hiker://empty';
                        }, {
                            cate_temp: cate_temp,
                            index: index,
                            key: key,
                            page: MY_PAGE,
                        },host),
                        col_type: 'scroll_button',
                    });
                });
                d.push({
                    col_type: 'blank_block'
                });
            }
        });
    }`;
    return eval(dt);
}
function gfs(size) {
    if (!size)
        return 0;
    var num = 1024.00; //byte
    if (size < num)
        return size + "B";
    if (size < Math.pow(num, 2))
        return (size / num).toFixed(2) + "K"; //kb
    if (size < Math.pow(num, 3))
        return (size / Math.pow(num, 2)).toFixed(2) + "M"; //M
    if (size < Math.pow(num, 4))
        return (size / Math.pow(num, 3)).toFixed(2) + "G"; //G
    return (size / Math.pow(num, 4)).toFixed(2) + "T"; //T
}
function cm(s, n) {
	if (n == 3) {
		if(s.length==1){
            s= '00' + s;
        }else if(s.length==2){
            s= '0' + s;
        }
	}
	if (n == 2) {
		s = s.length == 2 ? s:'0' + s;
	}
	return s;
}
function ct(num) {
            num = parseInt(num);
            if (num >= 10000) {
                return (num / 10000).toFixed(1) + 'w';
            } else {
                return num;
            }
        }
function rp(data) {
var m = [],
    n = [];

function x(a, b) {
    var a;
    var b;
    m.push(a);
    n.push(b);
}
x(/菗/gi, "抽");
x(/嗕/gi, "辱");
x(/蓅/gi, "流");
x(/茭/gi, "交");
x(/zhang/gi, "胀");
x(/chun2/gi, "唇");
x(/chun/gi, "春");
x(/chuang/gi, "床");
x(/chuan/gi, "喘");
x(/chou/gi, "抽");
x(/chi/gi, "耻");
x(/chao/gi, "潮");
x(/chan/gi, "缠");
x(/cha/gi, "插");
x(/yu/gi, "欲");
x(/yù/gi, "欲");
x(/you/gi, "诱");
x(/ying/gi, "迎");
x(/yin3/gi, "吟");
x(/yin2/gi, "淫");
x(/yin/gi, "阴");
x(/yīn/gi, "阴");
x(/ye/gi, "液");
x(/yao/gi, "腰");
x(/yang2/gi, "痒");
x(/yang/gi, "阳");
x(/yan/gi, "艳");
x(/ya/gi, "压");
x(/xue/gi, "穴");
x(/xiong/gi, "胸");
x(/xing/gi, "性");
x(/xìng/gi, "性");
x(/xie2/gi, "邪");
x(/xie/gi, "泄");
x(/xi/gi, "吸");
x(/wei/gi, "慰");
x(/tuo/gi, "脱");
x(/tun2/gi, "臀");
x(/tun/gi, "吞");
x(/ting/gi, "挺");
x(/tian/gi, "舔");
x(/shun/gi, "吮");
x(/shuang/gi, "爽");
x(/shu/gi, "熟");
x(/shi/gi, "湿");
x(/she/gi, "射");
x(/se/gi, "色");
x(/sè/gi, "色");
x(/sao/gi, "骚");
x(/sai/gi, "塞");
x(/ru2/gi, "蠕");
x(/ru/gi, "乳");
x(/rou2/gi, "揉");
x(/rou/gi, "肉");
x(/ri/gi, "日");
x(/qiang/gi, "枪");
x(/qi2/gi, "妻");
x(/qi/gi, "骑");
x(/pi/gi, "屁");
x(/pen/gi, "喷");
x(/nue/gi, "虐");
x(/nong/gi, "弄");
x(/niao/gi, "尿");
x(/nen/gi, "嫩");
x(/nai/gi, "奶");
x(/min/gi, "敏");
x(/mi2/gi, "迷");
x(/mi/gi, "蜜");
x(/mao/gi, "毛");
x(/man/gi, "满");
x(/luo/gi, "裸");
x(/luan/gi, "乱");
x(/lu/gi, "撸");
x(/lou/gi, "露");
x(/liu/gi, "流");
x(/liao/gi, "撩");
x(/lang/gi, "浪");
x(/kua/gi, "胯");
x(/ku/gi, "裤");
x(/jing/gi, "精");
x(/jin/gi, "禁");
x(/jiao/gi, "交");
x(/jian2/gi, "奸");
x(/jiān/gi, "奸");
x(/jian/gi, "贱");
x(/ji3/gi, "妓");
x(/ji2/gi, "鸡");
x(/ji/gi, "激");
x(/jī/gi, "激");
x(/huan/gi, "欢");
x(/gun/gi, "棍");
x(/gui/gi, "龟");
x(/gong/gi, "宫");
x(/gen/gi, "根");
x(/gao2/gi, "睪");
x(/gao/gi, "搞");
x(/gang/gi, "肛");
x(/gan/gi, "感");
x(/fu/gi, "阜");
x(/feng/gi, "缝");
x(/dong2/gi, "胴");
x(/dong/gi, "洞");
x(/diao/gi, "屌");
x(/dang2/gi, "党");
x(/dang/gi, "荡");
x(/dàng/gi, "荡");
x(/cuo/gi, "搓");
x(/cu/gi, "粗");
x(/cao2/gi, "肏");
x(/cao/gi, "操");
x(/bo/gi, "勃");
x(/bō/gi, "波");
x(/bi2/gi, "屄");
x(/bi/gi, "逼");
x(/bao/gi, "饱");
x(/bang/gi, "棒");
x(/ai/gi, "爱");
x(/[MＭmｍ]\.[８8].+[MＭmｍ]/g, "");
x(/[wｗWＷ]{3}\.[Gｇ].+?[ＳSｓs]\...[MＭmｍ]/g, "");
x(/(<br>){2,}/g, "<p>");
data = data.replace(/<img src=\"image\/(.+?)\.jpg\">/g, '$1');
data = data.replace(/<img src=\"mom\/(.+?)\.jpg\">/g, '$1');
data = data.replace(/<img src=\"n\/(.+?)\.jpg\">/g, '$1');
for (var i in m) {
    data = data.replace(m[i], n[i]);
}
data=data.replace(/　{1,}/g,'　　');
	return data;
}

function rn(c) {
    return c.replace(/\[.+?]|丨|～|\//g, '|')
            .replace(/\(.+?\)/g, '')
            .replace(/第.+?(章|话) ?-?/g, '|')
            .replace(/\| {1,}| {1,}\|/g, '|')
            .replace(/(\|){1,}/g, '|')
            .replace(/[\[\?!]]/g, '')
            .replace(/^\||\|$/g, '');
}
function r(c) {
    return c.replace(/（/g, '(').replace(/）/g, ')').replace(/｜/g, '|').replace(/？/g, '?').replace(/！/g, '!');
}
function ss(d, c) {
    return '‘‘’’<strong><small><font color=#' + (c || '000000') + '>' + d + '</font></small></strong>';
}

function ssR(d, c) {
    return '<strong><small><font color=#' + (c || '000000') + '>' + d + '</font></small></strong>';
}
function sb(d, c) {
    return '‘‘’’<strong><big><font color=#' + (c || '000000') + '>' + d + '</font></big></strong>';
}

function sbR(d, c) {
    return '<strong><big><font color=#' + (c || '000000') + '>' + d + '</font></big></strong>';
}

function color(d, c) {
    return '‘‘’’<font color=#' + (c || '000000') + '>' + d + '</font>';
}

function colorR(d, c) {
    return '<font color=#' + (c || '000000') + '>' + d + '</font>';
}

function small(d, c) {
    return '‘‘’’<small><font color=#' + (c || '000000') + '>' + d + '</font></small>';
}

function smallR(d, c) {
    return '<small><font color=#' + (c || '000000') + '>' + d + '</font></small>';
}

function big(d, c) {
    return '‘‘’’<big><font color=#' + (c || '000000') + '>' + d + '</font></big>';
}

function bigR(d, c) {
    return '<big><font color=#' + (c || '000000') + '>' + d + '</font></big>';
}

function strong(d, c) {
    return '‘‘’’<strong><font color=#' + (c || '000000') + '>' + d + '</font></strong>';
}

function strongR(d, c) {
    return '<strong><font color=#' + (c || '000000') + '>' + d + '</font></strong>';
}

function jp(d) {
    return JSON.parse(fetch('hiker://page/' + d + '?rule=' + MY_RULE.title)).rule;
}

function e(d) {
    var s = JSON.parse(fetch('hiker://page/' + d + '?rule=' + MY_RULE.title)).rule;
    return eval(s);
}

function fy(s) {
    var ee = [];
    var urls = [];
    for (var list of s) {
        urls.push({
            url: 'http://m.iciba.com/word?w=' + list
        })
    }
    ee = bf(urls).map(h => pdfh(h, '.Mean_sentence__y3rWa&&Text'))
    return ee;
}

function sp(cc) {
    var str = '',
        ss = JTPYStr(),
        tt = FTPYStr();
    for (var i = 0; i < cc.length; i++) {
        if (cc.charCodeAt(i) > 10000 && tt.indexOf(cc.charAt(i)) != -1) str += ss.charAt(tt.indexOf(cc.charAt(i)));
        else str += cc.charAt(i);
    }
    return str;
}

function tr(cc) {
    var str = '',
        ss = JTPYStr(),
        tt = FTPYStr();
    for (var i = 0; i < cc.length; i++) {
        if (cc.charCodeAt(i) > 10000 && ss.indexOf(cc.charAt(i)) != -1) str += tt.charAt(ss.indexOf(cc.charAt(i)));
        else str += cc.charAt(i);
    }
    return str;
}

function banner(start, arr, data, cfg) {
        let id = 'juyue';
        var rnum = Math.floor(Math.random() * data.length);
        var item = data[rnum];
        putMyVar('rnum', rnum);
        let time = 5000;
        let col_type = 'pic_1_card';
        let desc = '';
        if (cfg != undefined) {
            time = cfg.time ? cfg.time : time;
            col_type = cfg.col_type ? cfg.col_type : col_type;
            desc = cfg.desc ? cfg.desc : desc;
        }       
        arr.push({
            col_type: col_type,
            img: item.img,
            desc: desc,
            title: item.title,
            url: item.url,
            extra: {
                id: 'bar', 
                name: item.extra.name,               
            }
        })

        if (start == false || getMyVar('benstart', 'true') == 'false') {
            unRegisterTask(id)
            return
        }

        let obj = {
            data: data,
        };

        registerTask(id, time, $.toString((obj) => {
            var data = obj.data;
            var rum = getMyVar('rnum');

            var i = Number(getMyVar('banneri', '0'));
            if (rum != '') {
                i = Number(rum) + 1
                clearMyVar('rnum')
            } else {
                i = i + 1;
            }
            //log(i)
            //log(data.length)

            if (i > data.length - 1) {
                i = 0
            }
            var item = data[i];
           
            try {
                updateItem('bar', {
                    title: item.title,
                    img: item.img,
                    extra: {                        
                        name: item.extra.name,
                        sname: item.extra.sname,
                        stype: item.extra.stype,
                        surl: item.url,
                        img:item.img,
                        pageTitle: item.extra.name,
                    }
                })
            } catch (e) {
                log(e.message)
                unRegisterTask('banner')
            }
            putMyVar('banneri', i);

        }, obj))
    }
