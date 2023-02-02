import React from 'react'
// import Themeone from './components/Themeone';
import Themetwo from './components/Themetwo';

// import { header,Data,styles} from './Data';
import { header,Data,styles,labels} from './BlackThemeData';
function App() {
  return (
    <>
    {/* <Themeone styles={styles} data={Data} header={header} grid={styles.grid3} type={styles.type} /> */}
    <Themetwo styles={styles} labels={labels} data={Data} header={header} grid={styles.grid2} type={styles.type} />

    </>
  );
}

export default App;
