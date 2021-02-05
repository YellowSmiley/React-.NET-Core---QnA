import { FC } from 'react';
import { css } from '@emotion/css';
import { AnswerData } from './QuestionsData';
import { gray3 } from './Styles';

interface Props {
  data: AnswerData;
}

export const Answer: FC<Props> = ({ data }) => (
  <div
    className={css`
      padding: 10px 0px;
    `}
  >
    <div
      className={css`
        padding: 10px 0px;
        font-size: 13px;
      `}
    >
      {data.content}
    </div>
    <div
      className={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Answered by ${data.userName} on
        ${data.created.toLocaleDateString()}
        ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
