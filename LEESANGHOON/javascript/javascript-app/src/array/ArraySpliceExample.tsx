// 3 6 9 12 15 더한 결과 출력

export const ArraySpliceExample = () =>{

    let number_array: number[] = [2,4,6,8,10,12,14,16,18,20]

    let spliced_array: number[] = [...number_array]         // spread 방식: 배열 카피임
    spliced_array.splice(3,1, 777)                          // 3번 인덱스에서 1개 지우기

    let  second_spliced_array: number[] = [...number_array]
    second_spliced_array.splice(4,3, 0)


return(
    <div>
    <h3>javascript Array Splice</h3>
        <pre>{
    `
number_array = ${number_array}
result_array = ${spliced_array} 
second_spliced_array = ${second_spliced_array}

    `
        }</pre>
    </div>
)
}