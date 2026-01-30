export const MapReduceExample = () =>{
   let number_array: number[] = [2,4,6,8,10]

   //reduce 연산과정
   //<(누산 대상, 배열의요소) => 누산대상+배열요소, 초기값)
   //accumulator의 시작값은 입력한 초기값으로 설정된
   //실행 효율 Te관점
   //앞서 했던 for Loop 구성을 단순화 시킨 작업
   let result_array: number = 
    number_array.reduce((accumulator,element) => accumulator + element, 1)
   
   
    return (
    <div>
        <h3> 자바스크립트 Reduce Function </h3>
        <pre>{
            `
    number_array = ${number_array}
    result_array = ${result_array}
            `
            
           
        }</pre>
    </div>
 )
}