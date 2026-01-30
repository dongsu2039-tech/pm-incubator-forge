export const MapFilterExample = () => {
    let number_array :number[] = [2, 4, 6, 8, 10]
    
    let result_array: number[] = 
        number_array.filter(element => element % 4 === 0 )
        // filter가 오면 배열의 요소를 element로 뽑음
        // 화살표 이후가 핵심!
        // element %4 === 0 은 아래를 의미
        // 배열의 낱개 요소를 4로 나눈 나머지가 0? True / False
        // filter는 조건의 결과가 True인 것만 뽑음 

        // for Loop로 구현할 경우?
        // for (배열 전체 순회 ) {
        //       if (배열 요소 % 4 === 0) {
        //           result_array.push (배열 요소) 
        //       }
        // }
   

   
    return (
        <div>
            <h3>javascript Filter Function </h3>
            
            <pre>{
                `
number_array = ${number_array}
result_array = ${result_array}
                `        
    
             }</pre>
        </div>
    )
}