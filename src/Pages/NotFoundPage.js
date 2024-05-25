import styled from "styled-components";

const timeout = 3000;

/**
 * NotFoundPage is displayed when the path is not found.
 * @returns {React.JSX.Element}
 */
const NotFoundPage = () => {
  setTimeout(() => {
    window.location.replace("/");
  }, timeout);
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>404 Page not found</h1>
        <p>
          This page does not / no longer exists.
          <br />
          You will be redirected in {timeout / 1000} seconds
        </p>
      </div>
    </HomePageStyled>
  );
};

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default NotFoundPage;
