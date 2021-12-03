import React, { useEffect, useState } from 'react'
import { Button, Container } from "react-bootstrap";
import { joinRoomById, init } from '../../public/app';

const firebaseConfig = {
 // firebase config
};

if(!firebase.apps.length)
   firebase.initializeApp(firebaseConfig);

export default function RoomView() {
	const db = firebase.firestore();
	const [currentRooms, setCurrentRooms] = useState([])
	let openRooms = [];

	useEffect(() => {
		init()
		db.collection("rooms").onSnapshot((querySnapshot) => {
			let rooms = querySnapshot.docs.reduce((acc, cv) => { 
				return !acc.includes(cv.id) ? [...acc, cv.id] : acc;
			 }, [])
			 setCurrentRooms(rooms)
		})
	}, [])

	for(let i = 0; i < currentRooms.length; i++){
		openRooms.push(
			<li className="d-flex justify-content-between border border-dark border rounded">
                         <i className="mt-2 me-2 ms-2 fa fa-check-circle checkicon"></i>
                            
                                <h6 className="mt-2"> Room {i+1}</h6>

                        <div className="d-flex ms-4 flex-row align-items-center">
                            <Button variant="outline-dark" size="sm" onClick={() => joinRoomById(currentRooms[i])}> JOIN </Button>
                       </div>
                    </li>
		)
	}

  return (

    
    
            <div className="d-flex justify-content-center align-items-center activity">
				
                <div className="mt-2 pe-3 ps-3 pt-3 navcolor activity-done border border-dark border rounded text-dark text-center"> <strong>Open Rooms</strong> ( {openRooms.length} ) 
            
            <div className="mt-2" id="roomsDiv">
                <ul className="list list-inline">
                    {openRooms}
                </ul>
            </div>
			</div>
            </div> 
         
           
           
	)
				{/* <div className="col-md-8 col-xl-6 chat">
					<div className="chatcard">
						<div className="chatcard-header msg_head">
							<div className="d-flex bd-highlight">

								<div className="user_info">
									<span>Open Rooms</span>
								</div>
							</div>
						</div>
						<div className="card-body msg_card_body">
							{openRooms}
							</div>
						</div>
					</div> */}
			
  // )
}







