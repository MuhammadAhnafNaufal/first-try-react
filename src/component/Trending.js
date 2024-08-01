import { Card, Col, Container, Image, Row } from "react-bootstrap";
import imagesImage from "../assets/image/trending/ngeri.jpeg";
import bangkitImage from "../assets/image/trending/bangkit.jpg";
import bencanaImage from "../assets/image/trending/bencana.jpg";
import arcerImage from "../assets/image/trending/arcer.jpg";
import duaduaImage from "../assets/image/trending/22menit.jpg";
import mamaImage from "../assets/image/trending/mama.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="trendings">
            <Card className="movieImage">
              <Image src={imagesImage} alt="Yuni image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Ngeri</Card.Title>
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
              <Image src={bangkitImage} alt="Bangkit image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Bangkit</Card.Title>
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
              <Image src={bencanaImage} alt="Bencana image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Bencana</Card.Title>
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
              <Image src={arcerImage} alt="arcer image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Archer</Card.Title>
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
              <Image src={duaduaImage} alt="dua image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">22 Minit</Card.Title>
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
              <Image src={mamaImage} alt="Mama image" className="imgTrend"/>
              <div className="bg-dark">
              <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">Mama</Card.Title>
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

export default Trending;
