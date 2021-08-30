import Info_Page_Layout from '../components/info_page_layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { WorkerContext } from '../context/WorkerContext'
import { useContext } from 'react'

export default function Demo() {
  const router = useRouter()
  const worker = useContext(WorkerContext)

  const submit_form = async event => {
    event.preventDefault()
    
    const info = {
      worker_id: {worker}.worker.worker,
      age: event.target.age.value, 
      gender: event.target.gender.value,
      education: event.target.education.value,
      employment: event.target.employment.value,
      current_emp: event.target.current_occ.value,
      language: event.target.lang.value,
      country: event.target.country.value,
      experience: event.target.exp.value,
      study_dif: event.target.study_dif.value,
      seed_dif: event.target.seed_dif.value,
      card_dif: event.target.card_dif.value,
      ord_dif: event.target.ord_dif.value,
      feedback: event.target.misc_feedback.value
    };

    const res = await fetch('/api/demo_stuff', {
      method: 'post',
      body: JSON.stringify(info)
    })

    // "sign out" to be added
    router.push('/debrief')    
  }
    return (
      <Info_Page_Layout>
        <Head>
          <title>Survey</title>
        </Head>

        <h1>Survey</h1>
        <body>
          <p>
          <strong>Directions:</strong> Please answer the following questions to the best of your ability. 
          All answers will be kept confidential and only be reported grouped with others’ answers. 
          Feel free to select “prefer not to answer” or leave blank if you feel uncomfortable answering a question. 
          Completing the survey is extra and not required for any compensation / completion.
          </p>

          <form id="formd" onSubmit={submit_form}>
            <div className="demo">
              <label>What is your age?</label>
              <br/>
              <input id="age" type="number"></input>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>What is your gender?</label>
              <br/>
              <select id="gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="None">Prefer not to answer</option>
              </select>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>What is your education level</label>
              <br/>
              <select id="education">
                <option value="Less than high school">Less than high school</option>
                <option value="High school / GED">High school / GED</option>
                <option value="Some college">Some college</option>
                <option value="2 year degree">2 year degree</option>
                <option value="4 year degree">4 year degree</option>
                <option value="More than a 4 year degree">More than a 4 year degree</option>
                <option value="Trade / technical / vocational training">Trade / technical / vocational training</option>
                <option value="None">Prefer not to answer</option>
              </select>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>What is your employment status?</label>
              <br/>
              <select id="employment">
                <option value="employed">Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
                <option value="none">Prefer not to answer</option>
              </select>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>Current occupation (if applicable):</label>
              <br/>
              <input id="current_occ" type="text"></input>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label className="block">What is your native language?:</label>
              <br/>
              <input id="lang" type="text"></input>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>Current country of residence:</label>
              <br/>
              <input id="country" type="text"></input>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>Do you have any experience working with animals / studying animals (ex. paleontology,  zoology, etc.)?</label>
              <br/>
              <select id="exp">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="none">Prefer not to answer</option>
              </select>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>How would do you rate the overall difficulty of this study?</label>
              <br/>
              <select id="study_dif">
                <option value="Very easy">Very easy</option>
                <option value="Moderately easy">Moderately easy</option>
                <option value="Moderately difficult">Moderately difficult</option>
                <option value="Very difficult">Very difficult</option>
                <option value="none">Prefer not to answer</option>
              </select>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>How difficult were the first 3 questions?</label>
              <br/>
              <select id="seed_dif">
                <option value="Very easy">Very easy</option>
                <option value="Moderately easy">Moderately easy</option>
                <option value="Moderately difficult">Moderately difficult</option>
                <option value="Very difficult">Very difficult</option>
                <option value="none">Prefer not to answer</option>
              </select>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>How difficult were the slider questions?</label>
              <br/>
              <select id="card_dif">
                <option value="Very easy">Very easy</option>
                <option value="Moderately easy">Moderately easy</option>
                <option value="Moderately difficult">Moderately difficult</option>
                <option value="Very difficult">Very difficult</option>
                <option value="none">Prefer not to answer</option>
              </select>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>How difficult were the ordering questions?</label>
              <br/>
              <select id="ord_dif">
                <option value="Very easy">Very easy</option>
                <option value="Moderately easy">Moderately easy</option>
                <option value="Moderately difficult">Moderately difficult</option>
                <option value="Very difficult">Very difficult</option>
                <option value="none">Prefer not to answer</option>
              </select>
              <br/>
              <br/>
            </div>

            <div className="demo">
              <label>Please leave any other miscellaneous feedback here for the researcher team:</label>
              <br/>
              <input id="misc_feedback" type="text"></input>
              <br/>
              <br/>
            </div>

            <br/>
            <div className="demo">
              <input type="submit"></input>
            </div>
          </form>
          <br/>
        </body>
      </Info_Page_Layout>
    )
  }