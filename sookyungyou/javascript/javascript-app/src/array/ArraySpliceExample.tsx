export const ArraySpliceExample = () => {
    let number_array :number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    let spliced_array: number[] = [...number_array]
    // '...' spread 방식으로 요소를 전부 해체해서 낱개화함
    // 결론적으로 number_array 배열을 카피한 것

    spliced_array.splice(3, 1, 777)
    // 3번 인덱스에 위치한 8
    // 3번 인덱스에서 1개 (8)를 지움
    // 그 자리에 777 배치 (8- > 777)

    let second_spliced_array: number[] = [...number_array]
    second_spliced_array.splice(4, 3, 0)
    // 4번 인덱스에 위치한 10
    // 4번 인덱스에서 3개 (10, 12, 14) 지움
    // 그 자리에 0 배치 (10, 12, 14 -> 0)
    
   

   
    return (
        <div>
            <h3>javascript Array Splice </h3>
            
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