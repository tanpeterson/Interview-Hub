import React from 'react'
//import ChatRoom from './ChatRoom.jsx'
import { Container, Button } from 'react-bootstrap'
import RoomView from './RoomView.jsx'

export default function MockInterview() {

  return (
    <Container className="newlight2">
        <div className="h-100">
            <div className="card navcolor  mt-5 border rounded border-dark">
    <div className="bootton">
    <Button variant="primary" className="mt-3 mdc-button mdc-button--raised" id="cameraBtn">
        <i className="material-icons mdc-button__icon" aria-hidden="true">perm_camera_mic</i>
        <span className="mdc-button__label">Open camera & microphone</span>
    </Button>
    <Button variant="secondary" className="ms-3 mt-3 mdc-button mdc-button--raised" disabled id="createBtn">
        <i className="material-icons mdc-button__icon" aria-hidden="true">group_add</i>
        <span className="mdc-button__label">Create room</span>
    </Button>
    {/* <Button variant="secondary" className="ms-3 mt-3 mdc-button mdc-button--raised" disabled id="joinBtn">
        <i className="material-icons mdc-button__icon" aria-hidden="true">group</i>
        <span className="mdc-button__label">Join room</span>
    </Button> */}
    <Button variant="secondary" className="ms-3 mt-3 mdc-button mdc-button--raised" disabled id="hangupBtn">
        <i className="material-icons mdc-button__icon" aria-hidden="true">close</i>
        <span className="mdc-button__label">Hangup</span>
    </Button>
  </div>
  <div>
      <span id="currentRoom"></span>
  </div>
  <div id="videos">
      <video id="localVideo" muted autoPlay playsInline></video>
      <video id="remoteVideo" autoPlay playsInline></video>
  </div>
  </div>
  <div className="mdc-dialog"
     id="room-dialog"
     role="alertdialog"
     aria-modal="true"
     aria-labelledby="my-dialog-title"
     aria-describedby="my-dialog-content">
    <div className="mdc-dialog__container">
        <div className="mdc-dialog__surface">
            <h2 className="mdc-dialog__title" id="my-dialog-title">Join room</h2>
            <div className="mdc-dialog__content" id="my-dialog-content">
                Enter ID for room to join:
                <div className="mdc-text-field">
                    <input type="text" id="room-id" className="mdc-text-field__input" />
                    <label className="mdc-floating-label" htmlFor="my-text-field">Room ID</label>
                    <div className="mdc-line-ripple"></div>
                </div>
            </div>
            <footer className="mdc-dialog__actions">
                <button type="button" className="mdc-button mdc-dialog__button" data-mdc-dialog-action="no">
                    <span className="mdc-button__label">Cancel</span>
                </button>
                <button id="confirmJoinBtn" type="button" className="mdc-button mdc-dialog__button"
                        data-mdc-dialog-action="yes">
                    <span className="mdc-button__label">Join</span>
                </button>
            </footer>
        </div>
    </div>
    <div className="mdc-dialog__scrim"></div>
</div>
<RoomView />
</div>
</Container>
  )
}
