import React from "react"
import { Col, Container, Row, Badge } from "react-bootstrap"

class ShowDetails extends React.Component{
    state = {
        movie: null
    }


render() {
    return(
        <Container>
            <Row>
              <Col className="d-flex align-items-center">
                <h1 className="mb-0">{this.state.movie.Title}</h1>
                <Badge
                  variant="info"
                  className="metascore mx-2 d-flex align-items-center"
                >
                  {this.state.movie.Metascore}/100
                </Badge>
                <Badge variant="secondary" className="rating ">
                  {this.state.movie.Rated}
                </Badge>
              </Col>
            </Row>

        </Container>
    )
}

}
export default ShowDetails;