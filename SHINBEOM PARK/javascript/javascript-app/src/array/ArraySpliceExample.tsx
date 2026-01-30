export const ArraySpliceExample = () => {
    let number_array: number[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let spliced_array: number[] = [...number_array]; 

    spliced_array.splice(3,1, 777);
        // 배열의 3번 인덱스는 잘라내고 777로 교체

    let second_spliced_array: number[] = [...number_array];
    second_spliced_array.splice(4, 3, 0);
        // 배열의 4번 인덱스부터 3개를 잘라내고 0으로 교체
        second_spliced_array.splice(5, 1, 0);
        // 배열의 5번 인덱스부터 1개를 잘라내고 0으로 교체

    return (
        <div>
            <h3>javascript Array Splice</h3>

            <pre>{
                `
number_array = [${number_array}]
spliced_array = [${spliced_array}]
second_spliced_array = [${second_spliced_array}]
                `
            }</pre>
        </div>
    )
}