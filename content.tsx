import cssText from "data-text:~/content.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { FooocusPromptExtends } from "~components/FooocusPromptExtends"

export const config: PlasmoCSConfig = {
  matches: ["http://127.0.0.1:7865/"],
  all_frames: true
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector(
    `body > gradio-app > div > div > div.wrap.svelte-1ax1toq > footer > a`
  )

// Use this to optimize unmount lookups
export const getShadowHostId = () => "fooocus-prompt-extends"

export default FooocusPromptExtends
