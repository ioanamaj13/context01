import styles from './PageContainer.module.scss';

import { TestProvider } from '../../context/TestContext';
export const PageContainer = ({ children }) => {

  return (
    <TestProvider>
      <div className={styles.pageContainer}>
        {children}
      </div>
    </TestProvider>
  )
}