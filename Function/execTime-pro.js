/*
写一个函数 execTime, 参数 t：时间毫秒数； 参数 callback： 回调函数

function execTime(t, callback) {
    //补全代码
}

console.log(1)
execTime(3000, function(){
    console.log(3)
})
console.log(2)
执行结果：立即输出1和2，3秒后输出3
 */
function execTime(t,callback) {
//补全代码
    setTimeout(callback,t);
    return ;

}
console.log(1);
execTime(3000,function () {
    console.log(3);
})
console.log(2)
