import ReactLoading from 'react-loading';
import {Container} from './styles'
function loadingComponent({type, color}) {
  return(
    <Container>
      <ReactLoading type={type} color={color} height={20} width={25}>
     
     </ReactLoading>
    </Container>
    
  )
}
export default loadingComponent;