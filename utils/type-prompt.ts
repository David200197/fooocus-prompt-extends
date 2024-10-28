import { createPrompt } from "./create-prompt"

export const typePrompt = (selector: string, prompts: string[]) => {
  const element$: HTMLTextAreaElement = document.querySelector(selector)
  element$.focus()
  const event = new Event("input", {
    bubbles: true,
    cancelable: true
  })
  element$.value = createPrompt([...prompts, element$.value])
  element$.dispatchEvent(event)
}
