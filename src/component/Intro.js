import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
                <div className='TextIntro'>Nonton Pake Voucher Shopee</div>
                <div className='TextIntro'>Ya Sabi</div>
                <div className='introButton mt-4 text-center'>
                    <Button variant='dark' href='#trendings'>Lihat Semua List</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    );
}

export default Intro;