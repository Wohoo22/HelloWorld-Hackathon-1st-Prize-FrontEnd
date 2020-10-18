import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import menuicon from "../img/menu.svg"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const BottomPage = () => {
    const {levelid } = useParams()
    const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
    return (
        <div className="BottomPage">
              <div className="ChangePagePart">  
                <div className="LeftPart" onClick={toggle}>
                    <img src={menuicon} alt='menuicon' height='20px' width='20px'></img><div>
                    Levels
                </div>
                <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Level</ModalHeader>
        <ModalBody>
          1.Level 0 : Introduction to Javascript
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
                </div>
                
                <div className="MiddlePart">
               {
                   parseInt(levelid)>0 &&  <Link to={`/level/${parseInt(levelid)-1}`} style={{textDecoration:"none"}}>
                   <div className="ButtonControlPage Back">Back</div>
                   </Link>
               }
               {
                   parseInt(levelid)===0 && <Link to='/'style={{textDecoration:"none"}}>
                   <div className="ButtonControlPage Back">Back</div>
                   </Link>
               }

                   
                    <div>{levelid}/10</div>
                    <Link to={`/level/${parseInt(levelid)+1}`} style={{textDecoration:"none"}}>
                    <div className="ButtonControlPage Next">Next</div>
                    </Link>
                </div>
                <div className="RightPart"></div>
            </div> 
        </div>
    )
}

export default BottomPage
