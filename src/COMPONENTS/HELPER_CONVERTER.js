export default function HELPER_CONVERT(props) {

   return( 
      <h5>
      {Number(props.price).toLocaleString('en-US', {
         style: 'currency',
         currency: 'PHP',
      })}
      </h5>
    
   )
}