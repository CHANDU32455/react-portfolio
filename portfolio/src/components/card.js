import React from 'react';
import styled from 'styled-components';

const Card = ({ frontImage, backContent }) => {
  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={frontImage} alt="Front" className="card-image" />
          </div>
          <div className="flip-card-back">
            <p className="content">{backContent}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
    background-color: transparent;
    width: 230px;
    height: 294px;
    perspective: 1000px;
    font-family: sans-serif;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: 1px solid coral;
    border-radius: 1rem;
  }

  .flip-card-front {
    background: linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%, rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
    color: coral;
  }

  .flip-card-back {
    background: linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%);
    color: white;
    transform: rotateY(180deg);
    .title {
      font-size: 1em;
    }
    p {
      font-size: 0.6em; 
    }
  }

  .card-image {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }

  .content {
    font-size: 1.2em;
    font-weight: 600;
    padding: 1em;
    text-align: center;
  }
`;

export default Card;
