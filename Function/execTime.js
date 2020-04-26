/*
写一个函数 execTime， 参数: 时间毫秒数；作用：什么都不做，但函数执行耗时为参数传递的毫秒数
function execTime(t) {
    // 补全代码
}
console.log(1)
execTime(3000)
console.log(2)  // 3秒后输出2
 */

function execTime(t){
    let start=Date.now()
    // let start=new Date().getTime()
    // let start= +new Date()
   console.log(start)
    while(Date.now()-start<=t){

    }
    return
}
console.log(1)
execTime(3000)
console.log(2)
