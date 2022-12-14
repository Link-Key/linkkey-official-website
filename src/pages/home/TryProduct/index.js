import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ReactComponent as ArrowRight } from "../../../assets/icon/arrowRight.svg";
import Fade from "react-reveal/Fade";

const FlipBox = styled(Box)(({ rotate }) => ({
  position: "relative",
  // width: "485px",
  minHeight: "500px",
  cursor: "pointer",
  transition: ".7s ease-in-out",
  transformStyle: "preserve-3d",
  transform: rotate ? "rotateY(0.5turn)" : "",
  ".face": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transition: ".7s ease-in-out",
  },
  ".back-side": {
    transform: "rotateY(0.5turn)",
  },
}));

const TryProductItem = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  // maxWidth: "485px",
  minHeight: "500px",
  border: "1px solid rgba(187, 187, 187, 100)",
  padding: "0 45px",
  borderRadius: "10px",
  transition: "all .5s",

  ".MuiTypography-root": {
    color: "#ea6060",
    fontSize: "58px",
    fontWeight: 700,
    marginTop: "12px",
  },
  svg: {
    color: "#ea6060",
    ":hover": {
      color: "#fc1616",
    },
  },
  a: {
    position: "absolute",
    right: "45px",
    bottom: "20px",
  },

  "&:hover": {
    boxShadow: "rgba(238, 128, 128, 0.6) 0px 5px 15px;",
  },
}));

const TryProduct = () => {
  const [isSNSRotate, setIsSNSRotate] = useState(false);
  const [isChatRotate, setIsChatRotate] = useState(false);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#ea6060",
            fontSize: { xs: "35px", md: "58px" },
            fontWeight: 700,
            marginTop: "12px",
          }}
        >
          PRODUCTS
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#9A9A9A",
            fontSize: { xs: "15px", md: "20px" },
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          Continuously build around WEB3 social networking
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#9A9A9A",
            fontSize: { xs: "15px", md: "20px" },
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "50px",
          }}
        >
          We will continue to build a series of Web3 products to gradually
          improve Linkkey's circle-based WEB3 social scene and provide valuable
          services for Web3 citizens
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "55px",
          flexWrap: { xs: "wrap", sm: "wrap", md: "row" },
          perspective: "8000px",
        }}
      >
        <Fade left big duration={700}>
          <FlipBox
            rotate={isSNSRotate}
            sx={{
              width: { xs: "92vw", md: "485px" },
            }}
          >
            <TryProductItem className="face front-side">
              <Typography>SNS</Typography>
              <Link
                onClick={() => {
                  setIsSNSRotate(true);
                }}
              >
                <ArrowRight />
              </Link>
            </TryProductItem>
            <TryProductItem className="face back-side">
              <Link
                onClick={() => {
                  setIsSNSRotate(false);
                }}
              >
                <ArrowRight />
              </Link>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  li: {
                    color: "#9a9a9a",
                    fontSize: { xs: "15px", md: "20px" },
                  },
                }}
              >
                <ListItem>
                  - SNS is a decentralized personal social name service
                </ListItem>

                <ListItem>
                  - SNS domain name is a WEB3 DID to enter Linkkey ecology
                </ListItem>
                <ListItem>- SNS supports multi-currency payments</ListItem>
                <ListItem>- SNS is a Dapp deployed on Polygon</ListItem>
              </List>
            </TryProductItem>
          </FlipBox>
        </Fade>
        <Fade right big duration={700}>
          <FlipBox
            rotate={isChatRotate}
            sx={{
              // width: "92vw",
              width: { xs: "92vw", md: "485px" },
            }}
          >
            <TryProductItem className="face front-side">
              <Typography>CHAT</Typography>
              <Link
                onClick={() => {
                  setIsChatRotate(true);
                }}
              >
                <ArrowRight />
              </Link>
            </TryProductItem>

            <TryProductItem className="face back-side">
              <Link
                onClick={() => {
                  setIsChatRotate(false);
                }}
              >
                <ArrowRight />
              </Link>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  li: {
                    color: "#9a9a9a",
                    fontSize: { xs: "15px", md: "20px" },
                  },
                }}
              >
                <ListItem>
                  - CHAT is the first vehicle for circle socialization
                </ListItem>

                <ListItem>
                  - CHAT realizes the definition of friend relationship by
                  issuing NFT
                </ListItem>
                <ListItem>
                  - CHAT realizes the construction of groups by issuing NFTs
                </ListItem>
                <ListItem>- CHAT is a pure WEB3 application</ListItem>
                <ListItem>- CHAT is built on XMTP Network</ListItem>
              </List>
            </TryProductItem>
          </FlipBox>
        </Fade>
      </Box>
    </Container>
  );
};

export default TryProduct;
