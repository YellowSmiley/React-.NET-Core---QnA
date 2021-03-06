import { css } from '@emotion/css';
import React, { FC } from 'react';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { QuestionList } from './QuestionList';
import { QuestionData } from './QuestionsData';
import { PrimaryButton } from './Styles';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getUnansweredQuestionsActionCreator, AppState } from './Store';

interface Props extends RouteComponentProps {
  getUnansweredQuestions: () => Promise<void>;
  questions: QuestionData[] | null;
  questionsLoading: boolean;
}

const HomePage: FC<Props> = ({
  history,
  questions,
  questionsLoading,
  getUnansweredQuestions,
}) => {
  useEffect(() => {
    if (questions === null) {
      getUnansweredQuestions();
    }
  }, [questions, getUnansweredQuestions]);

  const handleAskQuestionClick = () => {
    history.push('/ask');
  };

  return (
    <Page>
      <div
        className={css`
          margin: 50px auto 20px auto;
          padding: 30px 20px;
          max-width: 600px;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <PageTitle>Unanswered Questions</PageTitle>
          <PrimaryButton onClick={handleAskQuestionClick}>
            Ask a question
          </PrimaryButton>
        </div>
        {questionsLoading ? (
          <div
            className={css`
              font-size: 16px;
              font-style: italic;
            `}
          >
            Loading...
          </div>
        ) : (
          <QuestionList data={questions || []} />
        )}
      </div>
    </Page>
  );
};

const mapStateToProps = (store: AppState) => {
  return {
    questions: store.questions.unanswered,
    questionsLoading: store.questions.loading,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
  return {
    getUnansweredQuestions: () =>
      dispatch(getUnansweredQuestionsActionCreator()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
