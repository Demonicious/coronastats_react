import React, { useState } from 'react';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [spin, setSpin] = useState(null);

    const send = () => {
        if(!spin) {
            setSpin('spinning');
            fetch('https://process.coronastats.co/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    msg
                }),
            }).then(r => r.json()).then((data) => {
                if(data.type && data.type === 'error') {
                    toast.error('Please fill out the form properly before contact.');
                } else toast.success('Message sent successfully!');
                setSpin(null);
            }).catch(e => {
                console.error(e);
                toast.error('There was an error sending your message.');
                setSpin(null);
            })
        }
    }

    return (
        props.showForm === 'is-visible' ?
        <div className="modal is-visible" id="modalContact">
            <div className="modal-dialog">
                <section className="modal-content">
                    <button onClick={() => props.toggle()} className="close-modal" aria-label="close modal" data-close>✕</button>
                    <div className="modalBody">
                        <div className="modalHeader">Contact Us</div>
                        <div className="modalFormContent clearfix">
                            <span id="contactResultArea" />
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Name</label>
                                <input onChange={e => setName(e.target.value)} value={name} type="text" className="form-control" id="contactNameField" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput2">E-Mail</label>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" id="contactEmailField" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput2">Message</label>
                                <textarea onChange={e => setMsg(e.target.value)} value={msg} className="form-control textareaMessage" id="contactMessageField" placeholder="Type your Message" />
                            </div>
                            <button onClick={send} id="contactSubmitBtn" className="modalButton">{spin === null ? 'Submit' : <FontAwesomeIcon icon={faCircleNotch} spin />}</button>
                        </div>
                    </div>
                </section>
            </div>
        </div> : <></>
    )
}
