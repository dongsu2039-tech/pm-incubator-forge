export const ArraySpliceExample = () => {

    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let spliced_array: number[] =[...number_array]
    // '...' spread 방식으로 배열의 요소를 전부 해체하여 낱개로 바꿈
    // 배열을 복사하여 새로운 배열 생성


     spliced_array.splice(3, 1, 777)
     // 배열이름.splice( 시작인덱스, 삭제개수, 추가값1, 추가값2, ... );
     // 시작인덱스부터 삭제개수만큼 값을 삭제하고, 추가값들을 그 위치에 삽입

     let second_spliced_array: number[] =[...number_array]
     second_spliced_array.splice(4, 3, 0)


    return (
        <div>
            <h3> javascript Array Splice </h3>

         <pre>{

                `
                number_array = [${number_array}]
                sliced_array = [${spliced_array}]
                second_spliced_array = [${second_spliced_array}]
                `
            }</pre>
        </div>
    )
}