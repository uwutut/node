    // 변수 만들기//

    //a = 10
    //console.log(a)

    //const b = 20 // (정)상수: 한 번 정하면 바뀌지 않음
    //console.log(b)

    //a = a+40
    //console.log(a)

   //var num1 = 10
    //var num2 = 30
    //var s = `${num1} + ${num2} = ${num1 + num2}` // ` : 포메팅 방식
    //console.log(s)

    //문자열

    //s = "hello"
    //console.log(s[0]) // 인덱스
    //console.log(s.slice(1,3)) // 슬라이싱

    // 리스트

    //a = [1,2,3]
    //console.log(a)

    //c = Array(10) // 빈 공간에 리스트를 만들 떄 사용한다.
    //console.log(c)

    // 추가
    //c.push(5)
    //console.log(c)

//삭제
 //   a.pop() // 맨 뒤
  //  console.log(a)
   // a.shift(5) // 맨 앞
   // console.log(a)

// 조건
//a = 10
//if (a > 10){
    //console.log("크다")
//}
//else if(a < 10){
    //console.log("작다")
//}
//else{
    //console.log("같다")
//}

//반복ㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱㄱ
//for(var i = 0 ; i < 10 ; i++){
    //console.log(i)
//}
//i = 0
////while(i < 10){
    //i++ 
   //console.log(i)
//}



//for(var i = 1 ; i < 20; i++) {  
    //console.log(i + '단')
    //for(var j = 1; j < 10; j++) {    
        //console.log(i + ' * ' + j + ' = ' + (i*j));  }
    //}


//sum = 0
//for(i = 1 ; i <= 3452 ; i++) {
  //sum += i
//}
//console.log(sum)

// 객체
var 공룡 = {
    x : 10,
    y : 20,
    w : 100,
    h : 100,
    draw(){
        console.log("this.x")
        console.log("그리기 함수 입니다.")
    }
}
공룡.draw