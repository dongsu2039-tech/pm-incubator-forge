
export const MapReduceExample = () => {
   let number_array: number[] = [2, 4, 6, 8, 10]
   
   // reduce의 경우엔 아래와 같이 연산
   // .reduce((누산 대상, 배열의 요소) => 누산대상 + 배열요소, 초기값)
   // for loop 구성을 단순화 시킨 작업

   let result_array: number = 
      number_array.reduce((accumulator, element) => accumulator + element, 0)     
  
    return (
    <div>
        <h3>javascript Reduce Function</h3>

            <pre>{
               `               
number_array = ${number_array}
square_result_array = ${result_array}
               `  
            }</pre>
         </div>
    )
}

