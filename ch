function yj() {
var d = [];
try {
    var hitokoto = JSON.parse(fetch('https://v1.jinrishici.com/all.json', {}));
    d.push({
        title: hitokoto.content,
        desc: '类别：' + hitokoto.category +
            '\n作者：' + hitokoto.author + '《' + hitokoto.origin + '》',
        col_type: 'pic_1_card',
        url: "http://m.yugaopian.cn/",
        pic_url: 'https://cdn.seovx.com/ha/?mom=302'
    });
} catch (e) {
d.push({            
            pic_url: 'https://cdn.seovx.com/ha/?mom=302',           
            col_type: 'pic_1_card',
        })
}   
  
    d.push({
        title: "Codeberg",
        img: 'https://codeberg.org/favicon.ico',
        url: 'https://codeberg.org/liuzaoyue/h/src/branch/main/',
   }, {
       title: "GitLab",
       img: 'https://gitlab.com/favicon.ico',
       url: 'https://gitlab.com/ha1170552/h/-/blob/2c9d2673fd092b4075d67f5b7dc8f3d80162ecc8/share-home-rules.json',
   }, {
       title: "Gitee",
       img: 'https://gitee.com/favicon.ico',
       url: 'https://e.gitee.com/liuzaoyue80/repos/liuzaoyue80/my/tree/master/',
   }, {
       title: "GitCode",
       img: 'https://gitcode.net/favicon.ico',
       url: 'https://gitcode.net/liuzaoyue/hai/-/blob/master/share-home-rules.json',
   }, {
       title: "CODING",
       img: 'https://liuzaoyue.coding.net/static/favicon.ico',
       url: 'https://liuzaoyue.coding.net/p/haikuo/d/hai/git',
   })
setResult(d);
}
