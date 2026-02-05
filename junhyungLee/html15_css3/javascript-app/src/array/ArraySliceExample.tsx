
export const ArraySliceExample = () => {
   let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

    // 아래 코드는 위의 number_array에서
    // 3번 인덱스 - 7번 비포함 인덱스까지 정보를 가져옴 
    // (특정 구간 범위의 데이털르 가져온다는 개념)

   let sliced_array: number[] = number_array.slice(3, 7)    

    return (
    <div>
        <h3>javascript Array Slice</h3>

            <pre>{
               `               
number_array = ${number_array}
result_array = ${sliced_array}
               `  
            }</pre>
         </div>
    )
}

