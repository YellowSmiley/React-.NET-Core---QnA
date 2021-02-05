import { css } from '@emotion/css';
import { PageTitle } from './PageTitle';

interface Props {
  title?: string;
}
export function Page({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <div
      className={css`
        margin: 50px auto 20px auto;
        padding: 30px 20px;
        max-width: 600px;
      `}
    >
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  );
}
