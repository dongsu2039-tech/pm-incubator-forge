export const MapFilterExample = () => {
    let number_array: number[] = [2,4,6,8,10]
    
    // filter가 오면 배열의 요소를 element로 추출
    // 배열의 요소 중 4로 나눴을 때 나머지가 0인 요소들만 result_array 배열에 저장
    let result_array: number[] = number_array.filter(element => element % 4 == 0) 

    // 만약 for문이라면
    // for(배열 전체 순회){
    //  if(배열요소 % 4 == 0){
    //      result_array.push(배열 요소)
    //      } 
    // }
    return(
        <div>
            <h3>Javascript Reduce Function</h3>
            <pre>{
            `
            number_array = ${number_array}
            result_array = ${result_array}
            ` 
            }</pre>
        </div>
    )
}