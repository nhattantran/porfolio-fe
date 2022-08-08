import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";

import './style/resume.css'

import {
    AiOutlineDownload,
} from 'react-icons/ai'


import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Pdf = "https://render.githubusercontent.com/nhattantran/porfolio-fe/raw/main/src/pages/resume/style/resume.pdf"
function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const HandleError = error => {
        console.log(error.message)
    }
    return (
        <Container fluid className="resume-page-section">
            <Container className="resume-main-content">
                <Row className="download-row">
                    <a href="/" className="download-button">
                        <AiOutlineDownload className="download-icon" />
                        Download CV
                    </a>
                </Row>
                <Row className="main-pdf">
                    <Document
                        file={require("./style/resume.pdf")}
                        onLoadError={HandleError}
                        className="d-flex justify-content-center"
                    >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
                    </Document>
                </Row>
                {/* <Row className="main-pdf">
                    <PDFReader
                        url={require("./style/resume.pdf")}
                    />
                </Row> */}
                <Row className="download-row">
                    <a href="/" className="download-button">
                        <AiOutlineDownload className="download-icon" />
                        Download CV
                    </a>
                </Row>
            </Container>
        </Container>
    )
}

export default Resume;