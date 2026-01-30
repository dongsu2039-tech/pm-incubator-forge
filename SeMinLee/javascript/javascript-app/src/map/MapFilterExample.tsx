export const MapFilterExample = () => {

    let number_array: number[] = [2, 4, 6, 8, 10]
    //filter 함수 작성법
    // 배열이름.filter( (현재값) => { return 조건식 } );
    // 조건식이 true인 값들만 모아서 새로운 배열 생성

    let result_array: number[] =
        number_array.filter(element => element % 4 === 0)


    return (
        <div>
            <h3> javascript Filter Function </h3>

         <pre>{

                `
                number_array = [${number_array}]
                result_array = [${result_array}]
                `
            }</pre>
        </div>
    )
}