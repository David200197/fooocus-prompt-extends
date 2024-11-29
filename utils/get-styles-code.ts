import { STYLE_CODE } from "~constants/style-code"

interface StylesCode {
  code: string
  srcImg: string
}

const convertToCode = (value: string) => value.replace("(asterisco)", "*")

export const getStyleCode = (): StylesCode[] =>
  STYLE_CODE.map((code) => ({
    code: convertToCode(code),
    srcImg: chrome.runtime.getURL(`assets/styles-codes/${code}_001.jpeg`)
  }))
