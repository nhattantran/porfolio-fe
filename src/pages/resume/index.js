import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { PDFReader } from "react-read-pdf"
import './style/resume.css'

import {
    AiOutlineDownload,
} from 'react-icons/ai'

function Resume() {
    return (
        <Container fluid className="resume-page-section">
            <Container className="resume-main-content">
                <Row className="download-row">
                    <a href="/" className="download-button">
                        <AiOutlineDownload className="download-icon"/>
                        Download CV
                    </a>
                </Row>
                <Row className="main-pdf">
                    <PDFReader
                        url={require('./style/resume.pdf')}
                    />
                </Row>
                <Row className="download-row">
                    <a href="/" className="download-button">
                        <AiOutlineDownload className="download-icon"/>
                        Download CV
                    </a>
                </Row>
            </Container>
        </Container>
    )
}

export default Resume;