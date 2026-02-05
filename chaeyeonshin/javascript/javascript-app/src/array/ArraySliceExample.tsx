export const ArraySliceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

    // .slice() : 배열 자르기
    // .slice(3, 7) : 3번 인덱스부터 6번 인덱스까지만 자름(7번 인덱스 미포함)
    let sliced_array: number[] = number_array.slice(3, 7)

    return (
        <div>
            <h3>javascript Array Slice</h3>

            <pre>{
                ` 
number_array = ${number_array}
sliced_array = ${sliced_array}
                `
            }</pre>
        </div>
    )
}

