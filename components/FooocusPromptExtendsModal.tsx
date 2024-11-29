import { useRef, useState } from "react"

import { generateFormControl } from "~forms/generate-form-control"

import { FormModel } from "./FormModel"
import { PonyV6 } from "./PonyV6"

type Props = { show: boolean; onClose: () => void }
export const FooocusPromptExtendsModal = ({ show, onClose }: Props) => {
  const [model, setModel] = useState("pony_v6")

  if (!show) return <></>

  const formModelControl = generateFormControl(model)

  return (
    <div className="fooocus-prompt-extends-background" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="fooocus-prompt-extends-modal">
        <h4>Foocus Prompt Extends</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="model">Model</label>
          <select
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}>
            <option value="pony_v6">pony_v6</option>
          </select>
        </div>
        <form
          onSubmit={(e) => {
            onClose()
            formModelControl.onSubmit(e)
          }}
          style={{ display: "flex", flexDirection: "column" }}>
          {<FormModel model={model} />}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "10px"
            }}>
            <button
              type="submit"
              className="lg secondary type_row svelte-cmf5ev"
              style={{ cursor: "pointer", padding: "5px" }}>
              insert
            </button>
            <button
              type="button"
              className="lg secondary type_row svelte-cmf5ev"
              onClick={onClose}
              style={{ cursor: "pointer", padding: "5px" }}>
              close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
