import type { SyntheticEvent } from "react"

import type { Form } from "./form.interface"

export class EmptyForm implements Form {
  onSubmit(e: SyntheticEvent<HTMLFormElement>): void {
    e.preventDefault()
  }
  build() {
    return <h1>No Form Selected</h1>
  }
}
