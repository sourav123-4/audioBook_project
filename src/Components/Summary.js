import React from 'react'
import '../Styles/summary.css'
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs'
import LockIcon from '@mui/icons-material/Lock';
import 'react-tabs/style/react-tabs.css';
function Summary() {
  return (
    <div className='summary-div'>  
        <div className='overview-div'>
            <Tabs>
                <TabList>
                    <Tab>Summary <LockIcon sx={{fontSize:15}}></LockIcon></Tab>
                    <Tab>Insights</Tab>
                    <Tab>Quotes</Tab>
                    <Tab>Community</Tab>
                </TabList>
                <TabPanel>
                    <h2>overview</h2>
                    <p><i>Kerry Brown’s CEO, China: </i>The Rise of Xi Jinping (2016) is an analysis
                    of power in modern China and a biography of Xi Jinping, general 
                    secretary of the Chinese Communist Party and president of the People’s 
                    Republic of China. Brown argues that the power of Xi’s party stems from
                    its belief systems and its goal of achieving a powerful and prosperous 
                    China. Xi is not only a political leader: he is the CEO of the world’s 
                    second-largest economy. Brown praises Xi’s leadership and explores his 
                    key relationships within his close circle and with other nations, whether 
                    allies or enemies. Under the presidency of Xi, Brown sees a bright future 
                    for China.
                    </p>   
                </TabPanel>
                <TabPanel>
                    <h3></h3>
                </TabPanel>
            </Tabs>
        </div>
        <div className='audiobook-div'>
            <h3>Audiobook</h3>
            <div className='player-div'>
                <h3>player</h3>
            </div>
            <h4>Table of Contents</h4>
            <ol>
                <li>overview</li>
            </ol>
            
        </div>
    </div>
  )
}

export default Summary