import Question_Layout from "../../../components/question_layout"
import Head from "next/head"
import {useRouter} from 'next/router'
import { useContext } from "react"
import { WorkerContext } from "../../../context/WorkerContext"

export default function Ranking_7() {
  const router = useRouter()
  const {worker} = useContext(WorkerContext)

  const submit_ranking = async event => {
    event.preventDefault()

    const rank_7_answer = {
      rank_7_1_choice: document.getElementById('rank_7_1').firstElementChild.id,
      rank_7_2_choice: document.getElementById('rank_7_2').firstElementChild.id,
      rank_7_3_choice: document.getElementById('rank_7_3').firstElementChild.id,
      rank_7_4_choice: document.getElementById('rank_7_4').firstElementChild.id,
      rank_7_5_choice: document.getElementById('rank_7_5').firstElementChild.id,
      rank_7_6_choice: document.getElementById('rank_7_6').firstElementChild.id,
      rank_7_7_choice: document.getElementById('rank_7_7').firstElementChild.id
    };

    const info = {
      _id: {worker}.worker,
      rank_7_answer
    };

    const res = await fetch('/api/question_stuff', {
      method: 'post',
      body: JSON.stringify(info)
    })

    router.push('ranking_17')
  }

  const reset = async event => {
    console.log("NOT IMPLEMENTED!!")
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
      
        <div id="w_id_sec">ID: {worker}</div>
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
            <div className="column_5">
              <img src="/images/img_4.png"
                id="img_4"
                height={150}
                width={215}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
              />
            </div>

            <div className="column_5">
              <img src="/images/img_5.png"
                id="img_5"
                height={150}
                width={215}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
              />
            </div>

            <div className="column_5">
              <img src="/images/img_7.jpg"
                id="img_7"
                height={150}
                width={215}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
              />
            </div>

            <div className="column_5">
              <img src="/images/img_8.jpg"
                id="img_8"
                height={150}
                width={215}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
                />
              </div>

            <div className="column_5">
              <img src="/images/img_9.png"
                id="img_9"
                height={150}
                width={215}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
              />
            </div>
          </div>

          <div className="row">
            <div className="column_5">
              <img src="/images/img_6.png"
                id="img_6"
                height={150}
                width={215}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
              />
            </div>

            <div className="column_5">
              <img src="/images/img_13.jpg"
                id="img_13"
                height={150}
                width={215}
                draggable="true"
                onDragStart={drag_start}
                onDragEnd={drag_end}
              />
            </div>
          </div>

          <p id="diag">Extinct Longest</p>
          <br/>
          <br/>
          <br/>

          <div className="row">
            <div className="column_5">
              <div className="div_5" 
                  id="rank_7_1" 
                  onDragEnter={drag_enter} 
                  onDragOver={drag_over} 
                  onDrop={drop}
                />1
            </div>

            <div className="column_5">
              <div className="div_5" 
                  id="rank_7_2" 
                  onDragEnter={drag_enter} 
                  onDragOver={drag_over} 
                  onDrop={drop}
                />2
            </div>

            <div className="column_5">
              <div className="div_5" 
                  id="rank_7_3" 
                  onDragEnter={drag_enter} 
                  onDragOver={drag_over} 
                  onDrop={drop}
                />3
            </div>

            <div className="column_5">
              <div className="div_5" 
                  id="rank_7_4" 
                  onDragEnter={drag_enter} 
                  onDragOver={drag_over} 
                  onDrop={drop}
                />4
            </div>
                
            <div className="column_5">
              <div className="div_5" 
                  id="rank_7_5" 
                  onDragEnter={drag_enter} 
                  onDragOver={drag_over} 
                  onDrop={drop}
                />5
            </div>
          </div>

          <div className="row">
            <div className="column_5">
              <div className="div_5" 
                id="rank_7_6" 
                onDragEnter={drag_enter} 
                onDragOver={drag_over} 
                onDrop={drop}
              />6
            </div>

            <div className="column_5">
              <div className="div_5" 
                id="rank_7_7" 
                onDragEnter={drag_enter} 
                onDragOver={drag_over} 
                onDrop={drop}
              />7
            </div>
                
            </div>
              <p id="diag_1">Extinct Most Recently</p>
            </div>

        <br/>
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