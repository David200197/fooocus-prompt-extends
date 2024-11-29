import { useState } from "react"

import { getStyleCode } from "~utils/get-styles-code"

export const PonyV6 = () => {
  const stylesCode = getStyleCode()

  const [selectedCode, setSelectedCode] = useState<string>("")
  const selectedSrcImg = stylesCode.find(
    (styleCode) => styleCode.code === selectedCode
  )

  return (
    <>
      <label htmlFor="source">Type</label>
      <select name="source">
        <option value="source_anime">anime</option>
        <option value="source_anime_advance">anime advance</option>
        <option value="source_pony">pony</option>
        <option value="source_furry">furry</option>
        <option value="source_cartoon">cartoon</option>
        <option value="source_realistic_1">realistic 1</option>
        <option value="source_realistic_2">realistic 2</option>
      </select>
      <label htmlFor="censure">Censure</label>
      <select name="censure">
        <option value="rating_explicit">explicit</option>
        <option value="rating_safe">safe</option>
        <option value="rating_questionable">questionable</option>
      </select>
      <label htmlFor="pose">Pose</label>
      <select name="pose">
        <option value="">none</option>
        <option value="from_below">from below</option>
        <option value="from_above">from above</option>
        <option value="from_side">from side</option>
        <option value="close-up">close up</option>
        <option value="upper body">upper body</option>
        <option value="portrait">portrait</option>
        <option value="contrapposto">contrapposto</option>
        <option value="full body">full body</option>
      </select>
      <label htmlFor="code">Code</label>
      <select name="code" onChange={(e) => setSelectedCode(e.target.value)}>
        <option value="">none</option>
        {stylesCode.map(({ code, srcImg }, index) => (
          <option key={`code_${index}`} value={code}>
            {code}
          </option>
        ))}
      </select>
      {selectedSrcImg && (
        <div style={{ position: "relative" }}>
          <div
            style={{
              padding: "10px",
              background: "white",
              border: "1px solid black",
              position: "absolute",
              left: "-250px",
              top: "-100px"
            }}>
            <img width={200} height={"auto"} src={selectedSrcImg.srcImg} />
          </div>
        </div>
      )}
    </>
  )
}
