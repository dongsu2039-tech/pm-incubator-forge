export const MapExample = () => {
// 순수 javascript 에서는 아래의 코드로 작성 가능
// let number_array = [2, 4, 6, 8, 10];
// let square_result_array = number_array.map(function(num) { return num * num; });

// :num[]= 타입스크립트 문법으로 숫자 배열을 의미

    let number_array: number[] = [2, 4, 6, 8, 10];
    let square_result_array: number[] = number_array.map((num) => num * num);

    return (
        <div>
            <h3> javascript Map (Hash방식) </h3>

         <pre>{

                `
                number_array = [${number_array}]
                square_result_array = [${square_result_array}]
                `
            }</pre>
        </div>
    )
}