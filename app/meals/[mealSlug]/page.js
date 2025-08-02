export default function mealDetailsPage({ params }){
  return <>
    <h1>meal Details page</h1>
    <h1>{params.slug}</h1>
  </>
}