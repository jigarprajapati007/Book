interface props{
    title:string
}
export const PageFooter = ({title}:props) => {
  return (
    <div className="pagefooter">
         <div className="pgfoter-div"><p>{title}</p></div>
         <h4>© Smart Book 2025</h4>
    </div>
  )
}
