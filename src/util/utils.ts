export default {
    formatDate(time:number|string,type?:string) {//时间戳转化日期
        if (!time) return '';
        let date:Date = new Date(time);
        return format(date, type?type:'yyyy-MM-dd hh:mm');
    },
}

function format(date:Date, fmt:string) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o:any = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for ( let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

function padLeftZero (str:string) {
    return ('00' + str).substr(str.length);
}
