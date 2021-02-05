import React, { lazy, Suspense } from 'react';
import { HeaderWithRouter as Header } from './Header';
import { HomePage } from './HomePage';
import { css } from '@emotion/css';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';

function App() {
  const AskPage = lazy(() => import('./AskPage'));
  return (
    <BrowserRouter>
      <div
        className={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/ask">
            <Suspense
              fallback={
                <div
                  className={css`
                    margin-top: 100px;
                    text-align: center;
                  `}
                >
                  Loading...
                </div>
              }
            >
              <AskPage />
            </Suspense>
          </Route>
          <Route path="/signin" component={SignInPage} />
          <Route path="/questions/:questionId" component={QuestionPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
