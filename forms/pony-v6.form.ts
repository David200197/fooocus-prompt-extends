import type { SyntheticEvent } from "react"

import { PonyV6 } from "~components/PonyV6"
import { typePrompt } from "~utils/type-prompt"

import type { Form } from "./form.interface"

export class PonyV6Form implements Form {
  private PROMPT =
    "score_9, score_8_up, score_7_up, derpibooru_p_95, detailed eyes, beautiful, detailed background, perfect eyes"

  private PROMPT_NEGATIVE_PROMPT =
    "score_6, score_5, score_4, derpibooru_p_low, lowres, bad anatomy, bad hands, text, cropped, worst quality, low quality, jpeg artifacts, signature, watermark, username, blurry, artist name, mosaic censoring, twitter username, logo, limited palette, monochrome, (Blurred poorly drawn eyes), (out of frame), (bad quality eyes), (asymmetric eyes), long neck, elongated neck, blurred eyes, undetailed eyes, ugly face, blurred, grainy, cut off, oversharpened, sign, amateur, extra limbs, dull colours, boring, lacklustre, bad art, text, abominations, more than 2 legs, more than 2 hand, fused hands, bad proportions,colorless, glitch, bad face, distorted face, messed up eyes, deformed, extra limb, extra finger, bad hands, broken finger, black and white, chromatic abberation, artifacts, ugly, bad image"

  public build = PonyV6

  public onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    const formData = new FormData(form)
    //const model = formData.get("model") as string
    const source = formData.get("source") as string
    const censure = formData.get("censure") as string
    const pose = formData.get("pose") as string
    const promptSource = this.getPromptSource(source)
    const negativePromptSource = this.getNegativePromptSource(source)

    typePrompt(`#positive_prompt > label > textarea`, [
      this.PROMPT,
      censure,
      pose,
      promptSource
    ])
    typePrompt(`#negative_prompt > label > textarea`, [
      this.PROMPT_NEGATIVE_PROMPT,
      negativePromptSource
    ])
  }

  private getPromptSource = (source: string) => {
    if (source === "source_anime_advance")
      return "source_anime, very aesthetic, anime screencap, anime coloring"
    if (source === "source_realistic_1")
      return "photography, realistic sun light and shadows, photorealism, UHD --ar 9:16 --style raw --stylize 700"
    if (source === "source_realistic_2")
      return "cinematic, cinematic photo, close-up, portrait, orange rim lighting, atmospheric, bokeh, dynamic angle, vibrant lighting, dramatic shadows, highly detailed, realistic, high contrast, extremely detailed, photorealistic, professional, detailed skin, depth of field, film grain"
    return source
  }

  private getNegativePromptSource = (source: string) => {
    if (source === "source_realistic_1" || source === "source_realistic_2")
      return "sketch, drawing, cartoon, greyscale, monochrome, anime, 3d, cgi, source_cartoon, source_furry, source_pony, source_anime"
    return ""
  }
}
