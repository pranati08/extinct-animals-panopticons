import Question_Layout from "../../../components/question_layout"
import Head from "next/head"
import Choices_Layout from "../../../components/choices_layout"
import Image from 'next/image'
import {useRouter} from 'next/router'
import { WorkerContext } from "../../../context/WorkerContext"
import { useContext } from "react"

export default function SeedQuestion1() {
  const router = useRouter()
  const {worker} = useContext(WorkerContext);

  const submit_seed = async event => {
    event.preventDefault()

    const s_answer_3 = {
      timeline_answer: event.target.timeline.value,
      skipped: event.target.e_skip.checked
    };

    const info = {
      _id: {worker}.worker,
      s_answer_3
    };

    const res = await fetch('/api/question_stuff', {
      method: 'post',
      body: JSON.stringify(info)
    })
    
    router.push('/questions/card/1')
  }

  const slider_value = async event => {
    event.preventDefault()
    document.getElementById('answer_est').value = document.getElementById('timeline').value
    document.getElementById('output').value = document.getElementById('timeline').value
  }

  const textbox_value = async event => {
    event.preventDefault()
    document.getElementById('timeline').value = document.getElementById('answer_est').value
    document.getElementById('output').value = document.getElementById('timeline').value
  }

  const reset = async event => {
    event.preventDefault()
    const timeline = document.getElementById('timeline')
    const answer_box = document.getElementById('answer_est')
    const out = document.getElementById('output')
    timeline.value = 500000000
    answer_box.value = ""
    out.value = ""
  }

    return (
      <Question_Layout>
        <Head>
          <title>Section 1</title>
        </Head>
      
        <div id="w_id_sec">ID: { worker }</div>
        <br/>

        <h1>Section 1 of 3</h1>
        <p><strong>Directions:</strong> Please specify when this organism went extinct using either the 
        scale or text box. Answer -1 if this organism is not extinct. Feel free to skip.</p>

        <Choices_Layout>
          <Image src="/images/seed_3.jpg"
            id="seed3"
            height={400}
            width={350}
          />
          
          <br/>

          <form onSubmit={submit_seed}> 
            <output id="output" htmlFor="timeline"></output>
            <br/>

            <input id="answer_est" type="number" onChange={textbox_value}></input>

            <br/>
            <br/>
            <div className="slider_box">
              <input 
                type="range" 
                min="-1" 
                max="1000000000"
                className="slider" 
                id="timeline" 
                onChange={slider_value}
              />
              
            </div>
            <br/>
              
            <label htmlFor="extinction_skip">Skip:</label>
            <br/>
            <input type="checkbox" id="e_skip"></input>
            <br/>
            <br/>
            <input type="submit"></input>
            <button onClick={reset}>Reset</button>
          </form>
        </Choices_Layout>
      </Question_Layout>
    )
  }