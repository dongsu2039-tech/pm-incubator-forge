export const ControlFlowSwitch = () => {

    // math.random() : 0 이상 1 미만의 실수 난수 생성
    // math.floor() : 소수점 버림
    // math.random() * 5 : 0 이상 5 미만의 실수 난수 생성
    // math.floor(math.random() * 5) : 0 이상 5 미만의 정수 난수 생성 (0,1,2,3,4)
    // math.floor(math.random() * 5) + 1 : 1 이상 6 미만의 정수 난수 생성 (1,2,3,4,5)
    let grade = Math.floor(Math.random() * 5) + 1
    let gradeName

    switch (grade) {
        case 1: gradeName = "SSS"; break;
        case 2: gradeName = "SS"; break;
        case 3: gradeName = "S"; break;
        case 4: gradeName = "A"; break;
        case 5: gradeName = "B"; break;

        default: gradeName = "규격 외(심해)"; break;
    }

    
    return (
        <div>
            <h3>javascript 제어문 (switch)</h3>

            <pre>{
                ` 
grade = ${grade}
gradeName = ${gradeName}
                `
            }</pre>
        </div>
    )
}

