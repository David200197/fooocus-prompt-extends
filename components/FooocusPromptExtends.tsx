import iconBase64 from "data-base64:~assets/icon.png"
import { useState } from "react"

import { FooocusPromptExtendsModal } from "./FooocusPromptExtendsModal"

export const FooocusPromptExtends = () => {
  const [showModal, setShowModal] = useState(false)

  const onOpenModal = () => setShowModal(true)
  const onCloseModal = () => setShowModal(false)

  return (
    <>
      <FooocusPromptExtendsModal onClose={onCloseModal} show={showModal} />
      <div className="svelte-1ax1toq">·</div>
      <div className="fooocus-prompt-extends-content">
        <a className="fooocus-prompt-extends-button" onClick={onOpenModal}>
          Use Fooocus Prompt Extends
        </a>
        <img
          src={iconBase64}
          alt="Extension Icon"
          width={20}
          height={20}
          style={{ zIndex: 1 }}
        />
      </div>
    </>
  )
}
