export const MapReduceExample = () => {

    let number_array: number[] = [2, 4, 6, 8, 10];

    //reduce 함수 작성법
    // 배열이름.reduce( (누적값, 현재값) => { return 누적값 + 현재값 }, 초기값 );

    let result_array: number= 
        number_array.reduce((accumulator, element) => accumulator + element * element, 0)

    return (
        <div>
            <h3> javascript Reduce Function </h3>

         <pre>{

                `
                number_array = [${number_array}]
                result_array = [${result_array}]
                `
            }</pre>
        </div>
    )
}