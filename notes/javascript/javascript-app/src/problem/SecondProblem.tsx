// 3, 6, 9, 12, 15 를 더한 결과를 출력해봅시다.
export const SecondProblem = () => {
    // Q. 강사님 배열값이 너무 많게 되면 저렇게 쓰는건 비효율적인가요?
    // A. 네 일일히 여기에 전부 적을 수는 없습니다.
    let loopResultArray = [3, 6, 9, 12, 15]
    let summation = 0

    let count = 0;

    for (; count <= 4; count++) {
        summation += loopResultArray[count]
    }

    return (
        <div>
            <h3>javascript 제어문 (for)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}