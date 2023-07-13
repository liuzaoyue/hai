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
    return dt;
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
    function mline(n) {
        var a = `
        for (var k = 1; k <= ${n}; k++) {
            d.push({
                col_type: 'line',
            });
        }`;
        return a;
    }function mblank(n) {
        var a = `
        for (var k = 1; k <= ${n}; k++) {
            d.push({
                col_type: 'big_big_blank_block',
            });
        }`;
        return a;
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
function rulePage(type, page) {
            return $("hiker://empty#noRecordHistory##noHistory#" + (page ? "?page=fypage" : "")).rule((type) => {
                require('https://gitcode.net/src48597962/hk/-/raw/d6231c661b38513ddbe64d1712669b0db4b2a9b3/SrcJuPublic.js');
                getYiData(type);
            }, type);
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
function ver() {
	return ;
}
function gra(arr, num) {
            var sData = arr.slice(0);
            var i = arr.length;
            var min = i - num;
            var item, index;
            while (i-- > min) {
                index = Math.floor((i + 1) * Math.random());
                item = sData[index];
                sData[index] = sData[i];
                sData[i] = item;
            }
            return sData.slice(min);
        }
function imgDec(key,iv){
    var sss = `
            function imgDecrypt() {
                var javaImport = new JavaImporter();
                javaImport.importPackage(
                    Packages.com.example.hikerview.utils,
                    Packages.java.lang,
                    Packages.java.security,
                    Packages.java.util,
                    Packages.java.io,
                    Packages.java.text,
                    Packages.javax.crypto,
                    Packages.javax.crypto.spec
                );
                with(javaImport) {
                    let bytes = FileUtil.toBytes(input);

                    function decryptData(bArr) {
                        var generateSecret = SecretKeyFactory.getInstance("desede").generateSecret(new DESedeKeySpec(String("${key}").getBytes()));
                        var cipher = Cipher.getInstance("desede/CBC/PKCS5Padding");
                        cipher.init(2, generateSecret, new IvParameterSpec(String("${iv}").getBytes()));
                        return cipher.doFinal(bArr);
                    }
                    bytes = decryptData(bytes);
                    return FileUtil.toInputStream(bytes);
                }
            }                    
        `;
        
        putVar('sss', sss);
        var imgdec = $.toString(() => {
            eval(getVar('sss'));
            return imgDecrypt();
        });        
        putVar('imgdec', imgdec);
        return imgdec;
}

function toerji(item,sname,stype) {
            let info = storage0.getMyVar('主页源信息');
            let extra = item.extra || {};
            extra.name = extra.name || extra.pageTitle || item.title;
            extra.img = extra.img || item.pic_url || item.img;
            extra.stype = stype||'漫画';
            extra.pageTitle = extra.pageTitle || extra.name;
            if (item.url && !/js:|select:|\(|\)|=>|@/.test(item.url)) {
                extra.surl = item.url.replace(/hiker:\/\/empty|#immersiveTheme#|#autoCache#|#noRecordHistory#|#noHistory#|#noLoading#|#/g, "");
                extra.sname = sname;
            }
            if ((item.col_type != "scroll_button") || item.extra) {
                item.extra = extra;
            }
            item.url = (extra.surl || !item.url) ? $('hiker://empty#immersiveTheme##autoCache#').rule(() => {
                require(config.依赖);
                erji();
            }) : item.url
            return item;
        }
function de(key,iv,data,encoding){
    eval(getCryptoJS());
            key = CryptoJS.enc.Utf8.parse(key);
            iv = CryptoJS.enc.Utf8.parse(iv);
            function De(data, encoding) {
                var decrypted = CryptoJS.TripleDES.decrypt(data, key, {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                });
                if (!encoding) {
                    return decrypted.toString(CryptoJS.enc.Utf8);
                }
                return decrypted.toString(CryptoJS.enc.Base64);
            };
return De(data,encoding);
}

function im() {
	return '#immersiveTheme##autoCache#';
}

function urla(u,host) {
	if (u.indexOf("http") < 0) {
		if (u.substr(0, 2) != '//') {
			if (u.substr(0, 1) != '/') u = host + '/' + u;
			else u = host + u;
		} else {
			u = 'https:' + u;
		}
	}
	return encodeURI(u);
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

function JTPYStr() {
    return '欲泛签奸恶你侄占译发绝铺系苏雇回仆里锕皑蔼碍爱嗳嫒瑷暧霭谙铵鹌肮袄奥媪骜鳌坝罢钯摆败呗颁办绊钣帮绑镑谤剥饱宝报鲍鸨龅辈贝钡狈备惫鹎贲锛绷笔毕毙币闭荜哔滗铋筚跸边编贬变辩辫苄缏笾标骠飑飙镖镳鳔鳖别瘪濒滨宾摈傧缤槟殡膑镔髌鬓饼禀拨钵铂驳饽钹鹁补钸财参蚕残惭惨灿骖黪苍舱仓沧厕侧册测恻层诧锸侪钗搀掺蝉馋谗缠铲产阐颤冁谄谶蒇忏婵骣觇禅镡场尝长偿肠厂畅伥苌怅阊鲳钞车彻砗尘陈衬伧谌榇碜龀撑称惩诚骋枨柽铖铛痴迟驰耻齿炽饬鸱冲冲虫宠铳畴踌筹绸俦帱雠橱厨锄雏础储触处刍绌蹰传钏疮闯创怆锤缍纯鹑绰辍龊辞词赐鹚聪葱囱从丛苁骢枞凑辏蹿窜撺错锉鹾达哒鞑带贷骀绐担单郸掸胆惮诞弹殚赕瘅箪当挡党荡档谠砀裆捣岛祷导盗焘灯邓镫敌涤递缔籴诋谛绨觌镝颠点垫电巅钿癫钓调铫鲷谍叠鲽钉顶锭订铤丢铥东动栋冻岽鸫窦犊独读赌镀渎椟牍笃黩锻断缎簖兑队对怼镦吨顿钝炖趸夺堕铎鹅额讹恶饿谔垩阏轭锇锷鹗颚颛鳄诶儿尔饵贰迩铒鸸鲕发罚阀珐矾钒烦贩饭访纺钫鲂飞诽废费绯镄鲱纷坟奋愤粪偾丰枫锋风疯冯缝讽凤沣肤辐抚辅赋复负讣妇缚凫驸绂绋赙麸鲋鳆钆该钙盖赅杆赶秆赣尴擀绀冈刚钢纲岗戆镐睾诰缟锆搁鸽阁铬个纥镉颍给亘赓绠鲠龚宫巩贡钩沟苟构购够诟缑觏蛊顾诂毂钴锢鸪鹄鹘剐挂鸹掴关观馆惯贯诖掼鹳鳏广犷规归龟闺轨诡贵刽匦刿妫桧鲑鳜辊滚衮绲鲧锅国过埚呙帼椁蝈铪骇韩汉阚绗颉号灏颢阂鹤贺诃阖蛎横轰鸿红黉讧荭闳鲎壶护沪户浒鹕哗华画划话骅桦铧怀坏欢环还缓换唤痪焕涣奂缳锾鲩黄谎鳇挥辉毁贿秽会烩汇讳诲绘诙荟哕浍缋珲晖荤浑诨馄阍获货祸钬镬击机积饥迹讥鸡绩缉极辑级挤几蓟剂济计记际继纪讦诘荠叽哜骥玑觊齑矶羁虿跻霁鲚鲫夹荚颊贾钾价驾郏浃铗镓蛲歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧谏缣戋戬睑鹣笕鲣鞯将浆蒋桨奖讲酱绛缰胶浇骄娇搅铰矫侥脚饺缴绞轿较挢峤鹪鲛阶节洁结诫届疖颌鲒紧锦仅谨进晋烬尽劲荆茎卺荩馑缙赆觐鲸惊经颈静镜径痉竞净刭泾迳弪胫靓纠厩旧阄鸠鹫驹举据锯惧剧讵屦榉飓钜锔窭龃鹃绢锩镌隽觉决绝谲珏钧军骏皲开凯剀垲忾恺铠锴龛闶钪铐颗壳课骒缂轲钶锞颔垦恳龈铿抠库裤喾块侩郐哙脍宽狯髋矿旷况诓诳邝圹纩贶亏岿窥馈溃匮蒉愦聩篑阃锟鲲扩阔蛴蜡腊莱来赖崃徕涞濑赉睐铼癞籁蓝栏拦篮阑兰澜谰揽览懒缆烂滥岚榄斓镧褴琅阆锒捞劳涝唠崂铑铹痨乐鳓镭垒类泪诔缧篱狸离鲤礼丽厉励砾历沥隶俪郦坜苈莅蓠呖逦骊缡枥栎轹砺锂鹂疠粝跞雳鲡鳢俩联莲连镰怜涟帘敛脸链恋炼练蔹奁潋琏殓裢裣鲢粮凉两辆谅魉疗辽镣缭钌鹩猎临邻鳞凛赁蔺廪檩辚躏龄铃灵岭领绫棂蛏鲮馏刘浏骝绺镏鹨龙聋咙笼垄拢陇茏泷珑栊胧砻楼娄搂篓偻蒌喽嵝镂瘘耧蝼髅芦卢颅庐炉掳卤虏鲁赂禄录陆垆撸噜闾泸渌栌橹轳辂辘氇胪鸬鹭舻鲈峦挛孪滦乱脔娈栾鸾銮抡轮伦仑沦纶论囵萝罗逻锣箩骡骆络荦猡泺椤脶镙驴吕铝侣屡缕虑滤绿榈褛锊呒妈玛码蚂马骂吗唛嬷杩买麦卖迈脉劢瞒馒蛮满谩缦镘颡鳗猫锚铆贸麽没镁门闷们扪焖懑钔锰梦眯谜弥觅幂芈谧猕祢绵缅渑腼黾庙缈缪灭悯闽闵缗鸣铭谬谟蓦馍殁镆谋亩钼呐钠纳难挠脑恼闹铙讷馁内拟腻铌鲵撵辇鲶酿鸟茑袅聂啮镊镍陧蘖嗫颟蹑柠狞宁拧泞苎咛聍钮纽脓浓农侬哝驽钕诺傩疟欧鸥殴呕沤讴怄瓯盘蹒庞抛疱赔辔喷鹏纰罴铍骗谝骈飘缥频贫嫔苹凭评泼颇钋扑铺朴谱镤镨栖脐齐骑岂启气弃讫蕲骐绮桤碛颀颃鳍牵钎铅迁签谦钱钳潜浅谴堑佥荨悭骞缱椠钤枪呛墙蔷强抢嫱樯戗炝锖锵镪羟跄锹桥乔侨翘窍诮谯荞缲硗跷窃惬锲箧钦亲寝锓轻氢倾顷请庆揿鲭琼穷茕蛱巯赇虮鳅趋区躯驱龋诎岖阒觑鸲颧权劝诠绻辁铨却鹊确阕阙悫让饶扰绕荛娆桡热韧认纫饪轫荣绒嵘蝾缛铷颦软锐蚬闰润洒萨飒鳃赛伞毵糁丧骚扫缫涩啬铯穑杀刹纱铩鲨筛晒酾删闪陕赡缮讪姗骟钐鳝墒伤赏垧殇觞烧绍赊摄慑设厍滠畲绅审婶肾渗诜谂渖声绳胜师狮湿诗时蚀实识驶势适释饰视试谥埘莳弑轼贳铈鲥寿兽绶枢输书赎属术树竖数摅纾帅闩双谁税顺说硕烁铄丝饲厮驷缌锶鸶耸怂颂讼诵擞薮馊飕锼苏诉肃谡稣虽随绥岁谇孙损笋荪狲缩琐锁唢睃獭挞闼铊鳎台态钛鲐摊贪瘫滩坛谭谈叹昙钽锬顸汤烫傥饧铴镗涛绦讨韬铽腾誊锑题体屉缇鹈阗条粜龆鲦贴铁厅听烃铜统恸头钭秃图钍团抟颓蜕饨脱鸵驮驼椭箨鼍袜娲腽弯湾顽万纨绾网辋韦违围为潍维苇伟伪纬谓卫诿帏闱沩涠玮韪炜鲔温闻纹稳问阌瓮挝蜗涡窝卧莴龌呜钨乌诬无芜吴坞雾务误邬庑怃妩骛鹉鹜锡牺袭习铣戏细饩阋玺觋虾辖峡侠狭厦吓硖鲜纤贤衔闲显险现献县馅羡宪线苋莶藓岘猃娴鹇痫蚝籼跹厢镶乡详响项芗饷骧缃飨萧嚣销晓啸哓潇骁绡枭箫协挟携胁谐写泻谢亵撷绁缬锌衅兴陉荥凶汹锈绣馐鸺虚嘘须许叙绪续诩顼轩悬选癣绚谖铉镟学谑泶鳕勋询寻驯训讯逊埙浔鲟压鸦鸭哑亚讶垭娅桠氩阉烟盐严岩颜阎艳厌砚彦谚验厣赝俨兖谳恹闫酽魇餍鼹鸯杨扬疡阳痒养样炀瑶摇尧遥窑谣药轺鹞鳐爷页业叶靥谒邺晔烨医铱颐遗仪蚁艺亿忆义诣议谊译异绎诒呓峄饴怿驿缢轶贻钇镒镱瘗舣荫阴银饮隐铟瘾樱婴鹰应缨莹萤营荧蝇赢颖茔莺萦蓥撄嘤滢潆璎鹦瘿颏罂哟拥佣痈踊咏镛优忧邮铀犹诱莸铕鱿舆鱼渔娱与屿语狱誉预驭伛俣谀谕蓣嵛饫阈妪纡觎欤钰鹆鹬龉鸳渊辕园员圆缘远橼鸢鼋约跃钥粤悦阅钺郧匀陨运蕴酝晕韵郓芸恽愠纭韫殒氲杂灾载攒暂赞瓒趱錾赃脏驵凿枣责择则泽赜啧帻箦贼谮赠综缯轧铡闸栅诈斋债毡盏斩辗崭栈战绽谵张涨帐账胀赵诏钊蛰辙锗这谪辄鹧贞针侦诊镇阵浈缜桢轸赈祯鸩挣睁狰争帧症郑证诤峥钲铮筝织职执纸挚掷帜质滞骘栉栀轵轾贽鸷蛳絷踬踯觯钟终种肿众锺诌轴皱昼骤纣绉猪诸诛烛瞩嘱贮铸驻伫槠铢专砖转赚啭馔颞桩庄装妆壮状锥赘坠缀骓缒谆准着浊诼镯兹资渍谘缁辎赀眦锱龇鲻踪总纵偬邹诹驺鲰诅组镞钻缵躜鳟翱并卜沉丑淀迭斗范干皋硅柜后伙秸杰诀夸里凌么霉捻凄扦圣尸抬涂洼喂污锨咸蝎彝涌游吁御愿岳云灶扎札筑于志注凋讠谫郄勐凼坂垅垴埯埝苘荬荮莜莼菰藁揸吒吣咔咝咴噘噼嚯幞岙嵴彷徼犸狍馀馇馓馕愣憷懔丬溆滟混漤潴澹甯纟绔绱珉枧桊桉槔橥轱轷赍肷胨飚煳煅熘愍淼砜磙眍钚钷铘铞锃锍锎';
}

function FTPYStr() {
    return '慾氾籤姦噁妳姪佔訳発絶舖係甦僱迴僕裡錒皚藹礙愛噯嬡璦曖靄諳銨鵪骯襖奧媼驁鰲壩罷鈀擺敗唄頒辦絆鈑幫綁鎊謗剝飽寶報鮑鴇齙輩貝鋇狽備憊鵯賁錛繃筆畢斃幣閉蓽嗶潷鉍篳蹕邊編貶變辯辮芐緶籩標驃颮飆鏢鑣鰾鱉別癟瀕濱賓擯儐繽檳殯臏鑌髕鬢餅稟撥缽鉑駁餑鈸鵓補鈽財參蠶殘慚慘燦驂黲蒼艙倉滄廁側冊測惻層詫鍤儕釵攙摻蟬饞讒纏鏟產闡顫囅諂讖蕆懺嬋驏覘禪鐔場嘗長償腸廠暢倀萇悵閶鯧鈔車徹硨塵陳襯傖諶櫬磣齔撐稱懲誠騁棖檉鋮鐺癡遲馳恥齒熾飭鴟沖衝蟲寵銃疇躊籌綢儔幬讎櫥廚鋤雛礎儲觸處芻絀躕傳釧瘡闖創愴錘綞純鶉綽輟齪辭詞賜鶿聰蔥囪從叢蓯驄樅湊輳躥竄攛錯銼鹺達噠韃帶貸駘紿擔單鄲撣膽憚誕彈殫賧癉簞當擋黨蕩檔讜碭襠搗島禱導盜燾燈鄧鐙敵滌遞締糴詆諦綈覿鏑顛點墊電巔鈿癲釣調銚鯛諜疊鰈釘頂錠訂鋌丟銩東動棟凍崠鶇竇犢獨讀賭鍍瀆櫝牘篤黷鍛斷緞籪兌隊對懟鐓噸頓鈍燉躉奪墮鐸鵝額訛惡餓諤堊閼軛鋨鍔鶚顎顓鱷誒兒爾餌貳邇鉺鴯鮞發罰閥琺礬釩煩販飯訪紡鈁魴飛誹廢費緋鐨鯡紛墳奮憤糞僨豐楓鋒風瘋馮縫諷鳳灃膚輻撫輔賦復負訃婦縛鳧駙紱紼賻麩鮒鰒釓該鈣蓋賅桿趕稈贛尷搟紺岡剛鋼綱崗戇鎬睪誥縞鋯擱鴿閣鉻個紇鎘潁給亙賡綆鯁龔宮鞏貢鉤溝茍構購夠詬緱覯蠱顧詁轂鈷錮鴣鵠鶻剮掛鴰摑關觀館慣貫詿摜鸛鰥廣獷規歸龜閨軌詭貴劊匭劌媯檜鮭鱖輥滾袞緄鯀鍋國過堝咼幗槨蟈鉿駭韓漢闞絎頡號灝顥閡鶴賀訶闔蠣橫轟鴻紅黌訌葒閎鱟壺護滬戶滸鶘嘩華畫劃話驊樺鏵懷壞歡環還緩換喚瘓煥渙奐繯鍰鯇黃謊鰉揮輝毀賄穢會燴匯諱誨繪詼薈噦澮繢琿暉葷渾諢餛閽獲貨禍鈥鑊擊機積饑跡譏雞績緝極輯級擠幾薊劑濟計記際繼紀訐詰薺嘰嚌驥璣覬齏磯羈蠆躋霽鱭鯽夾莢頰賈鉀價駕郟浹鋏鎵蟯殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗諫縑戔戩瞼鶼筧鰹韉將漿蔣槳獎講醬絳韁膠澆驕嬌攪鉸矯僥腳餃繳絞轎較撟嶠鷦鮫階節潔結誡屆癤頜鮚緊錦僅謹進晉燼盡勁荊莖巹藎饉縉贐覲鯨驚經頸靜鏡徑痙競凈剄涇逕弳脛靚糾廄舊鬮鳩鷲駒舉據鋸懼劇詎屨櫸颶鉅鋦窶齟鵑絹錈鐫雋覺決絕譎玨鈞軍駿皸開凱剴塏愾愷鎧鍇龕閌鈧銬顆殼課騍緙軻鈳錁頷墾懇齦鏗摳庫褲嚳塊儈鄶噲膾寬獪髖礦曠況誆誑鄺壙纊貺虧巋窺饋潰匱蕢憒聵簣閫錕鯤擴闊蠐蠟臘萊來賴崍徠淶瀨賚睞錸癩籟藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫嵐欖斕鑭襤瑯閬鋃撈勞澇嘮嶗銠鐒癆樂鰳鐳壘類淚誄縲籬貍離鯉禮麗厲勵礫歷瀝隸儷酈壢藶蒞蘺嚦邐驪縭櫪櫟轢礪鋰鸝癘糲躒靂鱺鱧倆聯蓮連鐮憐漣簾斂臉鏈戀煉練蘞奩瀲璉殮褳襝鰱糧涼兩輛諒魎療遼鐐繚釕鷯獵臨鄰鱗凜賃藺廩檁轔躪齡鈴靈嶺領綾欞蟶鯪餾劉瀏騮綹鎦鷚龍聾嚨籠壟攏隴蘢瀧瓏櫳朧礱樓婁摟簍僂蔞嘍嶁鏤瘺耬螻髏蘆盧顱廬爐擄鹵虜魯賂祿錄陸壚擼嚕閭瀘淥櫨櫓轤輅轆氌臚鸕鷺艫鱸巒攣孿灤亂臠孌欒鸞鑾掄輪倫侖淪綸論圇蘿羅邏鑼籮騾駱絡犖玀濼欏腡鏍驢呂鋁侶屢縷慮濾綠櫚褸鋝嘸媽瑪碼螞馬罵嗎嘜嬤榪買麥賣邁脈勱瞞饅蠻滿謾縵鏝顙鰻貓錨鉚貿麼沒鎂門悶們捫燜懣鍆錳夢瞇謎彌覓冪羋謐獼禰綿緬澠靦黽廟緲繆滅憫閩閔緡鳴銘謬謨驀饃歿鏌謀畝鉬吶鈉納難撓腦惱鬧鐃訥餒內擬膩鈮鯢攆輦鯰釀鳥蔦裊聶嚙鑷鎳隉蘗囁顢躡檸獰寧擰濘苧嚀聹鈕紐膿濃農儂噥駑釹諾儺瘧歐鷗毆嘔漚謳慪甌盤蹣龐拋皰賠轡噴鵬紕羆鈹騙諞駢飄縹頻貧嬪蘋憑評潑頗釙撲鋪樸譜鏷鐠棲臍齊騎豈啟氣棄訖蘄騏綺榿磧頎頏鰭牽釬鉛遷簽謙錢鉗潛淺譴塹僉蕁慳騫繾槧鈐槍嗆墻薔強搶嬙檣戧熗錆鏘鏹羥蹌鍬橋喬僑翹竅誚譙蕎繰磽蹺竊愜鍥篋欽親寢鋟輕氫傾頃請慶撳鯖瓊窮煢蛺巰賕蟣鰍趨區軀驅齲詘嶇闃覷鴝顴權勸詮綣輇銓卻鵲確闋闕愨讓饒擾繞蕘嬈橈熱韌認紉飪軔榮絨嶸蠑縟銣顰軟銳蜆閏潤灑薩颯鰓賽傘毿糝喪騷掃繅澀嗇銫穡殺剎紗鎩鯊篩曬釃刪閃陜贍繕訕姍騸釤鱔墑傷賞坰殤觴燒紹賒攝懾設厙灄畬紳審嬸腎滲詵諗瀋聲繩勝師獅濕詩時蝕實識駛勢適釋飾視試謚塒蒔弒軾貰鈰鰣壽獸綬樞輸書贖屬術樹豎數攄紓帥閂雙誰稅順說碩爍鑠絲飼廝駟緦鍶鷥聳慫頌訟誦擻藪餿颼鎪蘇訴肅謖穌雖隨綏歲誶孫損筍蓀猻縮瑣鎖嗩脧獺撻闥鉈鰨臺態鈦鮐攤貪癱灘壇譚談嘆曇鉭錟頇湯燙儻餳鐋鏜濤絳討韜鋱騰謄銻題體屜緹鵜闐條糶齠鰷貼鐵廳聽烴銅統慟頭鈄禿圖釷團摶頹蛻飩脫鴕馱駝橢籜鼉襪媧膃彎灣頑萬紈綰網輞韋違圍為濰維葦偉偽緯謂衛諉幃闈溈潿瑋韙煒鮪溫聞紋穩問閿甕撾蝸渦窩臥萵齷嗚鎢烏誣無蕪吳塢霧務誤鄔廡憮嫵騖鵡鶩錫犧襲習銑戲細餼鬩璽覡蝦轄峽俠狹廈嚇硤鮮纖賢銜閑顯險現獻縣餡羨憲線莧薟蘚峴獫嫻鷴癇蠔秈躚廂鑲鄉詳響項薌餉驤緗饗蕭囂銷曉嘯嘵瀟驍綃梟簫協挾攜脅諧寫瀉謝褻擷紲纈鋅釁興陘滎兇洶銹繡饈鵂虛噓須許敘緒續詡頊軒懸選癬絢諼鉉鏇學謔澩鱈勛詢尋馴訓訊遜塤潯鱘壓鴉鴨啞亞訝埡婭椏氬閹煙鹽嚴巖顏閻艷厭硯彥諺驗厴贗儼兗讞懨閆釅魘饜鼴鴦楊揚瘍陽癢養樣煬瑤搖堯遙窯謠藥軺鷂鰩爺頁業葉靨謁鄴曄燁醫銥頤遺儀蟻藝億憶義詣議誼譯異繹詒囈嶧飴懌驛縊軼貽釔鎰鐿瘞艤蔭陰銀飲隱銦癮櫻嬰鷹應纓瑩螢營熒蠅贏穎塋鶯縈鎣攖嚶瀅瀠瓔鸚癭頦罌喲擁傭癰踴詠鏞優憂郵鈾猶誘蕕銪魷輿魚漁娛與嶼語獄譽預馭傴俁諛諭蕷崳飫閾嫗紆覦歟鈺鵒鷸齬鴛淵轅園員圓緣遠櫞鳶黿約躍鑰粵悅閱鉞鄖勻隕運蘊醞暈韻鄆蕓惲慍紜韞殞氳雜災載攢暫贊瓚趲鏨贓臟駔鑿棗責擇則澤賾嘖幘簀賊譖贈綜繒軋鍘閘柵詐齋債氈盞斬輾嶄棧戰綻譫張漲帳賬脹趙詔釗蟄轍鍺這謫輒鷓貞針偵診鎮陣湞縝楨軫賑禎鴆掙睜猙爭幀癥鄭證諍崢鉦錚箏織職執紙摯擲幟質滯騭櫛梔軹輊贄鷙螄縶躓躑觶鐘終種腫眾鍾謅軸皺晝驟紂縐豬諸誅燭矚囑貯鑄駐佇櫧銖專磚轉賺囀饌顳樁莊裝妝壯狀錐贅墜綴騅縋諄準著濁諑鐲茲資漬諮緇輜貲眥錙齜鯔蹤總縱傯鄒諏騶鯫詛組鏃鉆纘躦鱒翺並蔔沈醜澱叠鬥範幹臯矽櫃後夥稭傑訣誇裏淩麽黴撚淒扡聖屍擡塗窪餵汙鍁鹹蠍彜湧遊籲禦願嶽雲竈紮劄築於誌註雕訁譾郤猛氹阪壟堖垵墊檾蕒葤蓧蒓菇槁摣咤唚哢噝噅撅劈謔襆嶴脊仿僥獁麅餘餷饊饢楞怵懍爿漵灩溷濫瀦淡寧糸絝緔瑉梘棬案橰櫫軲軤賫膁腖飈糊煆溜湣渺碸滾瞘鈈鉕鋣銱鋥鋶鐦';
}
function data_xchina() {
    var data = `var cvideo = [
    [{
        name: '全部成人影片',
        url: domain + '/videos/1.html'
    }],
    [{
        name: '中文AV(7643)',
        url: domain + '/videos/series-63824a975d8ae/1.html'
    }, {
        name: '麻豆传媒(2765)',
        url: domain + '/videos/series-5f904550b8fcc/1.html'
    }, {
        name: '天美传媒(682)',
        url: domain + '/videos/series-60153c49058ce/1.html'
    }, {
        name: '果冻传媒(545)',
        url: domain + '/videos/series-5fe840718d665/1.html'
    }, {
        name: '精东影业(473)',
        url: domain + '/videos/series-60126bcfb97fa/1.html'
    }, {
        name: '糖心Vlog(481)',
        url: domain + '/videos/series-61014080dbfde/1.html'
    }, {
        name: '星空传媒(431)',
        url: domain + '/videos/series-6054e93356ded/1.html'
    }, {
        name: '杏吧原版(250)',
        url: domain + '/videos/series-6072997559b46/1.html'
    }, {
        name: '性视界(258)',
        url: domain + '/videos/series-63490362dac45/1.html'
    }, {
        name: '扣扣传媒(189)',
        url: domain + '/videos/series-6230974ada989/1.html'
    },{
        name: '萝莉社(154)',
        url: domain + '/videos/series-5fe8403919165/1.html'
    }, {
        name: 'OnlyFans(118)',
        url: domain + '/videos/series-61bf6e439fed6/1.html'
    }, {
        name: 'SA国际传媒(116)',
        url: domain + '/videos/series-6360ca9706ecb/1.html'
    },{
        name: '爱豆传媒(112)',
        url: domain + '/videos/series-63d134c7a0a15/1.html'
    },  {
        name: '葫芦影业(47)',
        url: domain + '/videos/series-6193d27975579/1.html'
    }, {
        name: 'EDMosaic(41)',
        url: domain + '/videos/series-63732f5c3d36b/1.html'
    }, {
        name: '其他中文AV(65)',
        url: domain + '/videos/series-63986aec205d8/1.html'
    }, {
        name: '乐播传媒(34)',
        url: domain + '/videos/series-60589daa8ff97/1.html'
    }, {
        name: '乌托邦(43)',
        url: domain + '/videos/series-637750ae0ee71/1.html'
    }, {
        name: '91茄子(28)',
        url: domain + '/videos/series-639c8d983b7d5/1.html'
    }, {
        name: '爱神传媒(22)',
        url: domain + '/videos/series-6405b6842705b/1.html'
    }, {
        name: '抖阴(18)',
        url: domain + '/videos/series-6248705dab604/1.html'
    }, {
        name: '起点传媒(14)',
        url: domain + '/videos/series-639377d93a682/1.html'
    },  {
        name: '哔哩传媒(14)',
        url: domain + '/videos/series-64458e7da05e6/1.html'
    }, {
        name: '大象传媒(13)',
        url: domain + '/videos/series-60c2555958858/1.html'
    }, {
        name: '乌鸦传媒(11)',
        url: domain + '/videos/series-601fdc25ab544/1.html'
    }, {
        name: 'MisAV(10)',
        url: domain + '/videos/series-62263c03a735c/1.html'
    }, {
        name: '映秀传媒(10)',
        url: domain + '/videos/series-6447fc202ffdf/1.html'
    }, {
        name: 'TWAV(8)',
        url: domain + '/videos/series-62263c03a735c/1.html'
    }, {
        name: 'mini传媒(7)',
        url: domain + '/videos/series-60da356dc166c/1.html'
    }, {
        name: '西瓜影视(6)',
        url: domain + '/videos/series-648e1071386ef/1.html'
    },{
        name: 'CCAV(5)',
        url: domain + '/videos/series-61b88a26d1e61/1.html'
    }, {
        name: '开心鬼传媒(4)',
        url: domain + '/videos/series-609e4c6e7a174/1.html'
    }],
    [{
        name: '模特私拍(916)',
        url: domain + '/videos/series-5fe8403919165/1.html'
    }, {
        name: '其他模特私拍(374)',
        url: domain + '/videos/series-63963534a9e49/1.html'
    }, {
        name: 'PANS视频(454)',
        url: domain + '/videos/series-63963186ae145/1.html'
    }, {
        name: '果哥作品(49)',
        url: domain + '/videos/series-6396315ed2e49/1.html'
    }, {
        name: '相约中国(24)',
        url: domain + '/videos/series-63ed0f22e9177/1.html'
    }, {
        name: '风吟鸟唱作品(13)',
        url: domain + '/videos/series-6396319e6b823/1.html'
    }],
    [{
        name: '业余拍摄(646)',
        url: domain + '/videos/series-617d3e7acdcc8/1.html'
    }, {
        name: '探花现场(584)',
        url: domain + '/videos/series-63965bf7b7f51/1.html'
    }, {
        name: '主播现场(74)',
        url: domain + '/videos/series-63965bd5335fc/1.html'
    }],
    [{
        name: '日本AV(1419)',
        url: domain + '/videos/series-6206216719462/1.html'
    }, {
        name: '有码AV(994)',
        url: domain + '/videos/series-6395aba3deb74/1.html'
    }, {
        name: '无码AV(425)',
        url: domain + '/videos/series-6395ab7fee104/1.html'
    }],
    [{
        name: '其他影片(214)',
        url: domain + '/videos/series-60192e83c9e05/1.html'
    }, {
        name: '其他亚洲影片(140)',
        url: domain + '/videos/series-63963ea949a82/1.html'
    }, {
        name: '门事件(53)',
        url: domain + '/videos/series-63963de3f2a0f/1.html'
    },  {
        name: '其他欧美影片(13)',
        url: domain + '/videos/series-6396404e6bdb5/1.html'
    }],
    [{
        name: '情色电影(104)',
        url: domain + '/videos/series-61c4d9b653b6d/1.html'
    }, {
        name: '华语电影(52)',
        url: domain + '/videos/series-6396492fdb1a0/1.html'
    }, {
        name: '日韩电影(51)',
        url: domain + '/videos/series-6396494584b57/1.html'
    }]
];
var sort_data = [{
    name: '更新时间',
    url: ''
}, {
    name: '观看最多',
    url: '/sort-read'
}, {
    name: '评论最多',
    url: '/sort-comment'
}, {
    name: '最近评论',
    url: '/sort-recent'
},{
    name: '时长最长',
    url: '/sort-length'
}];
var cphoto = [
    [{
        name: '专辑',
        url: ''
    }, {
        name: '秀人网尺度主题',
        url: domain + '/photos/album-1/1.html'
    }, {
        name: '大尺度主题',
        url: domain + '/photos/album-2/1.html'
    }, {
        name: '秀性爱主题',
        url: domain + '/photos/album-3/1.html'
    }, {
        name: '露出主题',
        url: domain + '/photos/album-4/1.html'
    }, {
        name: 'Cosplay主题',
        url: domain + '/photos/album-5/1.html'
    }, {
        name: '道具主题',
        url: domain + '/photos/album-6/1.html'
    }, {
        name: '捆绑主题',
        url: domain + '/photos/album-7/1.html'
    }, {
        name: '白虎主题',
        url: domain + '/photos/album-8/1.html'
    }, {
        name: '女同主题',
        url: domain + '/photos/album-9/1.html'
    }, ],
    [{
        name: '人体摄影分类',
        url: ''
    }, {
        name: '全部人体摄影(4862)',
        url: domain + '/photos/kind-2/1.html'
    }, {
        name: '未分类人体摄影(2811)',
        url: domain + '/photos/series-618e4909ea9b6/1.html'
    }, {
        name: '丽图100(434)',
        url: domain + '/photos/series-5f1d784995865/1.html'
    }, {
        name: 'AI图区(38)',
        url: domain + '/photos/series-6443d480eb757/1.html'
    }, {
        name: '摄影师作品(287)',
        url: domain + '/photos/series-6395a1e929f23/1.html'
    }, {
        name: 'CHOKmoson脱神(33)',
        url: domain + '/photos/series-63c7ccc347a68/1.html'
    }, {
        name: '王动作品(32)',
        url: domain + '/photos/series-5f26a5c1d39e9/1.html'
    }, {
        name: '风吟鸟唱(31)',
        url: domain + '/photos/series-63b54e804a694/1.html'
    }, {
        name: '宇航员(13)',
        url: domain + '/photos/series-63b548623b10d/1.html'
    }, {
        name: '唐兴(9)',
        url: domain + '/photos/series-63bdcc1007f87/1.html'
    }, {
        name: 'TIANWEN（鳼岛）(8)',
        url: domain + '/photos/series-63bdcbdb38f2a/1.html'
    }, {
        name: 'L.P.VISION(6)',
        url: domain + '/photos/series-63b14e571521d/1.html'
    }, {
        name: '轰趴猫(265)',
        url: domain + '/photos/series-5f1ae6caae922/1.html'
    }, {
        name: 'PANS新版(431)',
        url: domain + '/photos/series-6310ce9b90056/1.html'
    }, {
        name: '相约中国(233)',
        url: domain + '/photos/series-5f1dcdeaee582/1.html'
    }, {
        name: '潘多拉(192)',
        url: domain + '/photos/series-5f23c44cd66bd/1.html'
    }, {
        name: '韩国模特养成(106)',
        url: domain + '/photos/series-5f1d345bf2a1d/1.html'
    }, {
        name: '潘多拉(189)',
        url: domain + '/photos/series-5f23c44cd66bd/1.html'
    }, {
        name: '推女郎(90)',
        url: domain + '/photos/series-5f14a5eb5b0d7/1.html'
    }, {
        name: '无忌影社(92)',
        url: domain + '/photos/series-619a92aa1fa7a/1.html'
    }, {
        name: 'JVID(75)',
        url: domain + '/photos/series-637b2029d2347/1.html'
    }, {
        name: '深夜企划(44)',
        url: domain + '/photos/series-638e5a60b1770/1.html'
    }, {
        name: '北京天使(41)',
        url: domain + '/photos/series-622c7f95220a4/1.html'
    }, {
        name: 'A4U(34)',
        url: domain + '/photos/series-5f60b98248a81/1.html'
    }, {
        name: 'DDY(28)',
        url: domain + '/photos/series-5f15f727df393/1.html'
    }, {
        name: '东莞V女郎(26)',
        url: domain + '/photos/series-5f22ea422221c/1.html'
    }, {
        name: 'FantasyFactory(28)',
        url: domain + '/photos/series-5f889afb37619/1.html'
    }, {
        name: 'ISS系列(25)',
        url: domain + '/photos/series-646c69b675f3d/1.html'
    }, {
        name: 'TPimage(23)',
        url: domain + '/photos/series-5f7a0a80d3d66/1.html'
    }, {
        name: 'SK丝库(21)',
        url: domain + '/photos/series-5f382ba894af4/1.html'
    }, {
        name: 'Loozy(18)',
        url: domain + '/photos/series-62888afad416b/1.html'
    }, {
        name: '美尤网(15)',
        url: domain + '/photos/series-5f23c8a10708a/1.html'
    }, {
        name: 'SuperPoseBook(25)',
        url: domain + '/photos/series-62a0a15911f16/1.html'
    }, {
        name: 'HT95(11)',
        url: domain + '/photos/series-5f382ba894af4/1.html'
    }, {
        name: 'Graphis(9)',
        url: domain + '/photos/series-6450b47c9db0b/1.html'
    }, {
        name: '伊甸园写真(7)',
        url: domain + '/photos/series-63cf9666a9239/1.html'
    }],
    [{
        name: '性感写真分类',
        url: ''
    }, {
        name: '全部性感写真()',
        url: domain + '/photos/kind-1/1.html'
    }, {
        name: '秀人网旗下(10329)',
        url: domain + '/photos/series-63959b9c87149/1.html'
    }, {
        name: '秀人网(6604)',
        url: domain + '/photos/series-5f1476781eab4/1.html'
    }, {
        name: '蜜桃传媒(971)',
        url: domain + '/photos/series-5fe8403919165/1.html'
    }, {
        name: '爱蜜社(674)',
        url: domain + '/photos/series-5f71afc92d8ab/1.html'
    }, {
        name: '模范学院(560)',
        url: domain + '/photos/series-5f181625966a6/1.html'
    }, {
        name: '花漾(510)',
        url: domain + '/photos/series-5fc4ce40386af/1.html'
    }, {
        name: '美媛馆(504)',
        url: domain + '/photos/series-5f1495dbda4de/1.html'
    }, {
        name: '语画界(504)',
        url: domain + '/photos/series-601ef80997845/1.html'
    }, {
        name: '尤蜜荟(299)',
        url: domain + '/photos/series-5f184ff551888/1.html'
    }, {
        name: '蜜桃社(149)',
        url: domain + '/photos/series-5f1dd5a7ebe9a/1.html'
    }, {
        name: '瑞丝馆(88)',
        url: domain + '/photos/series-61263de287e2f/1.html'
    }, {
        name: 'FEILIN嗲囡囡(88)',
        url: domain + '/photos/series-5f14a3105d3e8/1.html'
    }, {
        name: '爱尤物(77)',
        url: domain + '/photos/series-5f148046cb2c7/1.html'
    }, {
        name: '尤物馆(175)',
        url: domain + '/photos/series-60673bec9dd11/1.html'
    }, {
        name: '星颜社(61)',
        url: domain + '/photos/series-6141c88882a36/1.html'
    }, {
        name: '影私荟(22)',
        url: domain + '/photos/series-63d435352808c/1.html'
    }, {
        name: '魅妍社(3)',
        url: domain + '/photos/series-60f4691dd2f2d/1.html'
    }, {
        name: '模特联盟(3)',
        url: domain + '/photos/series-6218cfb82b6cd/1.html'
    }, {
        name: '未分类性感写真(453)',
        url: domain + '/photos/series-618e48e381edf/1.html'
    }, {
        name: 'ArtGravia(144)',
        url: domain + '/photos/series-60a4a953ca563/1.html'
    }, {
        name: '爱丝(132)',
        url: domain + '/photos/series-5f15f389e993e/1.html'
    }, {
        name: '果团网(132)',
        url: domain + '/photos/series-5f1817b42772b/1.html'
    }, {
        name: 'PANS写真(115)',
        url: domain + '/photos/series-5f1482b3a68d6/1.html'
    }, {
        name: '妖精社(99)',
        url: domain + '/photos/series-5f4b5f4eb8b71/1.html'
    }, {
        name: '蜜丝(73)',
        url: domain + '/photos/series-5f2089564c6c2/1.html'
    }, {
        name: '头条女神(53)',
        url: domain + '/photos/series-5f14806585bef/1.html'
    }, {
        name: 'Pure Media(55)',
        url: domain + '/photos/series-6224e755e21f4/1.html'
    }, {
        name: '尤美(39)',
        url: domain + '/photos/series-61b997728043b/1.html'
    }, {
        name: 'SLADY猎女神(20)',
        url: domain + '/photos/series-605ed5233ca57/1.html'
    }, {
        name: '推女神(11)',
        url: domain + '/photos/series-5f20324cad61d/1.html'
    }]
];
var cfiction = [{
    name: '全部小说(15511)',
    url: domain + '/fictions/1.html'
}, {
    name: '编辑推荐(3591)',
    url: domain + '/fictions/tag-编辑推荐/1.html'
}, {
    name: '人妻女友(4688)',
    url: domain + '/fictions/tag-%e4%ba%ba%e5%a6%bb女友/1.html'
}, {
    name: '学生校园(1400)',
    url: domain + '/fictions/tag-学生校园/1.html'
}, {
    name: '伴侣交换(237)',
    url: domain + '/fictions/tag-伴侣交换/1.html'
}, {
    name: '都市生活(3232)',
    url: domain + '/fictions/tag-都市生活/1.html'
}, {
    name: '动漫游戏(72)',
    url: domain + '/fictions/tag-动漫游戏/1.html'
}, {
    name: '名人明星(86)',
    url: domain + '/fictions/tag-名人明星/1.html'
}, {
    name: '经验故事(536)',
    url: domain + '/fictions/tag-经验故事/1.html'
}, {
    name: '古典玄幻(1052)',
    url: domain + '/fictions/tag-古典玄幻/1.html'
}, {
    name: '家庭乱伦(3903)',
    url: domain + '/fictions/tag-家庭%e4%b9%b1%e4%bc%a6/1.html'
}, {
    name: '多人群交(1733)',
    url: domain + '/fictions/tag-多人群交/1.html'
}, {
    name: '公司职场(977)',
    url: domain + '/fictions/tag-公司职场/1.html'
}, {
    name: '露出暴露(265)',
    url: domain + '/fictions/tag-露出暴露/1.html'
}, {
    name: '强暴性虐(1505))',
    url: domain + '/fictions/tag-强暴性虐/1.html'
}, {
    name: '西方主题(139)',
    url: domain + '/fictions/tag-西方主题/1.html'
}, {
    name: '同性主题(125)',
    url: domain + '/fictions/tag-同性主题/1.html'
}, {
    name: '绿帽主题(1261)',
    url: domain + '/fictions/tag-绿帽主题/1.html'
}, {
    name: '长篇连载(3511)',
    url: domain + '/fictions/tag-长篇连载/1.html'
}, {
    name: '经典回忆(99)',
    url: domain + '/fictions/tag-经典回忆/1.html'
}, {
    name: '有声小说(59)',
    url: domain + '/fictions/tag-有声小说/1.html'
}];
var sort_fiction = [{
    name: '篇幅不限',
    url: ''
}, {
    name: '短篇',
    url: '/length-1'
}, {
    name: '中长篇',
    url: '/length-2'
}, {
    name: '超长篇',
    url: '/length-3'
}];
var cmodel = [{
    name: '全部模特(1660)',
    url: domain + '/models/1.html'
}, {
    name: '华人模特(1020)',
    url: domain + '/models/type-4/1.html'
}, {
    name: '韩国模特(64)',
    url: domain + '/models/type-5/1.html'
}, {
    name: '华人女优(445)',
    url: domain + '/models/type-7/1.html'
}, {
    name: '日本女优(800)',
    url: domain + '/models/type-8/1.html'
}, {
    name: '日本男优(157)',
    url: domain + '/models/type-9/1.html'
}, {
    name: '名人明星(5)',
    url: domain + '/models/type-10/1.html'
}];
var sort_model = [{
    name: '浏览最多',
    url: ''
}, {
    name: '作品最多',
    url: '/sort-works'
}, {
    name: '最新加入',
    url: '/sort-recently'
}];
var ctorrent = [{
    name: '最新资源',
    url: domain + '/torrents/1.html'
}, {
    name: '视频下载(网盘)',
    url: domain + '/torrents/category-KVideo/1.html'
}, {
    name: '套图下载(网盘)',
    url: domain + '/torrents/category-KPhoto/1.html'
}, {
    name: '国产原版(磁链)',
    url: domain + '/torrents/category-U3C3/1.html'
}, {
    name: '视频下载(磁链)',
    url: domain + '/torrents/category-Video/1.html'
}, {
    name: '图片下载(磁链)',
    url: domain + '/torrents/category-Photo/1.html'
}, {
    name: '游戏下载(磁链)',
    url: domain + '/torrents/category-Game/1.html'
}, {
    name: '图书下载(磁链)',
    url: domain + '/torrents/category-Book/1.html'
}, {
    name: '其他下载(磁链)',
    url: domain + '/torrents/category-Other/1.html'
}];
var sort1_torrent = [{
    name: '新表',
    url: ''
}, {
    name: '新表',
    url: '/tb-1'
}];
var sort2_torrent = [{
    name: '更新时间',
    url: ''
}, {
    name: '下载最多',
    url: '/sort-read'
}];`;
return data;
}
