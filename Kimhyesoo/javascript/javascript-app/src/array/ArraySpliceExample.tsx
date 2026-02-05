export const ArraySpliceExample = () => {
    let number_array: number[] = [2,4,6,8,10,12,14,16,18,20]
    
    // '...'은 spread 방식으로 요소를 전부 해체해서 낱개화함
    // 아래코드는 number_array 배열을 copy
    let spliced_array: number[] = [...number_array]
    spliced_array.splice(3,1,777) 
    
    // splice(인덱스 위치, 제거인덱스 갯수, 대입 숫자)
    let second_spliced_array: number[] = [...number_array]
    second_spliced_array.splice(4,3,0) 
    
    return(
        <div>
            <h3>Javascript Array Splice</h3>
            <pre>{
            `
            number_array = ${number_array}
            spliced_array = ${spliced_array}
            second_spliced_array = ${second_spliced_array}
            ` 
            }</pre>
        </div>
    )
}