import React from 'react'

export const PreventionVideo = (props) => {
    return (
        <div className={"modal preventionVideo " + props.showForm} id="modalPreventions">
            <div className="modal-dialog">
                <section className="modal-content">
                    <button onClick={() => props.toggle()} className="close-modal" aria-label="close modal" data-close>✕</button>
                    <div className="modalBody">
                        <div className="modalHeader">Coronavirus Explained (Kurzgesagt – In a Nutshell)</div>
                        <span>
                            {
                                props.showForm === 'is-visible' ?
                                <iframe title="Coronavirus Explained" width="500" height="280" src="https://www.youtube.com/embed/BtN-goy9VOY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                :
                                <></>
                            }
                           </span>
                    </div>
                </section>
            </div>
        </div>
    )
}
