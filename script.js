alert("اهلا بك في موقعي الدي سيحسب درجتك")
let grade = prompt("اكتب درجتك بالارقام")

console.log("grade")

if(grade>=90 && grade<100) {
    console.log("لقد حصلت على امتياز 🥳")
}else if(grade>=80 && grade<100 ){
    console.log("لقد حصلت على جيد جداً🤩")
}else if(grade>=70 && grade<100 ){
    console.log("لقد حصلت على جيد🙂")
}else if(grade>=60 && grade<100){
    console.log("لقد حصلت على مقبول😕")
}else if(grade>=50 && grade<100){
    console.log("لقد حصلت على ضعيف☹️")
}else{
    console.log("راسب💔")
}