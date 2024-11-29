import type { ReactNode, SyntheticEvent } from "react"

export interface Form {
  onSubmit(e: SyntheticEvent<HTMLFormElement>): void
}
