import React from "react";
import "./styles.css";

const Drops = () => {
  return (
    <div className="drop">
      <div className="dropThumbnail">
        <img src="https://d3h5uaiactj0we.cloudfront.net/media/3-3.jpg" />
      </div>
      <div className="dropContent">
        <div className="dropInfo">
          <div className="dropHeading">
            Untraditional NFT Collection{" "}
            {/* <span>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyMCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggb3BhY2l0eT0iMC42MDAwMDYiIGQ9Ik0xMC4xNzA1IDEyLjA3ODFMMC45MjIxNSAxNi4yODE4TDEwLjE3MDUgMjEuNzQ4NUwxOS40MTg5IDE2LjI4MThMMTAuMTcwNSAxMi4wNzgxWiIgZmlsbD0iYmxhY2siLz4KPHBhdGggb3BhY2l0eT0iMC40NDk5OTciIGQ9Ik0wLjkyMjk4OSAxNi4yODI5TDEwLjE3MTQgMjEuNzQ5NlYxMi4wNzkyVjAuOTM3NUwwLjkyMjk4OSAxNi4yODI5WiIgZmlsbD0iYmxhY2siLz4KPHBhdGggb3BhY2l0eT0iMC44MDAwMDMiIGQ9Ik0xMC4xNzE2IDAuOTMzNTk0VjEyLjA3NTNWMjEuNzQ1N0wxOS40MiAxNi4yNzlMMTAuMTcxNiAwLjkzMzU5NFoiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIG9wYWNpdHk9IjAuNDQ5OTk3IiBkPSJNMC45MjIxNSAxOC4wMzUyTDEwLjE3MDUgMzEuMDY3N1YyMy40OTkxTDAuOTIyMTUgMTguMDM1MloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIG9wYWNpdHk9IjAuODAwMDAzIiBkPSJNMTAuMTcxNiAyMy40OTkxVjMxLjA2NzdMMTkuNDI1NSAxOC4wMzUyTDEwLjE3MTYgMjMuNDk5MVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="
              alt=""
            />
          </span> */}
          </div>
          <div className="dropHub">
            <img src="https://exclusible.com/_next/image?url=https%3A%2F%2Fd3h5uaiactj0we.cloudfront.net%2Fmedia%2Fhogan.png&w=64&q=75" />
            <h6>@ Hogan</h6>
          </div>
          <div className="dropDetails">
            <p>
              From Traditional To Untraditional — Hogan is collaborating with
              five digital artists to elevate digital creative expression to the
              next level of luxury with a limited edition of 500 Untraditional
              NFTs destined to reinvent the Italian brand's staple product.
            </p>
          </div>
        </div>
        <div className="dropCta">
          <button>See Drop</button>
        </div>
      </div>
    </div>
  );
};

export default Drops;
