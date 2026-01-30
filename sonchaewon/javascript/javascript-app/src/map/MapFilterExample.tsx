export const MapFilterExample = () =>{
   let number_array: number[] = [2,4,6,8,10]
 
    //filter는 배열의 요소를 element로 뽑습니다
    //element % 4 === 0 이란? 배열의 낱개요소를 4로 나눈 나머지가 0이 맞는가
    //True/False로 조건의 결과가 True인 요소만 걸러집니다
   let result_array: number[] = 
    number_array.filter(element => element % 4 === 0)
   
    //만약 for Loop로 구현한다면
    //for(배열 전체 순회){
    //     if(배열요소 % 4 ===0){
    //      result_array.push(배열요소)
    //     }
    //   }
   
    return (
    <div>
        <h3> 자바스크립트 filter Function </h3>
        <pre>{
            `
    number_array = ${number_array}
    result_array = ${result_array}
            `
            
           
        }</pre>
    </div>
 )
}