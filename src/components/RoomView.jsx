import React, { useEffect, useState } from 'react'

const firebaseConfig = {
  apiKey: "AIzaSyBHBv6bOm-CfklcLcHrEMQtKTjPahnWczQ",
  authDomain: "teammewtwo-3002b.firebaseapp.com",
  projectId: "teammewtwo-3002b",
  storageBucket: "teammewtwo-3002b.appspot.com",
  messagingSenderId: "340276860693",
  appId: "1:340276860693:web:166e29a435541dc8b0bb1c",
  measurementId: "G-N4YWVTYKBY"
};

if(!firebase.apps.length)
   firebase.initializeApp(firebaseConfig);

export default function RoomView() {
	const db = firebase.firestore();
	const [currentRooms, setCurrentRooms] = useState([])
	let openRooms = [];

	useEffect(() => {
		db.collection("rooms").onSnapshot((querySnapshot) => {
			// console.log(querySnapshot.docs.)
			let rooms = querySnapshot.docs.reduce((acc, cv) => { 
				return !acc.includes(cv.id) ? [...acc, cv.id] : acc;
			 }, [])
			 setCurrentRooms(rooms)
		})
	}, [])

	for(let i = 0; i < currentRooms.length; i++){
		openRooms.push(
			<li class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center"><i class="fa fa-check-circle checkicon"></i>
                            <div class="ml-2">
                                <h6 class="mb-0"> Room {currentRooms[i]}</h6>
                                <div class="d-flex flex-row mt-1 text-black-50 date-time">
                                    <div><i class="fa fa-calendar-o"></i><span class="ml-2">22 May 2020 11:30 PM</span></div>
                                    <div class="ml-3"><i class="fa fa-clock-o"></i><span class="ml-2">6h</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <Button variant="outline-dark" onClick={() => joinRoom(currentRooms[i])}></Button>
                        </div>
                    </li>
            // <div className="d-flex justify-content-start mb-4" key={i}>
			// 	<div className="msg_cotainer" onClick={() => joinRoom(currentRooms[i])}>
			// 		Room  {currentRooms[i]}
			// 	</div>
			// </div>
		)
	}

  return (




<div class="container mt-5">
    <div class="row">
        <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center activity">
                <div><span class="activity-done">Open Rooms{openRooms.length}</span></div>
                <div class="icons"><i class="fa fa-search"></i><i class="fa fa-ellipsis-h"></i></div>
            </div>
            <div class="mt-3">
                <ul class="list list-inline">
                    {openRooms}
                </ul>
            </div>
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







