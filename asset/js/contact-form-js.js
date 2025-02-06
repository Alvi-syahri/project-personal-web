function submitForm(event){
    event.preventDefault()

let name = document.getElementById("name").value 
let email = document.getElementById("email").value
let subjek = document.getElementById("subjek").value
let skill = document.getElementById("skill").value
let massage = document.getElementById("massage").value


let emailtujuan = 'alvisyahri01@gmail.com'
let a = document.createElement('a')
a.href =`mailto:${emailtujuan}?subjek=${subjek}&body=${`hallo nama saya ${name}.silahkan hubungi saya si ${email}.skil saya adalah ${skill}.berikut yang ingin di sampaikan: ${massage}`}`

a.click()
}
    
