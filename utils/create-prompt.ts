export const createPrompt = (prompts: string[]) =>
  prompts
    .map((prompt) => prompt.trim())
    .filter((prompt) => Boolean(prompt))
    .join(", ")
