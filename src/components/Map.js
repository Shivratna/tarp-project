import React, {useState} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function MyComponent() {

  return (
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3890.0542957963708!2d80.15124156482062!3d12.839767990942477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1650345788915!5m2!1sen!2sin" width={"100%"} height={900} style={{border: 0, }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />)
}

export default MyComponent;