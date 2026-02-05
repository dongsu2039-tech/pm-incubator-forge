import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CalculationExample } from './math_operation/CalculationExample'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { FirstProblem } from './problem/FirstProblem'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSumExample'
import { SecondProblem } from './problem/SecondProblem'
import { MapExample } from './map/MapExample'
import { MapReduceExample } from './map/MapReduceExample'
import { MapFilterExample } from './map/MapFilterExample'
import { ArraySpliceExample } from './array/ArraySpliceExample'
import { ArraySliceExample } from './array/ArraySliceExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* 커스텀 컴포넌트 */}
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <FirstProblem/>
        <ControlFlowSwitch/>
        <ControlFlowFor/>
        <ControlFlowForSummation/>
        <ControlFlowForSumExample/>
        <SecondProblem/>
        <MapExample/>
        <MapReduceExample/>
        <MapFilterExample/>
        <ArraySliceExample/>
        <ArraySpliceExample/>
      </div>
    </>
  )
}

export default App
