let box=document.querySelector('.box')
let text=document.querySelector('.text')
let addBtn=document.querySelector('.add')
let ipt=document.querySelector('.ipt')
console.log(box)
box.addEventListener('click',(e)=>{
    console.log(e.currentTarget)
    text.innerText=[...e.currentTarget.querySelectorAll('input')]  //将获取的NodeList变成数组
        .filter(item=>item.checked) //过滤选中的
        .map(item=>item.value) //过滤选中之后，得到选中项的值
        .join(',') //用，拼接
})

addBtn.addEventListener('click',e=>{
    let node=document.createElement('li')
    node.innerText=ipt.value
    let checkbox=document.createElement('input')
    checkbox.type='checkbox'
    checkbox.value=ipt.value
    node.appendChild(checkbox)
    box.appendChild(node)
})


