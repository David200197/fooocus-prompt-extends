import type { SyntheticEvent } from "react"

import { typePrompt } from "~utils/type-prompt"

type Props = { show: boolean; onClose: () => void }
export const FooocusPromptExtendsModal = ({ show, onClose }: Props) => {
  if (!show) return <></>

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    onClose()

    const form = e.target as HTMLFormElement

    const formData = new FormData(form)
    const type = formData.get("type") as string
    const censure = formData.get("censure") as string

    const prompt = "score_9, score_8_up, score_7_up"
    typePrompt(`#positive_prompt > label > textarea`, [prompt, type, censure])

    const negativePrompt = "score_6, score_5, score_4"
    typePrompt(`#negative_prompt > label > textarea`, [negativePrompt])
  }

  return (
    <div className="fooocus-prompt-extends-background" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="fooocus-prompt-extends-modal">
        <h4>Foocus Prompt Extends</h4>
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="model">Model</label>
          <select name="model">
            <option value="pony_v6">pony_v6</option>
          </select>
          <label htmlFor="type">Type</label>
          <select name="type">
            <option value="source_anime">anime</option>
            <option value="source_pony">pony</option>
            <option value="source_furry">furry</option>
            <option value="source_cartoon">cartoon</option>
          </select>
          <label htmlFor="type">Censure</label>
          <select name="censure">
            <option value="rating_explicit">explicit</option>
            <option value="rating_safe">safe</option>
            <option value="rating_questionable">questionable</option>
          </select>
          <div style={{ display: "flex" }}>
            <button type="submit" className="secondary">
              insert
            </button>
            <button type="button" className="secondary" onClick={onClose}>
              close
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
