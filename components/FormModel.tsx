import { PonyV6 } from "./PonyV6"

type Props = { model: string }
export const FormModel = ({ model }: Props) => {
  const models = {
    pony_v6: <PonyV6 />
  }
  return models[model] || <h1>No Form Selected</h1>
}
