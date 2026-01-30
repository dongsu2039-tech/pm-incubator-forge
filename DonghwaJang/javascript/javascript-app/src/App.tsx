import './App.css'
import { ArraySliceExample } from './array/ArraySliceExample'
import { ArraySpliceExample } from './array/ArraySpliceExample'
import { ControlFlowIf } from './control_flow/ControlFlowIf'
import { ControlFlowFor } from './control_flow/ControlFlowIFor'
import { ControlFlowForSumExample } from './control_flow/ControlFlowIForsumExample'
import { ControlFlowForSummation } from './control_flow/ControlFlowIForsummation'
import { ControlFlowSwitch } from './control_flow/ControlFlowISwitch'
import { VariableAndDataTypes } from './data_type/VariableAndDataType'
import { LogicalOperationExample } from './logical_operation/LogicalOperationExample'
import { MapExample } from './map/MapExample'
import { MapFilterExample } from './map/MapFilterExample'
import { MapReduceExample } from './map/MapReduceExample'
import { CalculationExample } from './math_operation/CalculationExample'
import { FirstProblem } from './problem/FirstProblem'
import { SecondProblem } from './problem/SecondProblem'


function App() {

  return (
    <>
      <div>
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