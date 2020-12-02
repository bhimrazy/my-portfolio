import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="css/open-iconic-bootstrap.min.css"
          ></link>
          <link rel="stylesheet" href="css/animate.css"></link>

          <link rel="stylesheet" href="css/owl.carousel.min.css"></link>
          <link rel="stylesheet" href="css/owl.theme.default.min.css"></link>
          <link rel="stylesheet" href="css/magnific-popup.css"></link>

          <link rel="stylesheet" href="css/aos.css"></link>

          <link rel="stylesheet" href="css/ionicons.min.css"></link>

          <link rel="stylesheet" href="css/flaticon.css"></link>
          <link rel="stylesheet" href="css/icomoon.css"></link>
          <link rel="stylesheet" href="css/style.css"></link>
        </Head>
        <body
          data-spy="scroll"
          data-target=".site-navbar-target"
          data-offset="300"
        >
          <Main />
          <NextScript />
          <script src="js/jquery.min.js"></script>
          <script src="js/jquery-migrate-3.0.1.min.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/jquery.easing.1.3.js"></script>
          <script src="js/jquery.waypoints.min.js"></script>
          <script src="js/jquery.stellar.min.js"></script>
          <script src="js/owl.carousel.min.js"></script>
          <script src="js/jquery.magnific-popup.min.js"></script>
          <script src="js/aos.js"></script>
          <script src="js/jquery.animateNumber.min.js"></script>
          <script src="js/scrollax.min.js"></script>

          <script src="js/main.js"></script>
          {/* <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-23581568-13');
            </script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
