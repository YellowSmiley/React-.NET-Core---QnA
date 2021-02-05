import { css } from '@emotion/css';
import { gray2, gray3 } from './Styles';
import { QuestionData } from './QuestionsData';
import { Link } from 'react-router-dom';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export function Question({ data, showContent }: Props) {
  return (
    <div
      className={css`
        padding: 10px 0px;
      `}
    >
      <div
        className={css`
          padding: 10px 0px;
          font-size: 19px;
        `}
      >
        <Link
          className={css`
            text-decoration: none;
            color: ${gray2};
          `}
          to={`questions/${data.questionId}`}
        >
          {data.title}
        </Link>
      </div>
      {showContent && (
        <div
          className={css`
            padding-bottom: 10px;
            font-size: 15px;
            color: ${gray2};
          `}
        >
          {data.content.length > 50
            ? `${data.content.substring(0, 50)}...`
            : data.content}
        </div>
      )}
      <div
        className={css`
          font-size: 12px;
          font-style: italic;
          color: ${gray3};
        `}
      >
        {`Asked by ${data.userName} on
        ${data.created.toLocaleDateString()}
        ${data.created.toLocaleTimeString()}`}
      </div>
    </div>
  );
}
