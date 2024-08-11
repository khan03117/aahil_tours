import { PDFViewer } from '@react-pdf/renderer'
// import React from 'react'
import Ticket from '.'

const PdfViewer = () => {
  return (
    <PDFViewer width={'100%'} height={'100%'}>
        <Ticket/>
    </PDFViewer>
  )
}

export default PdfViewer