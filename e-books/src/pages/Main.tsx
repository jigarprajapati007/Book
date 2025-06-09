import { Header } from '../components/Header'
import { Contents } from '../components/Contents.jsx'
import "../styles/content.css"
import "../styles/header.css"
import "../styles/footer.css"
export const Main = () => {
  return (
    <div>
        <Header/>
        <Contents/>
    </div>
  )
}
