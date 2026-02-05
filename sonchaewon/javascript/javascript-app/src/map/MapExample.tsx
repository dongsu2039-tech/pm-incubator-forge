export const MapExample = () =>{
   //number[] 얘는 뭐지? typescript라고 type을 명시하는 작업
   // 즉, 숫자배열임을 명시하는 행위입니다.
   let number_array: number[] = [2,4,6,8,10]

   //number_array.map 동작 순서
   //1.number_array 내부의 요소를 하나씩 꺼내옴
   //2.
   //아래 문장에서 num은 element라고도 명시 가능
   let square_result_array: number[] = number_array.map(num => num * num)
   
   
    return (
    <div>
        <h3> 자바스크립트 Map(Hash방식) </h3>
        <pre>{
            `
    number_array = ${number_array}
    square_result_array = ${square_result_array}
            `
            
           
        }</pre>
    </div>
 )
}