
export const MapFilterExample = () => {
   let number_array: number[] = [2, 4, 6, 8, 10]

   // filter가 오면 배열의 요소를 element 로 뽑음
   // element % 4 === 0 은 아래를 의미
   // 배열의 날개 요소를 4로 나눈 나머지가 0이 맞는지? true / false
   // filter 조건은 결과과 true만 뽑아감

   let result_array: number[] = 
       number_array.filter(element => element % 4 ===0)     

      //  만약 for 루프로 구성한다면
      //  if(배열 요소 % 4 ===0) {
      //       result_array.push(배열 요소)
      //  }
  
    return (
    <div>
        <h3>javascript Filter Function</h3>

            <pre>{
               `               
number_array = ${number_array}
result_array = ${result_array}
               `  
            }</pre>
         </div>
    )
}

