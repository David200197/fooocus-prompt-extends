export const createPrompt = (prompts: string[]) => {
  const updatePrompts = prompts
    .map((prompt) => prompt.split(","))
    .flat(1)
    .map((prompt) => prompt.trim())
    .filter((prompt) => Boolean(prompt))
  const setPrompts = new Set(updatePrompts)
  return Array.from(setPrompts).join(", ")
}
