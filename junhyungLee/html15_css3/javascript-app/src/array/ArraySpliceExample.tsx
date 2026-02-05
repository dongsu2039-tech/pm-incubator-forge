
export const ArraySpliceExample = () => {
   let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
   // splice는 특정 배열 값에 다른 값을 대체함 -> (인덱스위치, 지울 인덱스 개수, 바꿀 값)
   // '...' spread 방식으로 요소를 전부 해체해서 날개화함
   let spliced_array: number[] = [...number_array]
   spliced_array.splice(3, 1, 777)

   let second_spliced_array: number[] = [...number_array]
   second_spliced_array.splice(4, 3, 0)

    return (
    <div>
        <h3>javascript Array Splice</h3>

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

