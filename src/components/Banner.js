import { useState, useEffect } from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/shirt3.png"
import headerImg2 from "../assets/img/image.png"

export const Banner = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const toType = "7,200,000!";
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let fullText = toType;
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(200);
        }
    }

    return (
        <section className="banner" id="home">
            <div id="confetti-wrapper">
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
            </div>
            <Container>
                <img className="bg" src={headerImg2} alt="Header Img" />
                <Row className="align-items-center w-100">
                    <Col className="column-1 text-center" xs={12} md={6} xl={7}>
                        {/* <h1>Mega Lotto Jackpot up to INR <span className="wrap">{text}</span></h1>
                        <h2>Fastest Withdrawal Time in the Market!</h2>
                        <h2>75% Reload Bonus!</h2> */}
                        <h1 className="promo-text">
                            <div>Get K9Win</div>
                            <div>IPL Shirt</div>
                            <div className="sub-promo-text">for FREE!</div>
                        </h1>
                        <Button href="https://k9inr1.com/en/promotion" variant="warning" size="lg">Get Your Free Tshirt <ArrowRightCircle size={25} /></Button>
                        {/* <Button href="https://k9inr1.com/en/promotion" variant="link" size="lg">Get Your Free Tshirt</Button> */}
                    </Col>
                    <Col className="column-2" xs={12} md={6} xl={5}>
                        <img className="bounce" src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}