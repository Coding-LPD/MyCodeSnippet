/*
 * 常用js函数
 * By Link
 */

/* 目录 */
/* 字符串相关 */
/* 时间相关 */
/* 随机算法相关 */
/* jquery相关 */
/* 网络相关 */



/* 字符串相关 */

/**
 * 字符串格式化
 *    str: 字符串   要格式化的字符串
 * params: 数组     要代入的参数数组,params[0]替换字符串中的{0},依次类推
 */
function stringReplace(str, params) {
    var i, exp;
    
    for (i=0; i<params.length; i++) {
        exp = '{' + i + '}';
        str = str.replace(exp, params[i]);
    }
    return str;
}

/**
 * 检查手机号码格式是否正确(正确应为以1开头的11位数字串)
 * phoneNum: 待检测的手机号码
 */
function checkPhoneNum(phoneNum) {
    var reg = /^1\d{10}$/
    if (reg.test(phoneNum)) {
        return true
    } else {
        return false;
    }
}


/* 时间相关 */

/**
 * 获取两个时间点相差的月份数
 * start: Date或string
 *   end: Date或string
 * 附: string类型必须符合'yyyy-MM-dd'格式
 */
function getMonthBetween(start, end) {
    var startDate = start, 
        endDate = end;
    
    if (!(start instanceof Date)) {
        startDate = new Date(start);
    }
    if (!(end instanceof Date)) {
        endDate = new Date(end);
    }
    return endDate.getMonth() - startDate.getMonth();
}

/**
 * 获取当前时间的时间戳(秒)
 */
function getTimestamp() {
    return (Date.parse(new Date()) / 1000).toString();
}


/* 随机算法相关 */

/**
 * 产生指定范围内的一个随机整数
 * min: 随机数最小值
 * max: 随机数最大值
 */
function getRandomNum(min,max)
{   
    var range = max - min;   
    var rand = Math.random();   
    return(min + Math.round(rand * range));   
} 

/**
 * 产生指定位数的随机数串
 * n: 随机数串的位数
 */        
function generateMixed(n) {
    var jschars = ['0','1','2','3','4','5','6','7','8','9'],
        res = "";
        
    for(var i = 0; i < n ; i ++) {
        var id = Math.ceil(Math.random()*9);
        res += jschars[id];
    }
    return res;
}


/* jquery相关 */

/**
 * 对一个jquery元素的内容进行滚动
 * 内容有滚动则返回true
 * 内容无滚动则返回false
 */
function scrollContent(jqEle, step) {
    var last = jqEle.scrollLeft();
    jqEle.scrollLeft(jqEle.scrollLeft() + step);
    // 比较滚动之后，scrollLeft是否值相同，相同表示无滚动，不相同表示有滚动
    if (last == jqEle.scrollLeft()) {
        return false;
    } else {
        return true;
    }
}


/* 网络相关 */

/**
 * 获取url参数
 * name: 参数名
 */
function queryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}
