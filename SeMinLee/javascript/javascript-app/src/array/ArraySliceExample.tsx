export const ArraySliceExample = () => {

    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  // 배열이름.slice( 시작인덱스, 끝인덱스 );
  // 시작인덱스부터 끝인덱스-1 까지 잘라서 새로운 배열 생성
    let sliced_array: number[] =number_array.slice(3, 7)


    return (
        <div>
            <h3> javascript Array Slice </h3>

         <pre>{

                `
                number_array = [${number_array}]
                sliced_array = [${sliced_array}]
                `
            }</pre>
        </div>
    )
}