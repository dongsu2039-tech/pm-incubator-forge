export const MapReduceExample = () => {
    let number_array :number[] = [2, 4, 6, 8, 10]
    
    let result_array: number = 
        number_array.reduce((accumulator, element) => accumulator +  element, 0 )
        // reduce의 경우엔 아래와 같이 연산
        // ((누산 대상, 배열 요소,) => 누산 대상 + 배열 요소, 초기값)
        
        // for Loop 구성보다 단순화됨 
        // for Loop에서의 summation이 지금의 accumulator,
        // for Loop에서의 LoopResultArray[count]가 지금의 element.
   

   
    return (
        <div>
            <h3>javascript Reduce Function </h3>
            
            <pre>{
                `
number_array = ${number_array}
result_array = ${result_array}
                `        
    
             }</pre>
        </div>
    )
}