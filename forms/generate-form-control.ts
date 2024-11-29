import { EmptyForm } from "./empty.form"
import type { Form } from "./form.interface"
import { PonyV6Form } from "./pony-v6.form"

export const generateFormControl = (model: string): Form => {
  const models = {
    pony_v6: new PonyV6Form()
  }
  return models[model] || new EmptyForm()
}
