export class Tabs{
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
