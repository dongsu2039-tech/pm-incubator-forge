export const ArraySliceExample = () => {
    let number_array: number[] = [2,4,6,8,10,12,14,16,18,20]
    
    // 선언된 배열 중 인덱스 위치 3부터 7-1 위치까지 출력
    let sliced_array: number[] = number_array.slice(3,7) 

    return(
        <div>
            <h3>Javascript Array Slice</h3>
            <pre>{
            `
            number_array = ${number_array}
            sliced_array = ${sliced_array}
            ` 
            }</pre>
        </div>
    )
}