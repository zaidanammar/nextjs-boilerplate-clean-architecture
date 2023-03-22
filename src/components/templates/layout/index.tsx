import React, { ReactNode } from 'react'

interface TemplatesLayoutProps {
  children: ReactNode
}

const TemplatesLayout = ({ children }: TemplatesLayoutProps) => (
  <div>{children}</div>
)

export default TemplatesLayout
