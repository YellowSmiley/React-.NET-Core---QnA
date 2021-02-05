import { FC } from 'react';
import { AnswerData } from './QuestionsData';
import { css } from '@emotion/css';
import { Answer } from './Answer';
import { gray5 } from './Styles';

interface Props {
  data: AnswerData[];
}

export const AnswerList: FC<Props> = ({ data }) => (
  <ul
    className={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0;
    `}
  >
    {data.map((answer) => (
      <li
        className={css`
          border-top: 1px solid ${gray5};
        `}
        key={answer.answerId}
      >
        <Answer data={answer} />
      </li>
    ))}
  </ul>
);
