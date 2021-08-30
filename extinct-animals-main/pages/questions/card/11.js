import Question_Layout from "../../../components/question_layout"
import Head from "next/head"
import Choices_Layout from "../../../components/choices_layout"
import Image from 'next/image'
import {useRouter} from 'next/router'
import { WorkerContext } from "../../../context/WorkerContext"
import { useContext } from "react"

export default function CardQuestion11() {
  const router = useRouter()
  const {worker} = useContext(WorkerContext);

  const submit_card = async event => {
    event.preventDefault()

    const c_answer_11 = {
      _id: {worker}.worker,
      card_answer_11: event.target.timeline.value
    };

    const res = await fetch('/api/question_stuff', {
      method: 'post',
      body: JSON.stringify(c_answer_11)
    })
    
    router.push('/questions/card/12')
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
          <title>Section 2</title>
        </Head>
      
        <div id="w_id_sec">ID: { worker }</div>
        <br/>

        <h1>Section 2 of 3</h1>
        <p><strong>Directions:</strong> Please specify when this organism went extinct using either the 
        scale or text box.</p>

        <Choices_Layout>
          <Image src="/images/img_11.jpg"
            id="card11"
            height={500}
            width={450}
          />
          
          <br/>

          <form onSubmit={submit_card}> 
            <output id="output" htmlFor="timeline"></output>
            <br/>

            <input id="answer_est" type="number" onChange={textbox_value}></input>

            <br/>
            <br/>
            <div className="slider_box">
              <input 
                type="range" 
                min="0" 
                max="1000000000"
                className="slider" 
                id="timeline" 
                onChange={slider_value}
              />
              
            </div>
            <br/>
              
            <input type="submit"></input>
            <button onClick={reset}>Reset</button>
          </form>
        </Choices_Layout>
      </Question_Layout>
    )
  }