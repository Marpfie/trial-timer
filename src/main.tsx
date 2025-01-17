import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"

import { App } from "./App.tsx"
import "./index.scss"

// Add the duration plugin to dayjs
dayjs.extend(duration)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
