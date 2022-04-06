import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = styled.div`
  border-radius: 10px;
  background: #242424;
  padding: 35px;
  flex: 1 0 50%;
`;
const ReviewText = styled.p`
  text-transform: uppercase;
`;
const ReviewCardImgBox = styled.figure`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const ReviewCardImg = styled.img``;
const ReviewCardReviewerName = styled.p``;
const ReviewCardBox = styled.div`
  margin-left: 20px;
`;
const ReviewList = styled.ul`
  display: flex;
  align-items: center;
  gap: 7px;
`;
const ReviewItem = styled.li``;

function ReviewsSliderItem({ review }) {
  return (
    <ReviewCard>
      <ReviewText>{review.reviewerDescription}</ReviewText>
      <ReviewCardImgBox>
        <ReviewCardImg src={review.reviewerPhoto} alt={review.reviewerPhoto} />
        <ReviewCardBox>
          <ReviewCardReviewerName>{review.reviewerName}</ReviewCardReviewerName>
          <ReviewList>
            <ReviewItem>
              <AiFillStar style={{ color: "#ffe99c" }} />
            </ReviewItem>
            <ReviewItem>
              <AiFillStar style={{ color: "#ffe99c" }} />
            </ReviewItem>
            <ReviewItem>
              <AiFillStar style={{ color: "#ffe99c" }} />
            </ReviewItem>
            <ReviewItem>
              <AiFillStar style={{ color: "#ffe99c" }} />
            </ReviewItem>
            <ReviewItem>
              <AiFillStar style={{ color: "#ffe99c" }} />
            </ReviewItem>
          </ReviewList>
        </ReviewCardBox>
      </ReviewCardImgBox>
    </ReviewCard>
  );
}

export default ReviewsSliderItem;
