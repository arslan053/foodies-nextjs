import { useFormStatus } from "react-dom"

export default function BUtton(){
  const {pending} = useFormStatus() // it ony work if it is in the form
  return (
    <button type="submit">{pending ? 'Sharing meal.....' : 'Share Meal'}</button>
  )
}