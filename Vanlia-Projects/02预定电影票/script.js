const seatContainer=document.querySelector('.seat-container');
// const seats=document.querySelectorAll('.row .seat:not(.occupied)')
const seats=document.querySelectorAll('.row .seat:not(.occupied) use')
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelector=document.getElementById('movie')
let ticketPrice=+movieSelector.value


//选择票价 并更新数据
movieSelector.addEventListener('change',(e)=> {
    console.log(+e.target.value)
    console.log(typeof e.target.value)
    ticketPrice =+e.target.value
    console.log(ticketPrice)
    updateSelectCount()

})

console.log(seats)
//选择座位 事件代理
seatContainer.addEventListener('click',(e)=>{
    // console.log(e.target)
    //判断点击的目标元素是否包含seat类名
    //因为设置了图标，所以我们判断use的父级元素的父级元素
    if(e.target.parentElement.parentElement.classList.contains('seat')
        && !e.target.parentElement.parentElement.classList.contains('occupied')
    ){
        //切换座位颜色
        e.target.parentElement.parentElement.classList.toggle('selected')
        //更新数据
        updateSelectCount()


    }
    // console.log(e.target.parentElement)
},false)

//更新数据
function updateSelectCount() {
    const selectedSeats=document.querySelectorAll(".row .seat.selected")
    console.log(selectedSeats)
    const selectedSeatsCount=Array.from(selectedSeats).length
    console.log(selectedSeatsCount)
    count.innerText=selectedSeatsCount
    total.innerText=selectedSeatsCount*ticketPrice
}
