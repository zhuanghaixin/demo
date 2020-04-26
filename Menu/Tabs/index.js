// //一开始让第一个tab激活并显示出来
// $('.tabs').each((index,element)=>{
//     console.log(element);
//     $(element).children('.tabs-bar').children('li').eq(0).children('li').eq(0).addClass('active')
//     $(element).children('.tabs-content').children('li').eq(0).addClass('active')
// })
//
//
//
// //点那个tab那个tab激活并显示
// $('.tabs').on('click','.tabs-bar>li',(e)=> {
//     let $li = $(e.currentTarget)
//     console.log($li);
//     $li.addClass('active').siblings().removeClass()
//     let index = $li.index()
//     $content=$li.closest('.tabs').find('.tabs-content>li').eq(index)
//     $content.addClass('active').siblings().removeClass()
// })


//封装
// function Tabs(selector){
//     this.elements=$(selector)
//     //一开始让第一个tab激活并显示出来
//     this.elements.each((index,element)=>{
//         console.log(element);
//         $(element).children('.tabs-bar').children('li').eq(0).children('li').eq(0).addClass('active')
//         $(element).children('.tabs-content').children('li').eq(0).addClass('active')
//     })
//     this.elements.on('click','.tabs-bar>li',(e)=> {
//         let $li = $(e.currentTarget)
//         console.log($li);
//         $li.addClass('active').siblings().removeClass()
//         let index = $li.index()
//         $content=$li.closest('.tabs').find('.tabs-content>li').eq(index)
//         $content.addClass('active').siblings().removeClass()
//     })
// }
// let tabs=new Tabs('.tabs')

//优化
// function Tabs(selector){
//     console.log(this)
//     this.elements=$(selector)
//     this.init()
//     console.log(this.constructor);
//     this.bindEvents()
//
// }
// Tabs.prototype.init=function(){
//     //一开始让第一个tab激活并显示出来
//     this.elements.each((index,element)=>{
//         $(element).children('.tabs-bar').children('li').eq(0).children('li').eq(0).addClass('active')
//         $(element).children('.tabs-content').children('li').eq(0).addClass('active')
//     })
// }
// Tabs.prototype.bindEvents=function(){
//     //点那个tab那个tab激活并显示
//     this.elements.on('click','.tabs-bar>li',(e)=> {
//         let $li = $(e.currentTarget)
//         $li.addClass('active').siblings().removeClass()
//         let index = $li.index()
//         $content=$li.closest('.tabs').find('.tabs-content>li').eq(index)
//         $content.addClass('active').siblings().removeClass()
//     })
// }
//
// let tabs=new Tabs('.tabs')

//es6 class
class Tabs{
    constructor(selector){
        this.elements=$(selector)
        this.init()
        this.bindEvents()
    }
    init(){
        //一开始让第一个tab激活并显示出来
        this.elements.each((index,element)=>{
            $(element).children('.tabs-bar').children('li').eq(0).children('li').eq(0).addClass('active')
            $(element).children('.tabs-content').children('li').eq(0).addClass('active')
        })
    }
    bindEvents(){
        //点那个tab那个tab激活并显示
        this.elements.on('click','.tabs-bar>li',(e)=> {
            let $li = $(e.currentTarget)
            $li.addClass('active').siblings().removeClass()
            let index = $li.index()
            var $content=$li.closest('.tabs').find('.tabs-content>li').eq(index)
            $content.addClass('active').siblings().removeClass()
        })
    }
}
let tabs=new Tabs('.tabs')

//导入
import {Tabs} from './wheel.js'
let tabs=new Tabs('.tabs')

