function banner(blist, time, Url, id) {
    var d = []   
    if (id == undefined || typeof(id) != 'string') {
        id = '0';
    }
    let x = getMyVar(id + 'x', '0')
        clearMyVar(id + 'x')
        if (x > blist.length - 1) {
            x = 0
        }
if (getItem(id + '停止') == 0) {
var url = blist[x].img + $("#noLoading#").lazyRule((x,id) => {
    var fiieName = input.includes('storage') ? input.split("/")[10]:input.split("#")[1];
    return 'select://' + JSON.stringify({
                            "title": '删除'+fiieName,
                            "options": ["取消", "确定"],
                            col: 2,
                            js: $.toString((x, inputs, id) => {
                                if ("确定" == input) {  
clearMyVar(id + 'url');
refreshPage();                                storage0.putMyVar(id + 'url', x);
putMyVar(id + '删', '0');                                  refreshPage();
if (/mwm\.moe/.test(inputs)) {
toast('最后一张无法删除');
}else{                                  toast('图片已删除');
}
                                }
                                if ("取消" == input) {}
                            }, x, input,id)
                        });
},x,id);
}else{
var url = Url
}
    d.push({
        img: blist[x].img,
        desc: '0',
        url: url,
        col_type: 'card_pic_1',
        extra: {
            id: id,
            longClick: [{
                title: ' 停止 ',
                js: $.toString((id) => {
                    setItem(id + '停止', '0')          
                    refreshPage()
                    toast('轮播已停止')
                },id)
            }, {
                title: ' 轮播 ',
                js: $.toString((id) => {
                    clearItem(id + '停止')
                    refreshPage()
                    toast('轮播已打开')
                },id)
            }, {
                title: ' 网络 ',
                js: $.toString((id) => {
                putMyVar(id + '添加', '0')
                    return $(getItem('p'), "请输入网址,支持本地图片地址，确定后，可以继续加图片").input(function(id){
                        if (/http|storage|hiker/.test(input)) {
                            setItem('p', input);                            setItem(id + 'img', input);                            refreshPage();
                            return $(getItem('p'), "请输入网址,支持本地图片地址，确定后，可以继续加图片").input(arguments.callee,id);
                        } else {
                            toast('不是正确网址')
                        }
                    },id)
                },id)
            }, {
                title: ' 本地 ',
                js: $.toString((id) => {
            putMyVar(id + '添加', '0')
                    
            return "fileSelect://" + $.toString((id) => {
                setItem(id + 'img', input)
                
                refreshPage();
                toast('文件已添加')
                       
},id)
                },id)
            }, {
                title: ' 删除 ',
                    js: $.toString((id) => {
                        return 'select://' + JSON.stringify({
                            "title": "选择删除",
                            "options": ["删除最近添加", "删除全部图片"],
                            col: 2,
                            js: $.toString((id) => {
                                if ("删除最近添加" == input) {
                                  setItem(id + '删除', '0');
                                    refreshPage();
                                    toast('图片已删除');
                                }
                                if ("删除全部图片" == input) {
                                    clearItem(id + 'arr');
                                    refreshPage();
                                    toast('图片已删除')
                                }
                            },id)
                        });
                    },id)
            }]
        }
    })
    x++
    putMyVar(id + 'x', x)
    registerTask(id, time, $.toString((blist, id) => {
        let i = getMyVar(id + 'i', '0')
        clearMyVar(id + 'i')
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
        putMyVar(id + 'i', i)
    }, blist, id))
    if (getItem(id + '停止') == 0) {
        unRegisterTask(id);
    }
    return d
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

var arr = storage0.getItem(id + 'arr'); 
clearItem(id + 'arr');
var img = getItem(id + 'img');
clearItem(id + 'img');
if (img != 'undefined') {
    arr.push({
        img:img.includes('storage') ? img : img+'#' + Math.random()
    });    JSON.stringify(arr).includes('mwm.moe') ? arr.shift() : '';
}
var j = storage0.getMyVar(id + 'url');
if (getMyVar(id + '添加') !== '0' && getMyVar(id + '删') === '0' && arr != '') {
//log('存在')
arr.splice(j, 1)
};
clearMyVar(id + 'url');
clearMyVar(id + '删');
clearMyVar(id + '添加');
if (getItem(id + '删除') == 0) {
  arr.pop();
    }
clearItem(id + '删除');
if (arr == '') {
arr = [{
    'img': 'https://t.mwm.moe/moe/'
}];
}
storage0.setItem(id + 'arr', arr);`
}