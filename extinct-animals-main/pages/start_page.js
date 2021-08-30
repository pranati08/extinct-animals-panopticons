import Info_Page_Layout from '../components/info_page_layout'
import { React, useContext } from 'react'
import { useRouter } from 'next/router'
import { WorkerContext } from '../context/WorkerContext'

export default function Start_Page() {
  const router = useRouter()
  const {changeWorker} = useContext(WorkerContext);

  const submit_mturk = async event => {
    event.preventDefault()
    changeWorker(event.target.worker.value)
    
    // prob remove
    const res = await fetch('/api/work_stuff', {
      method: 'post',
      body: JSON.stringify(event.target.worker.value)
    })

    
    //router.push('questions/ord/ranking_2')
    router.push('questions/seed/1')
  }

    return (
      <Info_Page_Layout>
        <div className="back_info">
          <h2>Goal</h2>
          <p>
          The goal of this study is to
          <strong>
          &nbsp;determine the extinction dates of organisms with crowdsourcing methods.&nbsp;
          </strong>
          In particular, the study aims to determine whether aggregating ordinal and cardinal estimations from 
          multiple people into a consensus can provide accurate estimates.  
          </p>

          <h2>Stucture</h2>
          <p>
          The activity has 3 different sections, each with a different number of questions.
          The first section consists of 3 questions, the second has 17, and the third has 5.
          There are 25 questions in total. Please give answer all to the best of your knowledge.
          </p>

          <h2>Demo of interface</h2>
          <p>[VIDEO]</p>

          <p>By entering your MTurk Worker ID and proceeding, you accept the following:</p>

          <div id="consent">
          <h3>Consent form: Determining the extinction dates of organisms</h3>
  
          <strong>Introduction</strong>
          <br/>
          The purposes of this form are to provide you, as a prospective research study participant, 
          information that may affect your decision as to whether or not to participate in this research 
          and to record your consent, should you agree to be involved in the study.
          <br/>
          <br/>

          <strong>Researchers</strong>
          <br/>
          Adolfo R. Escobedo, Assistant Professor, Joshua Grassel, and Maria Castro
          <br/>
          <br/>

          <strong>Study purpose</strong>
          <br/>
          The purpose of this research is to determine if aggregating ordinal and cardinal estimates from 
          multiple people can provide an accurate estimate of the extinction date of organisms.
          <br/>
          <br/>

          <strong>Description</strong>
          <br/>
          If you choose to participate in this study, 
          you will join a study funded by Arizona State University. 
          Only minimal information about you is requested as part of a demographic questionnaire; 
          your name is not requested. The experiment will be linked via Amazon MTurk and only your MTurk 
          worker ID will be stored temporarily to compensate you for your time. 
          You will be using a computer to look at multiple pictures of extinct animals. 
          First, there will be 3 questions and each one will ask you to estimate the extinction date 
          of an animal which may or may not be extinct, with the option to skip. 
          Afterward, there will be 17 questions asking you to estimate the extinction date of an animal, 
          without the option to skip. Finally, there will be 5 more questions asking you to order animals 
          from groups of up to 17 according to which ones have been extinct the longest to which ones have 
          been extinct the most recently. The study is expected to take 8-10 minutes. 
          Your participation is voluntary and you can withdraw at any point.
          <br/>
          <br/>

          <strong>Inclusion criteria</strong>
          <br/>
          To participate in this study, you must satisfy the following:
          <ul>
            <li>Able to read and communicate in English.</li>
            <li>Be 18 or over.</li>
            <li>Have access to a computer and be able to operate the keyboard and mouse.</li>
          </ul>
          <br/>
          
          <strong>Risks</strong>
          <br/>
          There are no known risks from taking part in this study, but as in any research, 
          there is some possibility that you may be subject to risks that have not yet been identified. 
          There are no foreseeable risks or discomforts to your participation.
          <br/>
          <br/>

          <strong>Benefits</strong>
          <br/>
          Participants will have the opportunity to engage in crowdsourcing activities that require 
          recall of school textbook knowledge. As such, this exercise allows for practicing with memory 
          and dexterity with computer input devices (e.g., a mouse).
          <br/>
          <br/>
          
          <strong>Confidentiality</strong>
          <br/>
          All information obtained in this study is strictly confidential. 
          The results of this research study may be used in reports, presentations, and publications, 
          but the researchers will not identify you.
          <br/>
          <br/>

          <strong>Withdrawal privilege</strong>
          <br/>
          Participation in this study is completely voluntary. 
          You are free to say no at anytime, even after starting the activity. 
          You can withdraw at any point in time. 
          Withdrawal or non-participation will not affect you in any way.
          <br/>
          <br/>

          <strong>Costs and payments</strong>
          <br/>
          You will be compensated $2.00 for completing the study.
          <br/>
          <br/>
          
          <strong>Voluntary consent</strong>
          <br/>
          Any questions you have concerning the research study or your participation in the study, 
          before or after your consent, can be answered by Adolfo R. Escobedo at adres@asu.edu. 
          <br/>
          <br/>
          If you have questions about your rights as a subject/participant in this research, or if you 
          feel you have been placed at risk; you can contact the Chair of the Human Subjects 
          Institutional Review Board, through the ASU Office of Research Integrity and Assurance, 
          at 480-965-6788.
          <br/>
          <br/>
          Participation in the study tasks will be considered your consent. 

          </div>
        </div>
        <br/>
        <form id="worker_form" onSubmit={submit_mturk}>
          <div className="demo">
            <label>MTurk Worker ID: </label>
            <br/>
            <input id="worker" type="text" required={true}></input>
            <br/>
            <br/>
          </div>

          <br/>
          <div className="demo">
            <input type="submit"></input>
          </div>
          </form>
        <br/>
      </Info_Page_Layout>
    )
  }