/* eslint-disable @next/next/no-img-element */

import Question_Layout from "../../../components/question_layout"
import Head from "next/head"
import {useRouter} from 'next/router'
import { useContext } from "react"
import { WorkerContext } from "../../../context/WorkerContext"

export default function Ranking_2() {
  const router = useRouter()
  const {worker} = useContext(WorkerContext)

  const submit_ranking = async event => {
    event.preventDefault()

    const rank_2_answer = {
      rank_2_1_choice: document.getElementById('rank_2_1').firstElementChild.id,
      rank_2_2_choice: document.getElementById('rank_2_2').firstElementChild.id
    };

    const info = {
      _id: {worker}.worker,
      rank_2_answer
    };

    const res = await fetch('/api/question_stuff', {
      method: 'post',
      body: JSON.stringify(info)
    })

    router.push('ranking_3')
  }

  const drag_start = async event => {
    event.dataTransfer.setData('text/plain', event.target.id);
    
    setTimeout(() => {
      event.target.classList.add('hide');
    }, 0);
  }

  const drag_enter = async event => {
    event.preventDefault();
  }

  const drag_over = async event => {
    event.preventDefault();
  }

  const drag_end = async event => {
    event.preventDefault();
    event.target.classList.remove('hide');
  }

  const drop = async event => {
    const id = event.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    event.target.appendChild(draggable);
    draggable.classList.remove('hide');
  }

    return (
      <Question_Layout>
        <Head>
          <title>Section 3</title>
        </Head>
      
        <div id="w_id_sec">ID: { worker }</div>
        <br/>

        <div id="top">
          <h1>Section 3 of 3</h1>
          <p><strong>Directions:</strong> Please order the organisms from the one that went extinct the longest ago, 
            to the one that has most recently gone extinct by dragging them to the appropriate box. 
            Feel free to use the work space while ordering them.
          </p>
        </div>

        <div className="image_gal">
          <div className="row">
            <div className="column_2">
              <img src="/images/img_17.jpg"
                id="img_17"
                height={250}
                width={400}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
              />
            </div>

            <div className="column_2">
              <img src="/images/img_1.jpg"
                id="img_1"
                height={350}
                width={400}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
              />
            </div>
          </div>

          <div className="row">
            <div className="column_2">
              <div className="div_2" 
                id="rank_2_1" 
                onDragEnter={drag_enter} 
                onDragOver={drag_over} 
                onDrop={drop}
              />1
            </div>
                
            <div className="column_2">
              <div className="div_2" 
                id="rank_2_2"
                onDragEnter={drag_enter} 
                onDragOver={drag_over} 
                onDrop={drop}
              />2
            </div>
          </div>
        </div>

        <br/>
        <p id="diag">Extinct Longest</p>
        <p id="diag_1">Extinct Most Recently</p>
        <br/>

        <h1>Work space</h1>

        <div className="reserve" 
          id="reserve"
          onDragEnter={drag_enter} 
          onDragOver={drag_over} 
          onDrop={drop}
        />
        <br/>
          
        <input type="submit" onClick={submit_ranking}></input>
      </Question_Layout>
    )
  }