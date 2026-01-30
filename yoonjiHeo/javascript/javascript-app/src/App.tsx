import './App.css'
import { ArraySliceExample } from './array/ArraySliceExample'
import { ArraySpliceExample } from './array/ArraySpliceExample'
import { ControlFlowFor } from './control_flow/ControlFlowFor'
import { ControlFlowForSummation } from './control_flow/ControlFlowForSummation'
import { ControlFlowForSumExample } from './control_flow/ControlFlowForSummationExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowSwitch } from './control_flow/ControlFlowSwitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataTypes'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { MapExample } from './map/MapExample'
import { MapFilterExample } from './map/MapFilterExample'
import { MapReduceExample } from './map/MapReduceExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { Firstproblem } from './problem/Firstproblem'
import { Secondproblem } from './problem/Secondproblem'

function App() {
  return (
    <>
      <div>
        <CalculationExample/>
        <VariableAndDataTypes/>
        <LogicalOperationExample/>
        <ControlFlowIf/>
        <Firstproblem/>
        <ControlFlowSwitch/>
        <ControlFlowFor/>
        <ControlFlowForSummation/>
        <ControlFlowForSumExample/>
        <Secondproblem/>
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
