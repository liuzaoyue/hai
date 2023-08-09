function banner(blist, time, url, id) {
    return `
    var d = []   
    if (id == undefined || typeof(id) != 'string') {
        id = '0';
    }
    let i = getMyVar('x', '0')
        clearMyVar('x')
        if (i > blist.length - 1) {
            i = 0
        }
var tz = getItem('停止')
if (tz == 0) {
var url = blist[i].img + $("#noLoading#").lazyRule((i) => {
    var fiieName = input.includes('storage') ? input.split("/")[10]:input.split("#")[1];
    return 'select://' + JSON.stringify({
                            "title": '删除'+fiieName,
                            "options": ["取消", "确定"],
                            col: 2,
                            js: $.toString((i, aa) => {
                                if ("确定" == input) {  
clearMyVar('url');
refreshPage();                                storage0.putMyVar('url', i);
putMyVar('删', '0');                                  refreshPage();
if (/mwm\.moe/.test(aa)) {
toast('最后一张无法删除');
}else{                                  toast('图片已删除');
}
                                }
                                if ("取消" == input) {}
                            }, i, input)
                        });
}, i);
}else{
var url = url
}
    d.push({
        img: blist[i].img,
        desc: '0',
        url: url,
        col_type: 'card_pic_1',
        extra: {
            id: id,
            longClick: [{
                title: ' 停止 ',
                js: $.toString(() => {
                    setItem('停止', '0')          
                    refreshPage()
                    toast('轮播已停止')
                })
            }, {
                title: ' 轮播 ',
                js: $.toString(() => {
                    clearItem('停止')
                    refreshPage()
                    toast('轮播已打开')
                })
            }, {
                title: ' 网络 ',
                js: $.toString(() => {
                putMyVar('添加', '0')
                    return $(getItem('p'), "请输入网址,支持本地图片地址，确定后，可以继续加图片").input(function(){
                        if (/http|storage|hiker/.test(input)) {
                            setItem('p', input)
                            setItem('img', input)
                            refreshPage()
                            return $(getItem('p'), "请输入网址,支持本地图片地址，确定后，可以继续加图片").input(arguments.callee);
                        } else {
                            toast('不是正确网址')
                        }
                    })
                })
            }, {
                title: ' 本地 ',
                js: $.toString(() => {
            putMyVar('添加', '0')
                    
            return "fileSelect://" + $.toString(() => {
                setItem('img', input)
                
                refreshPage();
                toast('文件已添加')
                       
})
                })
            }, {
                title: ' 删除 ',
                    js: $.toString(() => {
                        return 'select://' + JSON.stringify({
                            "title": "选择删除",
                            "options": ["删除最近添加", "删除全部图片"],
                            col: 2,
                            js: $.toString(() => {
                                if ("删除最近添加" == input) {
                                  setItem('删除', '0');
                                    refreshPage();
                                    toast('图片已删除');
                                }
                                if ("删除全部图片" == input) {
                                    clearItem('arr');
                                    refreshPage();
                                    toast('图片已删除')
                                }
                            })
                        });
                    })
            }]
        }
    })
    i++
    putMyVar('x', i)
    registerTask(id, time, $.toString((blist, id) => {
        let i = getMyVar('i', '0')
        clearMyVar('i')
        if (i > blist.length - 1) {
            i = 0
        }
        try {
            updateItem(id, {
                img: blist[i].img,
                desc: '0',
                //url: url,
            })
        } catch (e) {
            log(e.message)
            unRegisterTask('banner')
        }
        i++
        putMyVar('i', i)
    }, blist, id))
    if (getItem('停止') == 0) {
        unRegisterTask(id);
    }
    return d`
}
function arr() {
return `
/*---------------------------------*/
/*
        let arr = []
        let x = Math.floor(Math.random() * 1119)+2
//log(x)
        let html = request('https://pic.netbian.com/index_'+x+'.html', {})
        let list = pdfa(html, '.slist&&li')
    for (let i = 1; i < list.length; i++) {
    arr.push({        
        img: 'https://pic.netbian.com'+pdfh(list[i], 'img&&src'),
        //img: getItem('img').includes('storage'||'file') ? getItem('img', 'https://www.dmoe.cc/random.php') : getItem('img', 'https://www.dmoe.cc/random.php') +'#' + Math.random(),
    })
}
*/
/*---------------------------------*/

var arr = storage0.getItem('arr'); 
clearItem('arr');
var img = getItem('img');
clearItem('img');
if (img != 'undefined') {
    arr.push({
        img:img.includes('storage') ? img : img+'#' + Math.random()
    });    JSON.stringify(arr).includes('mwm.moe') ? arr.shift() : '';
}
var j = storage0.getMyVar('url');
//log(getMyVar('添加'))
if (getMyVar('添加') !== '0' && getMyVar('删') === '0' && arr != '') {
//log('存在')
arr.splice(j, 1)
};
clearMyVar('删');
clearMyVar('添加');
if (getItem('删除') == 0) {
  arr.pop();
    }
clearItem('删除');
if (arr == '') {
arr = [{
    'img': 'https://t.mwm.moe/moe/'
}];
}
storage0.setItem('arr', arr);`
}
