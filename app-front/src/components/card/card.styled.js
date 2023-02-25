// DEPENDENCIES
import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  margin: 15px 20px;
  box-shadow: 0 0 10px 5px lightgrey;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;

  :hover {
    box-shadow: 0 0 10px 17px lightgrey;
    transition: 0.4s ease;

    :before {
      opacity: 1;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 150px;
  height: 100%;

  :hover .details {
    opacity: 1;
    transform: translateY(-210px);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 55px;
  padding: 10px 15px;

  .cardTitle {
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.25rem;
    font-weight: 700;
  }
`;

export const CardVote = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: yellow;
  padding: 3px 7px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
`;
