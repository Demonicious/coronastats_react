import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";

const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = 'https://coronastats.co';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

export const CopyLink = () => {
    return (
        <a onClick={() => { copyToClipboard(); toast.success('Link Copied Successfully!', {position: toast.POSITION.BOTTOM_RIGHT}); }} href className="sBtn cl"><FontAwesomeIcon className="m-r-2" icon={faCopy} /> Copy Link</a>
    )
}
