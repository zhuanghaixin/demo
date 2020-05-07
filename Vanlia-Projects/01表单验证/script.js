//获取元素
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')


//事件监听
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(username.value)
    if (username.value === '') {
        showError(username, "用户名必填")
    }else{
        showSuccess(username)
    }

    if (email.value === '') {
        showError(email, "邮箱必填")
    }else if(!isValidEMail(email.value)){
        showError(email, "邮箱格式错误")
    }else{
        showSuccess(email)
    }
    if (password.value === '') {
        showError(password, "密码必填")
    }else{
        showSuccess(password)
    }
    if (passwordConfirm.value === '') {
        showError(passwordConfirm, "用户名必填")
    }else{
        showSuccess(passwordConfirm)
    }

})

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
function isValidEMail(email) {
    console.log(email)
    const reg=/^([A-Za-z0-9_\.])+\@([A-Za-z0-9_\.])+\.([A-Za-z0-9]{2,4}$)/
    return reg.test(String(email))
}

