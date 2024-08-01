import { Card, Col, Container, Image, Row } from "react-bootstrap";
import aImage from "../assets/image/superhero/boys.jpg";
import bImage from "../assets/image/superhero/kick.jpg";
import cImage from "../assets/image/superhero/lega.jpg";
import dImage from "../assets/image/superhero/seven.jpg";
import eImage from "../assets/image/superhero/superman.jpg";
import fImage from "../assets/image/superhero/train.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="superheroes">
            <Card className="movieImage">
              <Image src={aImage} alt="Yuni image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">The Boys</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={bImage} alt="Bangkit image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Kick Ass</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={cImage} alt="Bencana image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Jupiter Legacy</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={dImage} alt="arcer image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Dawn Of Seven</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={eImage} alt="dua image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Superman III</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={fImage} alt="Mama image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Dawn Of A-Train</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
