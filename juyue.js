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
  function ocr(codeurl, headers) {
    headers = headers || {};
    let img = convertBase64Image(codeurl, headers).replace('data:image/jpeg;base64,', '');
    let code = request('https://api.xhofe.top/ocr/b64/text', {
        body: img,
        method: 'POST',
        headers: {
            "Content-Type": "text/html"
        }
    });
                             code = code.replace(/O|o/g, '0');
                             code = code.replace(/Q|q/g, '0');
                             code = code.replace(/i|I/g, '1');
                             code = code.replace(/L|l/g, '1'); 
                             code = code.replace(/x|X/g, '4');
                             code = code.replace(/q|g/g, '9');
                             code = code.replace(/b/g, '6');
    log('识别验证码：' + code);
    return code;
}  