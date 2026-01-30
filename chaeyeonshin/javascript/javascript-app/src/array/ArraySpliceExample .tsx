export const ArraySpliceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    //'...' spread 방식으로 요소들을 전부 낱개화함 (즉, 카피함)
    let spliced_array: number[] = [...number_array]

    // 3번 인덱스에서 1개를 지우고 그 자리에 777를 배치
    // .splice(start index, delete count, insert item)
    // 즉, 배열에 삭제하고 싶은 요소 및 추가하고 싶은 요소가 있을 때 사용
    spliced_array.splice(3, 1, 777)

    let second_spliced_array: number[] = [...number_array]
    // 4번 인덱스부터 3개 삭제 후 0 배치
    second_spliced_array.splice(4,3,0)

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

