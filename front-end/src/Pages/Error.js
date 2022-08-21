//CODE FOR ERROR PAGE
//https://www.codewithrandom.com/2022/08/08/simple-404-error-page-html-css/

const Error = () => {
  return (
    <div>
      <section class="page_404">
        <div class="error-container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                  <h1 class="text-center ">404</h1>
                </div>
                <div class="contant_box_404">
                  <p>Sorry, the page you are looking for is not avaible!</p>
                  <a href="/" class="link_404">
                    Go Back Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
