//获取元素
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')


//事件监听
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkRequired([username,email,password,passwordConfirm])

    checkLength(username,3,15)
    checkLength(email,6,12)
    checkEmail(email)
    checkPasswordsMatch(password,passwordConfirm)

})

//检查长度
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getKeywords(input)}至少需要${min}个字符`)
    }else if(input.value.length>max){
        showError(input,`${getKeywords(input)}至少需要${max}个字符`)
    }

}


//显示错误信息
function showError(input, message) {
    const formControl = input.parentElement
    formControl.classList.remove('success')
    formControl.classList.add('error')
    const small=formControl.querySelector('small')
    small.innerText=message
    small.classList.add('show')

}
//显示正确信息
function showSuccess(input){
    const formControl = input.parentElement
    formControl.classList.remove('error')
    formControl.classList.add('success')
    const small=formControl.querySelector('small')
    small.classList.remove('show')
}

//检查邮箱是否合法
function checkEmail(input) {
    console.log(email)
    const reg=/^([A-Za-z0-9_\.])+\@([A-Za-z0-9_\.])+\.([A-Za-z0-9]{2,4}$)/

     if(reg.test(input.value.trim())){
         showSuccess(input)
     }else{
         showError(input,'邮箱格式错误')
     }
}


//表单验证函数封装
function checkRequired(inputArr){
    inputArr.forEach((input)=>{
        console.log(input)
       if(input.value.trim()===''){
           showError(input,`${getKeywords(input)}为必填项`)
       }else{
           showSuccess(input)
       }
    })
}
//提取关键字
function getKeywords(input){
    return input.placeholder.slice(0,3)
}


//验证密码是否匹配
function checkPasswordsMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'密码不匹配')
    }
}
