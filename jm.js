function FonHen_JieMa(u){      
        var uArr = u.split("*");
            var n = uArr.length;
                var x = '';
                    for (i = 1; i < n - 1; i++) {
                                x += String.fromCharCode(uArr[i]);
                    } 
                    return x
}
