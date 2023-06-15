function FonHen_JieMa(u) {
    var uArr = u.split("*");
    var n = uArr.length;
    var x = '';
    for (i = 1; i < n - 1; i++) {
        x += String.fromCharCode(uArr[i]);
    }
    return x
}

function rc4(data, key, t) {
    var pwd = key || 'ffsirllq';
    var cipher = '';
    var key = [];
    var box = [];
    var pwd_length = pwd.length;
    if (t == 1) {
        var data = window0.atob(data);
    } else {
        var data = encodeURIComponent(data);
    }
    var data_length = data.length;

    for (i = 0; i < 256; i++) {
        key[i] = pwd[i % pwd_length].charCodeAt();
        box[i] = i;
    }
    for (j = i = 0; i < 256; i++) {
        j = (j + box[i] + key[i]) % 256;
        tmp = box[i];
        box[i] = box[j];
        box[j] = tmp;
    }
    for (a = j = i = 0; i < data_length; i++) {
        a = (a + 1) % 256;
        j = (j + box[a]) % 256;
        tmp = box[a];
        box[a] = box[j];
        box[j] = tmp;
        k = box[((box[a] + box[j]) % 256)];
        cipher += String.fromCharCode(data[i].charCodeAt() ^ k);
    }
    if (t == 1) {
        return decodeURIComponent(cipher);
    } else {
        return btoa(cipher);
    }
}

function clearM3u8(url) {
    if (url.includes("index.m3u8")) {
        let houz = request(url).split("\n")[2];
        url = url.replace("index.m3u8", houz);
    }
    let f = cacheM3u8(url);
    let c = readFile(f.split("##")[0]);
    if (c.includes("#EXT-X-DISCONTINUITY") && /\d{6}\.ts/.test(c)) {
        let arr = c.split("#EXT-X-DISCONTINUITY");
        let lib = [];
        arr.forEach((key) => {
            if (key.includes('EXT-X-') || /\d{6}\.ts/.test(key)) {
                lib.push(key);
            }
        });
        if (lib.length > 3) {
            writeFile(f.split("##")[0], lib.join('#EXT-X-DISCONTINUITY'));
        }
    }
    return f;
}