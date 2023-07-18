import React from 'react';
import {useParams} from 'react-router-dom' 

export default function Page(){
    let {pageId} = useParams()
    return( 
        <h1>I am Dynamic Page {pageId}</h1>
    )
}