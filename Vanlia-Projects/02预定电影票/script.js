const seatContainer=document.querySelector('.seat-container');
// const seats=document.querySelectorAll('.row .seat:not(.occupied)')
const seats=document.querySelectorAll('.row .seat:not(.occupied) use') //当前选的座位
const seatS=document.querySelectorAll('.row .seat')
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelector=document.getElementById('movie')
let ticketPrice=+movieSelector.value


//选择票价 并更新数据
movieSelector.addEventListener('change',(e)=> {
    //将下拉框选择的数据 ，之后也要存储
    setMovieData(e.target.selectedIndex,e.target.value)

    console.log(+e.target.value)
    console.log(typeof e.target.value)
    ticketPrice =+e.target.value
    console.log(ticketPrice)
    updateSelectCount()

})
//本地存储索引
function setSelectedSeats(selectedSeats){
    // const seatS=document.querySelectorAll('.row .seat')
    // console.log(seatS);


    const seatIndex=[...selectedSeats].map((seat)=>{
        //获取当前选的座位 所在的索引
        // console.log(seat)
        // console.log([...seatS])
        return [...seatS].indexOf(seat)
    })

    localStorage.setItem('selectedSeats',JSON.stringify(seatIndex))
}
// 保存电影索引值和票价
function setMovieData(index,price){
    localStorage.setItem('selectedMovieIndex',index)
    localStorage.setItem('selectedMoviePrice',price)
}




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

        //本地存储位置索引
    setSelectedSeats(selectedSeats)

    // console.log(seatIndex)
    // console.log(selectedSeats)
    const selectedSeatsCount=Array.from(selectedSeats).length
    // console.log(selectedSeatsCount)
    //更新数量
    count.innerText=selectedSeatsCount
    //更新价格
    total.innerText=selectedSeatsCount*ticketPrice
}

//获取数据渲染样式
function populateUI(){
    //座位渲染
    const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats"))
    console.log(selectedSeats)  //[1,3,5,6]

    if(selectedSeats!==null&&selectedSeats.length>0){
        seatS.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                console.log(seatS)
                console.log(seat)
                console.log(selectedSeats)
                seat.classList.add('selected')
            }
        })

    }
    //选择渲染
    const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
        const selectedtMoviePrice=localStorage.getItem('selectedMoviePrice')
    console.log(selectedtMoviePrice);
        if(selectedMovieIndex!==null){
            movieSelector.selectedIndex=selectedMovieIndex
        }
        if(selectedtMoviePrice!==null){
            ticketPrice=+selectedtMoviePrice
        }
}

populateUI()

//设置初始数据座位和总价
updateSelectCount()
